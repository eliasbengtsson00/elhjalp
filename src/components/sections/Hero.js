"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function Hero({ heading, subtext, ctas, backgroundImage }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  const bgImageUrl = backgroundImage
    ? urlFor(backgroundImage).width(1920).url()
    : "/hero-bg.webp";

  return (
    <section className="pt-12 md:pt-24 relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt="Elhjälp servicebil"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center opacity-15 md:opacity-30"
        />
        {/* Gradient overlays for text legibility and section blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent via-20% to-80% md:via-40% md:to-100%"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl max-w-3xl leading-[1.2]">
            {heading}
          </h1>

          <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed max-w-lg">
            {subtext}
          </p>

          {/* Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row items-start gap-4">
            {(ctas ?? []).map((cta, i) => {
              const isAnchor = cta.href?.startsWith("#");
              const className =
                i === 0
                  ? "w-fit text-center border border-foreground bg-foreground text-background px-8 py-4 rounded-full text-sm font-light transition-all duration-200 hover:scale-105 active:scale-95"
                  : "w-fit text-center border border-foreground text-foreground px-8 py-4 rounded-full text-sm font-light transition-all duration-200 hover:scale-105 active:scale-95";

              return isAnchor ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  onClick={(e) => scrollToSection(e, cta.href.slice(1))}
                  className={className}
                >
                  {cta.label}
                </a>
              ) : (
                <Link key={cta.href} href={cta.href} className={className}>
                  {cta.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
