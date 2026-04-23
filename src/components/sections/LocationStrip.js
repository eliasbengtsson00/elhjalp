export default function LocationStrip() {
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

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto md:px-12 px-6">
        <div className="flex flex-col gap-8 md:gap-10">

          <h2 className="text-lg md:text-xl font-light text-white leading-relaxed">
            Verksamma områden
          </h2>

          <div className="flex flex-wrap gap-x-6 gap-y-6">
            {areas.map((area) => (
              <span
                key={area}
                className="text-base font-light leading-relaxed text-muted-text hover:text-white transition-colors duration-200 cursor-default"
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
