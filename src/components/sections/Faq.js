"use client";
import { useState } from "react";
import { Plus, Minus } from "iconoir-react";

export default function Faq({ items: itemsProp }) {
  const items = itemsProp ?? [];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      
      <div className="max-w-7xl mx-auto md:px-12 px-6">
        <h2 className="text-lg md:text-xl font-light text-foreground leading-relaxed">
          Vanliga frågor
        </h2>

        <div>
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full gap-x-4 py-8 flex justify-between items-center text-left text-muted-text hover:text-foreground transition-colors duration-200 group cursor-pointer outline-none"
              >
                <span className="text-base font-light">
                  {item.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-6 h-6 text-muted-text group-hover:text-foreground" />
                ) : (
                  <Plus className="w-6 h-6 text-muted-text group-hover:text-foreground" />
                )}
              </button>

              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base font-light text-text-dim max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}