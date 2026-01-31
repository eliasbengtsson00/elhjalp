import "./globals.css";
import { Zalando_Sans_Expanded } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
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
    default: 'Elhjälp Sverige AB | Din elektriker i Borås',
    template: '%s | Elhjälp Sverige AB' 
  },
  description: 'Professionella elinstallationer, felsökning och laddboxar för privatpersoner och företag i Borås med omnejd.',
  metadataBase: new URL('https://elhjalpsverige.se'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv" suppressHydrationWarning className={zalando.variable}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light');
      }
    `,
          }}
        />
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
