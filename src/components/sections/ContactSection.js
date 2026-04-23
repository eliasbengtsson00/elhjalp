import { PhoneSolid } from "iconoir-react";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left */}
        <div className="flex flex-col text-left pt-4">
          <h2 className="text-4xl leading-[1.2]">Få kostnadsfri offert</h2>
          <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed">
            Oavsett om du planerar en större renovering eller behöver hjälp med
            en mindre installation är vi redo att hjälpa till. Skriv några rader
            så återkommer vi med en{" "}
            <span className="text-white">kostnadsfri offert</span> och förslag
            på tidsplan så snart vi kan.
          </p>

          <div className="mt-20 flex flex-col gap-6">
            <span className="text-white text-base md:text-lg font-light leading-relaxed">
              Behöver du akut hjälp?
            </span>
            <a
              href="tel:+123456789"
              className="flex items-center gap-4 border-green-900 border rounded-full px-6 py-4 text-xs uppercase tracking-widest hover:bg-green-900 hover:text-white transition duration-300 w-fit"
            >
              <PhoneSolid width={14} height={14} />
              <span>Ring direkt</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-4xl p-8 md:p-12">
          <h3 className="mb-8 uppercase tracking-widest font-light text-muted-text text-sm">
            Kontakta oss
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
