"use client";
import { useState } from "react";
import { Plus, Minus } from "iconoir-react";

const FAQ_DATA = [
  {
    q: "Hur snabbt kan en elektriker komma i Borås?",
    a: "Vi strävar efter att erbjuda hjälp inom 24-48 timmar för mindre servicearbeten. Vid akuta ärenden, kontakta oss så gör vi vårt bästa för att hitta en lösning."
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

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
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
          }) 
        }}
      />
      
      <div className="max-w-7xl mx-auto md:px-12 px-6">
        <h2 className="text-lg md:text-xl font-light text-white leading-relaxed">
          Vanliga frågor
        </h2>
        
        <div>
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full gap-x-4 py-8 flex justify-between items-center text-left text-muted-text hover:text-white transition-colors duration-200 group cursor-pointer outline-none"
              >
                <span className="text-base font-light">
                  {item.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-6 h-6 text-muted-text group-hover:text-white" />
                ) : (
                  <Plus className="w-6 h-6 text-muted-text group-hover:text-white" />
                )}
              </button>
              
              <div 
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base font-light text-zinc-500 max-w-2xl">
                    {item.a}
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