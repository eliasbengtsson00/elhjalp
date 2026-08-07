import { draftMode } from "next/headers";
import Script from "next/script"; // <-- Replaced GoogleTagManager with native Script
import { VisualEditing } from "next-sanity/visual-editing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/sanity/lib/live";
import { getSiteSettings } from "@/sanity/lib/siteSettings";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "Elhjälp Sverige AB | Din elektriker i Borås",
    template: "%s | Elhjälp Sverige AB",
  },
  description:
    "Professionella elinstallationer, felsökning och service för privatpersoner och företag i Borås med omnejd.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export default async function FrontendLayout({ children }) {
  const { isEnabled: isDraftMode } = await draftMode();
  const siteSettings = await getSiteSettings();
  const { companyDetails, contactInfo, socialLinks, openingHours, geo } =
    siteSettings ?? {};

  const socials = Object.fromEntries(
    (socialLinks ?? []).map((link) => [link.platform, link.url])
  );

  // "Vinkelvägen 8, 518 41 Sjömarken" -> streetAddress / postalCode / addressLocality
  const [streetAddress, localityPart] = (companyDetails?.address ?? "")
    .split(",")
    .map((part) => part.trim());
  const localityMatch = localityPart?.match(/^(\d{3}\s?\d{2})\s+(.+)$/);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elhjälp Sverige AB",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/logo.svg`,
    telephone: contactInfo?.phone,
    email: contactInfo?.email,
    taxID: companyDetails?.orgNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      postalCode: localityMatch?.[1],
      addressLocality: localityMatch?.[2] ?? localityPart,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo?.lat,
      longitude: geo?.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Borås",
      },
      {
        "@type": "Region",
        name: "Sjuhärad",
      },
    ],
    openingHoursSpecification: (openingHours ?? []).map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: (spec.days ?? []).map(capitalize),
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: (socialLinks ?? []).map((link) => link.url),
    description:
      "Professionella elinstallationer, felsökning och service för privatpersoner och företag i Borås med omnejd.",
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Swapped to Next.js Script with lazyOnload */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar socials={socials} />
      <main className="flex-grow">{children}</main>
      <Footer
        companyDetails={companyDetails}
        contactInfo={contactInfo}
        socials={socials}
      />
      <SanityLive />
      {isDraftMode && <VisualEditing />}
    </div>
  );
}
