import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import LocationStrip from "@/components/sections/LocationStrip";
import Faq from "@/components/sections/Faq";
import SeoText from "@/components/sections/SeoText";
import TrustRegistration from "@/components/sections/TrustRegistration";
import ContactSection from "@/components/sections/ContactSection";
import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const homePage = await client.fetch(HOME_PAGE_QUERY);
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
      <ContactSection heading={contactHeading} copy={contactCopy} />
      <SeoText value={seoText} />
    </>
  );
}
