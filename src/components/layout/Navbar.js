"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
  { name: "Tjänster", href: "/tjanster" },
  { name: "Om oss", href: "/om-oss" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isLightMode = mounted && resolvedTheme === "light";

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
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

        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-light text-text-dim hover:text-foreground transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="px-7 py-4 rounded-full border border-border-medium text-text-dim hover:text-foreground hover:border-foreground hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Ta kontakt
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          className="lg:hidden flex flex-col justify-center items-end space-y-1.5 w-8 h-8 focus:outline-none z-50 cursor-pointer"
        >
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`} />
          <span className={`h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-3"}`} />
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}