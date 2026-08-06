import { client } from "@/sanity/lib/client";
import { SERVICES_INDEX_QUERY } from "@/sanity/lib/queries";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const services = (await client.fetch(SERVICES_INDEX_QUERY)) ?? [];

  // Static core pages
  const staticPages = [
    "",
    "/kontakt",
    "/om-oss",
    "/tjanster",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service routes fetched live from Sanity
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/tjanster/${service.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}