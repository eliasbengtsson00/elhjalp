import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import LocationStrip from "@/components/sections/LocationStrip";
import Faq from "@/components/sections/Faq";
import SeoText from "@/components/sections/SeoText";
import TrustRegistration from "@/components/sections/TrustRegistration";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationStrip />
      <ServicesGrid />
      <Faq />
      <TrustRegistration />
      <SeoText />
    </>
  );
}
