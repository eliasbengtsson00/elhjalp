import { Facebook, Instagram } from "iconoir-react";

export default function Footer({ companyDetails, contactInfo, socials }) {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-12 md:px-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        <div className="pt-12 flex justify-center items-center gap-4">

          <a
            href={socials?.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besök Elhjälp på Facebook"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-border-medium transition-all duration-200 text-text-dim hover:text-foreground"
          >
            <Facebook width={18} height={18} />
          </a>

          <a
            href={socials?.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besök Elhjälp på Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle hover:border-border-medium transition-all duration-200 text-text-dim hover:text-foreground"
          >
            <Instagram width={18} height={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-y-9 text-center text-sm font-light">
          <div className="flex flex-col space-y-3 md:text-left">
            <h4 className="text-text-dim">
              Företag
            </h4>
            <div className="text-sm text-foreground/70 space-y-1">
              {companyDetails?.address && <p>{companyDetails.address}</p>}
              {companyDetails?.orgNumber && (
                <p>Org.nr: {companyDetails.orgNumber}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-end text-center order-3 md:order-2">
            <p className="text-text-dim">
              © {year} Elhjälp Sverige AB
            </p>
          </div>

          <div className="flex flex-col space-y-3 md:items-end md:text-right order-2 md:order-3">
            <h4 className="text-text-dim">
              Kontakt
            </h4>
            <div className="flex flex-col text-foreground/70 space-y-1">
              {contactInfo?.phone && (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {contactInfo.phone}
                </a>
              )}
              {contactInfo?.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {contactInfo.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}