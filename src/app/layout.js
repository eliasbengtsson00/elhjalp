import "./globals.css";
import { Zalando_Sans_Expanded } from "next/font/google";

const zalando = Zalando_Sans_Expanded({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-zalando",
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="sv"
      suppressHydrationWarning
      className={zalando.variable}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
