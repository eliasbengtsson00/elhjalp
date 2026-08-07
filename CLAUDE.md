# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/lead-gen website for Elhjälp Sverige AB (a Swedish electrician business in Borås). Next.js App Router site, Swedish-language content throughout (`lang="sv"`). All UI copy, service content, and SEO metadata is in Swedish — keep new copy in Swedish unless told otherwise.

Content is authored in **Sanity Studio** (mounted inside this same Next.js app) rather than hardcoded in the repo — see "Content model" below.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # run production build
npm run lint    # eslint (eslint-config-next core-web-vitals)
```

There is no test suite configured in this repo.

## Environment

`.env.local` requires:
- `RESEND_API_KEY` — Resend API key for the contact form email
- `RESEND_FROM_EMAIL` — the "from" address the contact form email is sent as
- `CONTACT_EMAIL` — inbox address the contact form delivers to
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID
- `NEXT_PUBLIC_SITE_URL` — canonical site origin, used in metadata, JSON-LD, and `sitemap.js`
- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` — Sanity project identity
- `SANITY_REVALIDATE_SECRET` — validates the Sanity webhook that hits `/api/revalidate`
- `SANITY_API_READ_TOKEN` — **private**, server-only. Lets the server read draft content (draft-mode route, `sanityFetch`'s `serverToken`). Never expose this to the browser.
- `NEXT_PUBLIC_SANITY_API_READ_TOKEN` — **public**, intentionally browser-exposed (`sanityFetch`'s `browserToken`), so it must be a *separate*, Viewer-only-scoped token, never a copy of `SANITY_API_READ_TOKEN`. It's what lets `<SanityLive />` subscribe to draft mutations client-side during Presentation preview.

## Architecture

**Stack**: Next.js (App Router) + React 19 + Tailwind CSS v4, with **Sanity** as a headless CMS (`sanity` + `next-sanity`, Studio mounted in-app). React Compiler is enabled (`reactConfig.reactCompiler = true` in `next.config.mjs`) — avoid manual `useMemo`/`useCallback` micro-optimizations that fight the compiler. Path alias `@/*` maps to `src/*`.

**Routing structure**: everything under `src/app/` splits into two independent trees:
- `src/app/(frontend)/` — a route group for the entire public marketing site. `(frontend)/layout.js` fetches `siteSettings` (via `getSiteSettings()`), renders the global `<Navbar>`/`<Footer>`, the JSON-LD `Electrician` schema, GTM script, and the Sanity Live Preview components (`<SanityLive />`, conditionally `<VisualEditing />`). Pages inside: `page.js` (`/`), `kontakt/page.js` (`/kontakt`), `om-oss/page.js` (`/om-oss`), `tjanster/page.js` (`/tjanster`, the services index), and `(services)/tjanster/[slug]/page.js` (`/tjanster/[slug]`, individual service pages). The nested `(services)` group doesn't appear in the URL — it exists only so the static index and the dynamic slug route can be separate files while jointly owning the `/tjanster` URL space and both inheriting the `(frontend)` layout.
- `src/app/studio/[[...tool]]/page.jsx` — Sanity Studio, mounted at `/studio` **outside** the `(frontend)` group so the authoring UI never gets the marketing Navbar/Footer/JSON-LD.

`src/app/layout.js` (the true root layout, outside both groups above) only handles the `<html>`/`<body>` shell and font loading.

Two API routes support the CMS integration: `src/app/api/revalidate/route.js` (Sanity webhook → `revalidatePath`, guarded by `SANITY_REVALIDATE_SECRET`) and `src/app/api/draft-mode/enable/route.js` (`defineEnableDraftMode` from `next-sanity/draft-mode` — flips on Next's Draft Mode when Presentation Tool opens a document).

**Content model**: there is no static content array in the repo — all page and service content lives in Sanity, defined by the schemas in `src/sanity/schemaTypes/`. Documents: `homePage`, `aboutPage`, `contactPage`, `siteSettings` (all singletons, pinned to fixed items in `src/sanity/structure.js` so editors can't delete/duplicate them), `service` (a normal collection: slug, title, category, description, content, mainImage, seo), and `teamMember` (referenced from `contactPage`). GROQ queries live in `src/sanity/lib/queries.js`; add a new service by creating a document in Studio, not by touching code. `RELATED_SERVICES_QUERY` matches by `category`.

**Data fetching**: pages fetch through `sanityFetch` (from `src/sanity/lib/live.js`), never the raw `client` directly — this is what makes Live Preview work (see below). Because Next layouts can't pass fetched data down into the page components they wrap, any page that needs `siteSettings` (not just the layout) calls the shared `getSiteSettings()` helper in `src/sanity/lib/siteSettings.js`, which wraps `sanityFetch` in `React.cache()` so it still only hits the network once per request. The `[slug]/page.js` service page follows the same pattern for its own document (`getServiceBySlug`), since both `generateMetadata` and the page component need it.

**Sanity Live Preview / Draft Mode**: `sanity.config.js` registers `presentationTool` (from `sanity/presentation`) alongside `structureTool` and `visionTool`, with `previewUrl.previewMode.enable` pointing at `/api/draft-mode/enable` and `resolve.locations` (in `src/sanity/resolve.js`) mapping each document type to the frontend route(s) it renders on. `<VisualEditing />` (rendered in `(frontend)/layout.js`) is gated behind `await draftMode()` from `next/headers` and only mounts during an active preview session. `src/sanity/lib/client.js` sets `useCdn: false` (revalidation is handled via Live Content API tags + the webhook, not CDN staleness) and `stega: { studioUrl: '/studio' }` (embeds Content Source Maps so Presentation's "Documents on this page" panel can resolve what's rendered).

Because `sanityFetch`'s `perspective`/`stega` defaults dynamically check `draftMode()` when not explicitly set, any `sanityFetch` call made **outside a request context** — `generateStaticParams` in `[slug]/page.js`, and `sitemap.js` — must explicitly pass `perspective: "published"` and `stega: false`, or the build crashes (`draftMode()` isn't callable at build time). Every other `sanityFetch` call can omit both and let them resolve automatically based on whether draft mode is active.

**Contact form flow**: `ContactForm.js` (client component) uses React's `useActionState` to call the server action `sendEmail` in `src/lib/actions.js`. That action validates with a `zod` schema, checks a `_gotcha` honeypot field for spam, and sends via Resend. On success it fires a GTM `form_success` event via `sendGTMEvent` from `@next/third-parties/google` — this is the one place that package is actually used. The GTM *container script* itself is injected separately in `(frontend)/layout.js` via a hand-rolled `next/script` snippet (not `@next/third-parties`'s `<GoogleTagManager>` component) for `strategy="lazyOnload"` control; don't remove `@next/third-parties` thinking it's dead, and don't be surprised the two GTM integration points don't match — that split is intentional.

**Theming**: single dark theme, permanently — there is no light mode and no toggle (`next-themes` was removed; do not reintroduce it without discussion). Theme tokens are CSS custom properties defined once in `:root` in `globals.css`, then mapped into Tailwind's `@theme` block (e.g. `--color-background: var(--bg)`) — use the Tailwind utility classes (`bg-background`, `text-foreground`, `text-muted-text`, `text-text-dim`, `border-border-subtle`, `border-border-medium`, `bg-surface`, `bg-surface-hover`, `text-accent`, `border-accent-subtle`) in components rather than raw Tailwind palette classes (`zinc-*`, `white`, `emerald-*`, etc.) or hardcoded colors, so the whole app stays on one color system.

**SEO**: `(frontend)/layout.js` sets global metadata plus a hand-written JSON-LD `Electrician` schema (address, geo, opening hours) sourced from `siteSettings` — update the Sanity content, not the code, for real-world business detail changes. `sitemap.js` and `robots.js` are generated from Sanity content; `sitemap.js` fetches each document's real `_updatedAt` for `lastModified` (falling back to omitting the field, never to `new Date()`) and omits it entirely for singleton pages that don't exist yet in the dataset.

**Directory layout**: `src/components/` is organized by role: `layout/` (Navbar, Footer, MobileMenu), `sections/` (page-level content blocks composed in `app/(frontend)/page.js`), `ui/` (small reusable elements like `ServiceCard`), `forms/` (ContactForm), plus top-level shared pieces like `ContactCard.js` (used by both the homepage's `ContactSection` and `/kontakt`). `src/sanity/` holds everything CMS-related: `lib/` (client, live-preview, image URL builder, cached fetchers), `schemaTypes/`, `structure.js` (desk structure), `resolve.js` (Presentation locators).
