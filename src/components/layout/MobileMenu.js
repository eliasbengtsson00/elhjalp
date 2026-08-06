"use client";
import Link from "next/link";
import { NAV_LINKS } from "./Navbar";
import { Facebook, Instagram } from "iconoir-react";

export default function MobileMenu({ isOpen, toggleMenu, socials }) {
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
            className="text-lg text-foreground font-light hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/kontakt"
          onClick={toggleMenu}
          className="border border-foreground rounded-full px-7 py-4 text-lg font-light text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Ta kontakt
        </Link>

        {/* Socials */}
        <div className="pt-12 flex justify-center items-center gap-4">
          <a
            href={socials?.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-border-medium transition-all duration-200 text-text-dim hover:text-foreground"
          >
            <Facebook width={18} height={18} />
          </a>

          <a
            href={socials?.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-border-medium transition-all duration-200 text-text-dim hover:text-foreground"
          >
            <Instagram width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
}