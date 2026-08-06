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
  seo{
    metaDescription
  }
}`

export const RELATED_SERVICES_QUERY = `*[_type == "service" && category == $category && slug.current != $slug] | order(title asc)[0...2]{
  title,
  "slug": slug.current,
  description
}`
