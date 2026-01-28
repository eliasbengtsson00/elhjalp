import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin } from "iconoir-react";

export default function KontaktPage() {
  return (
    <main className="px-6 py-20 md:px-12 max-w-7xl mx-auto pt-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Contact Info */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-text">Ta kontakt</span>
          <h1 className="text-4xl mt-6 mb-10">
            Hur kan vi hjälpa dig?
          </h1>
          
          <div className="space-y-8 mt-12">
            <div className="flex items-start gap-4">
              <Phone className="text-zinc-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Telefon</p>
                <a href="tel:+46723071194" className="text-lg hover:text-zinc-400 transition-colors">0723-07 11 94</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-zinc-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">E-post</p>
                <a href="mailto:philip@elhjalp.com" className="text-lg hover:text-zinc-400 transition-colors">philip@elhjalp.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-zinc-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Område</p>
                <p className="text-lg text-foreground">Borås & Sjuhärad med omnejd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Form container */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}