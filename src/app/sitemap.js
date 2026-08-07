import { sanityFetch } from "@/sanity/lib/live";
import { SITEMAP_QUERY } from "@/sanity/lib/queries";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Explicit perspective/stega: sitemap generation has no request context,
  // so sanityFetch must not fall back to checking draftMode() to resolve
  // either default. stega must also stay off here regardless, since these
  // slugs are used to build URLs and stega-encoded strings are unsafe to
  // use as anything but rendered text.
  const { data } = await sanityFetch({
    query: SITEMAP_QUERY,
    perspective: "published",
    stega: false,
  });
  const { homePage, aboutPage, contactPage, services = [] } = data ?? {};

  // The /tjanster index has no single backing document, so use the most
  // recently updated service as its lastModified signal.
  const latestServiceUpdate = services.reduce(
    (latest, service) =>
      !latest || service._updatedAt > latest ? service._updatedAt : latest,
    null,
  );

  const staticPages = [
    { route: "", lastModified: homePage?._updatedAt, priority: 1.0 },
    { route: "/kontakt", lastModified: contactPage?._updatedAt, priority: 0.8 },
    { route: "/om-oss", lastModified: aboutPage?._updatedAt, priority: 0.8 },
    { route: "/tjanster", lastModified: latestServiceUpdate, priority: 0.8 },
  ].map(({ route, lastModified, priority }) => ({
    url: `${baseUrl}${route}`,
    ...(lastModified && { lastModified }),
    changeFrequency: "monthly",
    priority,
  }));

  // Dynamic service routes fetched live from Sanity
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/tjanster/${service.slug}`,
    ...(service._updatedAt && { lastModified: service._updatedAt }),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
