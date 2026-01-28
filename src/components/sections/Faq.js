"use client";
import { useState } from "react";
import { Plus, Minus } from "iconoir-react";

const FAQ_DATA = [
  {
    q: "Hur snabbt kan en elektriker komma i Borås?",
    a: "Vi strävar efter att erbjuda hjälp inom 24-48 timmar för mindre servicearbeten. Vid akuta ärenden försöker vi prioritera besöket samma dag."
  },
  {
    q: "Vad kostar det att anlita en elektriker?",
    a: "Vi arbetar med både fasta priser och löpande timdebitering. Kontakta oss för en kostnadsfri offert anpassad efter just ditt projekt."
  },
  {
    q: "Är ni registrerade hos Elsäkerhetsverket?",
    a: "Ja, Elhjälp Sverige AB är ett registrerat elföretag hos Elsäkerhetsverket. Du kan kontrollera vår behörighet direkt i deras register 'Kolla elföretaget'."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-15">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto md:px-12 px-6">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8">
          Vanliga frågor
        </h2>
        
        <div className="space-y-0">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border-b border-zinc-800/60 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left hover:text-zinc-300 transition-colors group cursor-pointer"
              >
                <span className="text-sm md:text-base font-light tracking-tight">
                  {item.q}
                </span>
                {openIndex === i ? <Minus className="w-4 h-4 text-zinc-500" /> : <Plus className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" />}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}