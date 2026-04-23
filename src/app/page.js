import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import LocationStrip from "@/components/sections/LocationStrip";
import Faq from "@/components/sections/Faq";
import SeoText from "@/components/sections/SeoText";
import TrustRegistration from "@/components/sections/TrustRegistration";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRegistration />
      <ServicesGrid />
      <Faq />
      <ContactSection />
      <LocationStrip />
      <SeoText />
    </>
  );
}