import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import LocationStrip from "@/components/sections/LocationStrip";
import Faq from "@/components/sections/Faq";
import SeoText from "@/components/sections/SeoText";
import TrustRegistration from "@/components/sections/TrustRegistration";
import ContactSection from "@/components/sections/ContactSection";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { getSiteSettings } from "@/sanity/lib/siteSettings";

export default async function Home() {
  const { data: homePage } = await sanityFetch({ query: HOME_PAGE_QUERY });
  const siteSettings = await getSiteSettings();
  const {
    heroSection,
    faqItems,
    serviceAreas,
    seoText,
    contactHeading,
    contactCopy,
    featuredServices,
  } = homePage ?? {};

  return (
    <>
      <Hero
        heading={heroSection?.heading}
        subtext={heroSection?.subtext}
        ctas={heroSection?.ctas}
        backgroundImage={heroSection?.backgroundImage}
      />
      <TrustRegistration />
      <ServicesGrid services={featuredServices} />
      <Faq items={faqItems} />
      <LocationStrip areas={serviceAreas} />
      <ContactSection
        heading={contactHeading}
        copy={contactCopy}
        phone={siteSettings?.contactInfo?.phone}
      />
      <SeoText value={seoText} />
    </>
  );
}
