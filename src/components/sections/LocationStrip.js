export default function LocationStrip() {
  const areas = [
    "Borås", "Sjuhärad", "Fristad", "Viskafors", 
    "Dalsjöfors", "Sandared", "Bollebygd", "Ulricehamn"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Subtle Label */}
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 whitespace-nowrap">
            Verksamma områden
          </h2>
          
          {/* Minimalist List */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {areas.map((area) => (
              <span 
                key={area} 
                className="text-[11px] md:text-xs text-zinc-400 hover:text-white transition-colors duration-300 cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}