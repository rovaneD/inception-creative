"use client";

import { useState } from "react";

const services = [
  { label: "Brand Strategy", href: "/services/brand-strategy" },
  { label: "Visual Identity", href: "/services/visual-identity" },
  { label: "Packaging Design", href: "/services/packaging-design" },
  { label: "Campaign Creative", href: "/services/campaign-creative" },
  { label: "Digital Experience", href: "/services/digital-experience" },
];

const navLinks = ["Work", "About", "News", "Contact"];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`z-20 bg-white/90 backdrop-blur-sm ${
        overlay
          ? "absolute top-0 left-0 right-0"
          : "sticky top-0 border-b border-[#e5e7eb]"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-20 h-[72px] md:h-[119px] flex items-center justify-between">
        <a
          href="/"
          className="text-[22px] md:text-[26px] font-medium text-[#0a0a0a] tracking-[-0.025em] leading-tight"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          inception
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-[15px] font-medium text-[#0a0a0a] leading-[22.5px] hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-[15px] font-medium text-[#0a0a0a] leading-[22.5px] hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 top-full pt-2 z-30">
                <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-sm py-2 min-w-[200px]">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-5 py-2.5 text-[13px] font-medium text-[#0a0a0a] hover:opacity-50 transition-opacity"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e7eb] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-[18px] font-medium text-[#0a0a0a]"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-[#e5e7eb]">
            <span
              className="text-[13px] font-medium text-[#0a0a0a] tracking-[0.05em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              SERVICES
            </span>
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="text-[16px] text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-cormorant)" }}
                onClick={() => setMenuOpen(false)}
              >
                {service.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
