"use client";
import Link from "next/link";
import ModeToggle from "@/components/ui/ModeToggle";
import { NAV_LINKS } from "./Navbar";

export default function MobileMenu({ isOpen, toggleMenu }) {
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
            className="text-2xl font-light tracking-wide text-foreground"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/kontakt"
          onClick={toggleMenu}
          className="mt-10 border rounded-full border-border-subtle px-10 py-4 text-sm uppercase tracking-widest text-foreground"
        >
          Ta Kontakt
        </Link>

        <div className="absolute bottom-16 w-full flex justify-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}