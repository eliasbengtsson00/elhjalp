"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LocationStrip() {
  const [isOpen, setIsOpen] = useState(false);

  const areas = [
    "Borås",
    "Göteborg",
    "Alingsås",
    "Ulricehamn",
    "Lerum",
    "Partille",
    "Landvetter",
    "Härryda",
    "Kinna",
    "Skene",
    "Vårgårda",
    "Herrljunga",
    "Bollebygd",
    "Tranemo",
    "Svenljunga",
  ];

  // Den visuella listan (för animationerna)
  const visibleAreas = isOpen ? areas : areas.slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto md:px-12 px-6">

        {/* Samma diskreta rubrik som FAQ */}
        <h2 className="text-lg md:text-xl font-light leading-relaxed text-white mb-8">
          Verksamma områden
        </h2>

        {/* SEO & TILLGÄNGLIGHETS-FIX:
          Denna lista syns inte på skärmen, men garanterar att Google 
          och AI-sökmotorer läser in ALLA dina orter direkt vid sidladdning. 
        */}
        <ul className="sr-only">
          {areas.map((area) => (
            <li key={`seo-${area}`}>{area}</li>
          ))}
        </ul>

        {/* Flexbox som radbryter automatiskt */}
        <div className="flex flex-wrap gap-3">
          {visibleAreas.map((area) => (
            <motion.span
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              key={area}
              className="px-5 py-2.5 rounded-full border border-zinc-800/80 bg-zinc-900/30 text-base font-light text-zinc-400 cursor-default"
            >
              {area}
            </motion.span>
          ))}

          {/* Expanderingsknappen */}
          {!isOpen ? (
            <motion.button
              layout
              onClick={() => setIsOpen(true)}
              className="px-5 py-2.5 rounded-full border border-dashed border-zinc-700 text-sm font-light text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors duration-200 outline-none cursor-pointer"
            >
              + {areas.length - 4} fler orter
            </motion.button>
          ) : (
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 rounded-full border border-zinc-700 text-white bg-zinc-800 hover:bg-zinc-700 text-sm font-light transition-colors duration-200 outline-none cursor-pointer"
            >
              Dölj områden
            </motion.button>
          )}
        </div>

      </div>
    </section>
  );
}