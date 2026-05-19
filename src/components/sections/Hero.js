"use client";

import { PageEdit, ArrowDown } from "iconoir-react";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <section className="pt-12 md:pt-24 relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Elhjälp servicebil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center opacity-15 md:opacity-30"
        />
        {/* Gradient overlays for text legibility and section blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent via-20% to-80% md:via-40% md:to-100%"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl max-w-3xl leading-[1.2]">
            Auktoriserad Elektriker med bas i Borås
          </h1>

          <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed max-w-lg">
            Din auktoriserade och kompletta elektriker i Västsverige.
            Installation, service och felsökning för privatpersoner och företag.
          </p>

          {/* Buttons */}
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="group flex items-center gap-4 border border-white bg-white text-zinc-900 px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <PageEdit width={20} height={20} strokeWidth={1} />
              <span className="text-sm font-light">Få kostnadsfri offert</span>
            </a>

            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="group flex items-center gap-4 border border-white text-white px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ArrowDown width={20} height={20} strokeWidth={1} />
              <span className="text-sm font-light">Se våra tjänster</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
