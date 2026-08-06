import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail } from "iconoir-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function KontaktPage() {
  const contactPage = await client.fetch(CONTACT_PAGE_QUERY);
  const { heading, intro, teamSectionHeading, teamMembers } =
    contactPage ?? {};
  const members = teamMembers ?? [];

  return (
    <main className="mt-24 px-6 md:px-12 py-24 md:py-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col text-left pt-4">
          <div>
            <h1 className="text-4xl font-light leading-[1.2] mb-6">
              {heading}
            </h1>
            <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed">
              {intro}
            </p>
          </div>
          <div className="mt-20">
            <a
              href="tel:+46723071194"
              className="group flex items-center gap-4 border border-green-900 text-white px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-fit"
            >
              <Phone width={20} height={20} strokeWidth={1} />
              <span className="text-sm font-light">Ring direkt</span>
            </a>
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-4xl p-8 md:p-12">
          <h3 className="mb-8 font-light text-muted-text text-base">
            Kontakta oss
          </h3>
          <ContactForm />
        </div>
      </div>

      <h2 className="mt-24 mb-8 text-lg md:text-xl font-light text-white leading-relaxed">
        {teamSectionHeading}
      </h2>

      <div className="flex flex-wrap gap-8">
        {members.map((member) => (
          <div
            key={member.email ?? member.name}
            className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-8 flex flex-col gap-8 max-w-md w-full"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
                {member.photo && (
                  <Image
                    src={urlFor(member.photo).width(160).height(160).url()}
                    alt={member.photo?.alt || member.name}
                    fill
                    sizes="80px"
                    className="object-cover object-[50%_40%]"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-light text-zinc-500 mb-0.5">
                  {member.role}
                </p>
                <p className="text-xl font-light text-white">{member.name}</p>
              </div>
            </div>

            <div className="space-y-5">
              {member.phone && (
                <div className="flex items-center gap-6 group">
                  <Phone
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    strokeWidth={1}
                  />
                  <div>
                    <p className="text-sm font-light text-zinc-500 mb-0.5">
                      Telefon
                    </p>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="block text-base font-light text-white hover:text-zinc-300 transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              )}

              {member.email && (
                <div className="flex items-center gap-6 group">
                  <Mail
                    className="w-5 h-5 text-zinc-500 shrink-0"
                    strokeWidth={1}
                  />
                  <div>
                    <p className="text-sm font-light text-zinc-500 mb-0.5">
                      E-post
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-base font-light text-white hover:text-zinc-300 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
