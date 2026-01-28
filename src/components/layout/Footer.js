"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ModeToggle from "@/components/ui/ModeToggle";

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
};

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pb-12 md:px-12 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        {/* Top Row */}
        <div className="pt-8 items-center">
          {/* 2.Desktop Switch */}
          <div className="hidden md:flex justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mx-auto max-w-7xl border-t border-border-subtle mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-y-9 text-center">
          {/* 1. Company Info */}
          <div className="flex flex-col space-y-3 md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
              {FOOTER_LINKS.company.title}
            </h4>
            <div className="text-sm text-foreground/70 space-y-1">
              {FOOTER_LINKS.company.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>

          {/* 2. Copyright */}
          <div className="flex justify-center items-end text-center order-3 md:order-2">
            <p className="text-muted-text text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
              © {year} Elhjälp Sverige AB
            </p>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col space-y-3 md:items-end md:text-right order-2 md:order-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
              {FOOTER_LINKS.contact.title}
            </h4>
            <div className="flex flex-col text-sm text-foreground/70 space-y-1">
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
