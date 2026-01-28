"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/Theme";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
  { name: "Tjänster Privat", href: "/tjanster-privat" },
  { name: "Tjänster Företag", href: "/tjanster-foretag" },
  { name: "Om Oss", href: "/om-oss" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLightMode } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full relative z-50">
      <nav className="mx-auto flex items-center justify-between px-6 py-8 max-w-7xl md:px-12">
        <Link href="/" className="relative w-32 outline-none">
          <Image
            src="/elhjalp.svg"
            alt="Logo"
            width={130}
            height={32}
            className={`${isLightMode ? "" : "invert"} transition-all duration-500`}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-widest text-muted-text hover:text-foreground transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full border border-zinc-700 px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Ta Kontakt
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          className="lg:hidden flex flex-col justify-center items-end space-y-1.5 w-8 h-8 focus:outline-none z-50 cursor-pointer"
        >
          {/* Hamburger spans stay as you have them, they look great! */}
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`} />
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-3"}`} />
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}