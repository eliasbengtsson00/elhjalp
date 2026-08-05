# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/lead-gen website for Elhjälp Sverige AB (a Swedish electrician business in Borås). Next.js App Router site, Swedish-language content throughout (`lang="sv"`). All UI copy, service content, and SEO metadata is in Swedish — keep new copy in Swedish unless told otherwise.

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
- `CONTACT_EMAIL` — inbox address the contact form delivers to
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID

## Architecture

**Stack**: Next.js (App Router) + React 19 + Tailwind CSS v4 + `next-themes`. React Compiler is enabled (`reactConfig.reactCompiler = true` in `next.config.mjs`) — avoid manual `useMemo`/`useCallback` micro-optimizations that fight the compiler. Path alias `@/*` maps to `src/*`.

**Routing quirk — two trees serve `/tjanster`**: `src/app/tjanster/page.js` renders the services *index* (`/tjanster`), while `src/app/(services)/tjanster/[slug]/page.js` renders individual service pages (`/tjanster/[slug]`). The `(services)` segment is a route group and does not appear in the URL. When touching service-page routing, remember these are two separate files under different directories that jointly own the `/tjanster` URL space.

**Services are static data, not a CMS/DB**: `src/lib/services.js` exports a `SERVICES` array (slug, title, category, description, content, seoDescription). This single array drives the services grid, individual service pages (`generateStaticParams`/`generateMetadata`), related-service lookups (matched by `category`), and `sitemap.js`. Add a new service by adding an entry here — no other registration is needed.

**Contact form flow**: `ContactForm.js` (client component) uses React's `useActionState` to call the server action `sendEmail` in `src/lib/actions.js`. That action validates with a `zod` schema, checks a `_gotcha` honeypot field for spam, and sends via Resend. On success it fires a GTM `form_success` event client-side. The GTM container itself is injected in `layout.js` via a hand-rolled `next/script` snippet (not `@next/third-parties`'s `GoogleTagManager`, despite that package being a dependency) with `strategy="lazyOnload"` for performance.

**Theming**: Dark is the default and only enabled theme path in `next-themes` config (`Theme.js`: `defaultTheme="dark"`, `enableSystem={false}`), toggled via the `.light` class on `<html>`. Theme tokens are CSS custom properties defined for `:root` (dark) and `.light` in `globals.css`, then mapped into Tailwind's `@theme` block (e.g. `--color-background: var(--bg)`) — use the Tailwind utility classes (`bg-background`, `text-muted-text`, `border-border-subtle`, etc.) in components rather than raw CSS vars or hardcoded colors, so both themes stay in sync. Components reading theme state directly (e.g. `Navbar.js` inverting the logo) must guard against SSR/hydration mismatch with a `mounted` flag before trusting `resolvedTheme`.

**SEO**: `layout.js` sets global metadata plus a hand-written JSON-LD `Electrician` schema (address, geo, opening hours) — update this alongside any real-world business detail changes (address, phone, hours). `sitemap.js` and `robots.js` are generated from `SERVICES` and static route lists; add new top-level routes to `sitemap.js`'s `staticPages` array.

**Directory layout**: `src/components/` is organized by role: `layout/` (Navbar, Footer, MobileMenu), `sections/` (page-level content blocks composed in `app/page.js`), `ui/` (small reusable elements like `ServiceCard`), `forms/`, `providers/`.
