import { Phone } from "iconoir-react";
import ContactCard from "@/components/ContactCard";

export default function ContactSection({ heading, copy, phone }) {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left */}
        <div className="flex flex-col text-left pt-4">
          <h2 className="text-4xl leading-[1.2]">{heading}</h2>
          <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed">
            {copy}
          </p>

          {phone && (
            <div className="mt-20 flex flex-col gap-6">
              <span className="text-foreground text-base md:text-lg font-light leading-relaxed">
                Behöver du akut hjälp?
              </span>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-4 border border-accent-subtle text-foreground px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-fit"
              >
                <Phone width={20} height={20} strokeWidth={1} />
                <span className="text-sm font-light">Ring direkt</span>
              </a>
            </div>
          )}
        </div>

        {/* Right */}
        <ContactCard />
      </div>
    </section>
  );
}
