import { PhoneSolid } from "iconoir-react";
import ContactForm from "@/components/forms/ContactForm";

export default function Hero() {
  return (
    <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col text-left">
          <h1 className="text-4xl">
            Auktoriserad Elektriker i Borås <br />
            <span className="text-sm text-muted-text">
              För service och elinstallationer
            </span>
          </h1>
          <p className="mt-10 text-sm md:text-base text-muted-text max-w-lg">
            Säkra installationer för privatpersoner och företag i Sjuhärad
            med omnejd. Kontakta oss för en kostnadsfri offert!
          </p>
          <div className="mt-10">
            <a
              href="tel:+123456789"
              className="flex items-center gap-4 border-green-900 border rounded-full px-8 py-4 text-xs uppercase tracking-widest hover:bg-green-900 hover:text-white transition duration-300 w-fit"
            >
              <PhoneSolid width={18} height={18} />
              <span>Ring direkt</span>
            </a>
          </div>
        </div>

        <div id="contact-form" className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10">
          <h2 className="text-lg mb-8 uppercase tracking-tighter">
            Skicka ett meddelande
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}