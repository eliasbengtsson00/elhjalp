import { getServices } from "@/lib/services";

export default async function sitemap() {
  const baseUrl = "https://elhjalp.com";

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

  try {
    // Dynamic service routes
    const services = await getServices();
    const servicePages = services.map((service) => ({
      url: `${baseUrl}/tjanster/${service.slug}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticPages, ...servicePages];
  } catch (error) {
    // Fallback to just static pages if service fetching fails
    return staticPages;
  }
}