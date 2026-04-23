"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { NAV_LINKS } from "./Navbar";
import { Facebook, Instagram, LightBulbOn, LightBulbOff } from "iconoir-react";

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

export default function MobileMenu({ isOpen, toggleMenu }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isLightMode = resolvedTheme === "light";
  const toggleTheme = () => setTheme(isLightMode ? "dark" : "light");

  return (
    <div
      className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-10 text-center px-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={toggleMenu}
            className="text-xl text-foreground font-light hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/kontakt"
          onClick={toggleMenu}
          className="border border-foreground rounded-full px-7 py-4 text-xl font-light text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Ta kontakt
        </Link>

        {/* Socials & Theme Switcher */}
        <div className="pt-12 flex justify-center items-center gap-4">
          <a
            href={FOOTER_LINKS.socials.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-500/20 hover:border-zinc-500 transition-all duration-200 text-zinc-500 hover:text-foreground"
          >
            <Facebook width={18} height={18} />
          </a>

          <a
            href={FOOTER_LINKS.socials.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-500/20 hover:border-zinc-500 transition-all duration-200 text-zinc-500 hover:text-foreground"
          >
            <Instagram width={18} height={18} />
          </a>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 text-zinc-500 rounded-full border border-zinc-500/20 hover:border-blue-300/50 hover:text-blue-300 transition-all duration-200 group cursor-pointer"
            aria-label="Byt tema"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : isLightMode ? (
              <LightBulbOff className="w-5 h-5" />
            ) : (
              <LightBulbOn className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
