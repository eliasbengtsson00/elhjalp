import ContactForm from "@/components/forms/ContactForm";

export default function ContactCard() {
  return (
    <div className="bg-surface/30 border border-surface-hover/50 rounded-4xl p-8 md:p-12">
      <h3 className="mb-8 font-light text-muted-text text-base">
        Kontakta oss
      </h3>
      <ContactForm />
    </div>
  );
}
