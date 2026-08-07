import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

// Next.js layouts can't pass props down into the page they wrap, so any
// page that also needs siteSettings (not just the layout) calls this
// directly. React.cache() dedupes it to a single fetch per request.
export const getSiteSettings = cache(async () => {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  return data;
});
