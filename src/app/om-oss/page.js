import Image from "next/image";
import { BadgeCheck } from "iconoir-react";

export default function AboutPage() {
  const registryUrl =
    "https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897";

  return (
    <main className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      {/* 1. Header Section */}
      <section className="">
        <h1 className="text-4xl font-light leading-[1.2]">Om Elhjälp</h1>
        <p className="mt-8 text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
          Vi bygger vår verksamhet på transparens och säkerhet. För oss är det
          en självklarhet att du som kund har full insyn i vår behörighet och
          våra registreringar.
        </p>
      </section>

      {/* Profile Picture Section */}
      <section className="mt-20 flex items-center gap-6">
        {/* Circular Image Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden relative">
          <Image src="/placeholder.jpg" alt="Philip" fill className="object-cover" />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col gap-1">
          <p className="text-xl font-light">Philip Falk</p>
          <p className="text-xs text-zinc-700 uppercase tracking-widest">
            Grundare
          </p>
        </div>
      </section>
    </main>
  );
}
