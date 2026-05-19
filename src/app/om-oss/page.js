export default function AboutPage() {
  const registryUrl =
    "https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897";

  return (
    <main className="mt-24 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      {/* 1. Header Section */}
      <section className="">
        <h1 className="text-4xl font-light leading-[1.2]">Om oss</h1>
        <p className="mt-8 text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
          <span className="text-white">Elhjälp Sverige AB</span> grundades 2022 med målet att vara ett elföretag som
          håller vad vi lovar och alltid levererar säkra, kvalitativa och
          professionellt utförda arbeten. Med fokus på service, noggrannhet och
          kundnöjdhet strävar vi efter att skapa långsiktiga relationer och
          trygga lösningar för både privatpersoner och företag.
        </p>
      </section>
    </main>
  );
}
