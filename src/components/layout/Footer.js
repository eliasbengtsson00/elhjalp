"use client";
import { useState, useEffect } from "react";
import { Facebook, Instagram, LightBulbOn, LightBulbOff } from "iconoir-react";
import { useTheme } from "@/components/providers/Theme";

const FOOTER_LINKS = {
  company: {
    title: "Företag",
    details: ["Larsgatan 8, 504 66 Borås", "Org.nr: 559366-5929"],
  },
  contact: {
    title: "Kontakt",
    links: [
      { label: "0723071194", href: "tel:+46723071194" },
      { label: "philip@elhjalp.com", href: "mailto:philip@elhjalp.com" },
    ],
  },
  socials: {
    facebook: {
      href: "https://www.facebook.com/profile.php?id=61569419582779",
    },
    instagram: {
      href: "https://www.instagram.com/elhjalpab/",
    },
  },
};

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { isLightMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  return (
    <footer className="pb-12 md:px-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        {/* Top Row */}
        <div className="pt-12 flex justify-center items-center gap-4">

          {/* Facebook */}
          <a 
            href={FOOTER_LINKS.socials.facebook.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-zinc-500 transition-all duration-200 text-zinc-500 hover:text-foreground"
          >
            <Facebook width={18} height={18} />
          </a>
          
          {/* Instagram */}
          <a 
            href={FOOTER_LINKS.socials.instagram.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-zinc-500 transition-all duration-200 text-zinc-500 hover:text-foreground"
          >
            <Instagram width={18} height={18} />
          </a>

          {/* Light Switch */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 text-zinc-500 rounded-full border border-border-subtle hover:border-blue-300/50 hover:text-blue-300 transition-all duration-200 group cursor-pointer"
            aria-label="Tänd lampan"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : isLightMode ? (
              <LightBulbOff className="w-5 h-5 group-hover:text-blue-600 hover:border-blue-600" />
            ) : (
              <LightBulbOn className="w-5 h-5"/>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-y-9 text-center">
          {/* 1. Company Info */}
          <div className="flex flex-col space-y-3 md:text-left">
            <h4 className="text-base font-light text-zinc-600">
              {FOOTER_LINKS.company.title}
            </h4>
            <div className="text-base text-foreground/70 space-y-1">
              {FOOTER_LINKS.company.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>

          {/* 2. Copyright */}
          <div className="flex justify-center items-end text-center order-3 md:order-2">
            <p className="text-zinc-700 text-base font-light">
              © {year} Elhjälp Sverige AB
            </p>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col space-y-3 md:items-end md:text-right order-2 md:order-3">
            <h4 className="text-base font-light text-zinc-600">
              {FOOTER_LINKS.contact.title}
            </h4>
            <div className="flex flex-col text-base text-foreground/70 space-y-1">
              {FOOTER_LINKS.contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}