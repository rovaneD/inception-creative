import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedWork from "../components/FeaturedWork";

const projects = [
  {
    name: "Project Name",
    description:
      "Inception Creative builds luxury beauty brands from concept to launch. We are not generalists who work in beauty. Beauty is the only category we serve — and we built the agency around that conviction.",
    layout: "two-col",
  },
  {
    name: "Project Name",
    description:
      "Inception Creative builds luxury beauty brands from concept to launch. We are not generalists who work in beauty. Beauty is the only category we serve — and we built the agency around that conviction.",
    layout: "three-col",
  },
  {
    name: "Project Name",
    description:
      "Inception Creative builds luxury beauty brands from concept to launch. We are not generalists who work in beauty. Beauty is the only category we serve — and we built the agency around that conviction.",
    layout: "full",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Page intro */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8 border-b border-[#e5e7eb]">
          <div className="flex gap-4 items-start">
            {/* Rotated label — hidden on mobile */}
            <div className="hidden md:block">
              <span
                className="text-[8px] font-medium text-[#0a0a0a] tracking-[0.17em] whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                BRAND FOUNDATION - 2026
              </span>
            </div>
            <div className="flex flex-col gap-2 md:ml-6">
              <span
                className="text-[18px] md:text-[26px] font-medium text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                INCEPTIONCREATIVE.AGENCY
              </span>
              <span
                className="text-[14px] text-[#0a0a0a] leading-[21px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Where beauty brands begin.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-6 w-full md:max-w-[688px]">
            <h1
              className="text-[28px] md:text-[38px] font-medium text-[#0a0a0a] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The work speaks. Everything else is noise.
            </h1>
            <a
              href="#projects"
              className="flex items-center gap-2 w-fit group"
            >
              <span
                className="text-[11px] font-medium text-[#0a0a0a] tracking-[0.05em] leading-[16.5px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                NAVIGATE
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Featured work grid — interactive toggle */}
        <FeaturedWork />

        {/* Project showcase sections */}
        {projects.map((project, i) => (
          <section
            key={i}
            id={i === 0 ? "projects" : undefined}
            className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-16 border-t border-[#e5e7eb]"
          >
            <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8">
              <h2
                className="text-[17px] md:text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {project.name}
              </h2>
              <p
                className="text-[13px] md:text-[14px] text-[#4e4e4e] leading-[21px] max-w-[672px] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {project.description}
              </p>
            </div>

            {project.layout === "two-col" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6]" />
                <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6]" />
              </div>
            )}

            {project.layout === "three-col" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6]" />
                <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6]" />
                <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6]" />
              </div>
            )}

            {project.layout === "full" && (
              <div className="h-[260px] sm:h-[380px] md:h-[522px] bg-[#f3f4f6] w-full" />
            )}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
