export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  companyDetails,
  contactInfo,
  socialLinks,
  openingHours,
  geo
}`

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  heroSection,
  faqItems,
  serviceAreas,
  seoText,
  contactHeading,
  contactCopy,
  featuredServices[]->{
    title,
    "slug": slug.current,
    description
  }
}`

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  heading,
  body
}`

export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  heading,
  intro,
  teamSectionHeading,
  teamMembers[]->{
    name,
    role,
    email,
    phone,
    photo
  }
}`

export const SERVICES_INDEX_QUERY = `*[_type == "service"] | order(title asc){
  title,
  "slug": slug.current,
  description,
  category
}`

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  title,
  category,
  content,
  mainImage,
  seo{
    metaDescription
  }
}`

export const RELATED_SERVICES_QUERY = `*[_type == "service" && category == $category && slug.current != $slug] | order(title asc)[0...2]{
  title,
  "slug": slug.current,
  description
}`

// Single round trip for sitemap.js: just the _updatedAt each route needs
// for an accurate lastModified, not the full page content.
export const SITEMAP_QUERY = `{
  "homePage": *[_type == "homePage"][0]{ _updatedAt },
  "aboutPage": *[_type == "aboutPage"][0]{ _updatedAt },
  "contactPage": *[_type == "contactPage"][0]{ _updatedAt },
  "services": *[_type == "service"]{ "slug": slug.current, _updatedAt }
}`
