import "./globals.css";
import { Zalando_Sans_Expanded } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Theme from "@/components/providers/Theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const zalando = Zalando_Sans_Expanded({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-zalando",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    default: "Elhjälp Sverige AB | Din elektriker i Borås",
    template: "%s | Elhjälp Sverige AB",
  },
  description:
    "Professionella elinstallationer, felsökning och service för privatpersoner och företag i Borås med omnejd.",
  metadataBase: new URL("https://elhjalp.com"),
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

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Elhjälp Sverige AB",
    url: "https://elhjalp.com",
    logo: "https://elhjalp.com/logo.svg",
    image: "https://elhjalp.com/logo.svg",
    telephone: "+46723071194",
    email: "philip@elhjalp.com",
    taxID: "559366-5929",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vinkelvägen 8",
      postalCode: "518 41",
      addressLocality: "Sjömarken",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "57.7153136",
      longitude: "12.823011",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61569419582779",
      "https://www.instagram.com/elhjalpab/",
    ],
    description:
      "Professionella elinstallationer, felsökning och service för privatpersoner och företag i Borås med omnejd.",
  };
  return (
    <html
      lang="sv"
      suppressHydrationWarning
      className={zalando.variable}
      data-scroll-behavior="smooth"
    >
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
        */}
      </head>
      <body className="antialiased font-sans">
        <Theme>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
