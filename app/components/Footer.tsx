const navLinks = ["Work", "About", "News", "Contact"];
const services = [
  { label: "Brand Strategy", href: "/services/brand-strategy" },
  { label: "Visual Identity", href: "/services/visual-identity" },
  { label: "Packaging Design", href: "/services/packaging-design" },
  { label: "Campaign Creative", href: "/services/campaign-creative" },
  { label: "Digital Experience", href: "/services/digital-experience" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-12 md:py-[65px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-10 md:pb-[50px] border-b border-[#e5e7eb]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <span
              className="text-[22px] md:text-[26px] font-medium text-[#0a0a0a] leading-[39px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              inception
            </span>
            <span
              className="text-[14px] text-[#0a0a0a] leading-[21px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Where beauty brands begin.
            </span>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[13px] md:text-[15px] font-medium text-[#0a0a0a] leading-[22.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Navigate
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-60 transition-opacity"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[13px] md:text-[15px] font-medium text-[#0a0a0a] leading-[22.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Services
            </span>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-60 transition-opacity"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[13px] md:text-[15px] font-medium text-[#0a0a0a] leading-[22.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Connect
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@inceptioncreative.agency"
                className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-60 transition-opacity break-all"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                hello@inceptioncreative.agency
              </a>
              <a
                href="tel:+15551234567"
                className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-60 transition-opacity"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 md:pt-[17px] flex justify-center">
          <span
            className="text-[10px] md:text-[11px] text-[#0a0a0a] tracking-[0.12em] leading-[16.5px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            INCEPTION © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
