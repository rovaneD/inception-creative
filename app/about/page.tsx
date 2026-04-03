import Header from "../components/Header";
import Footer from "../components/Footer";

const team = [
  {
    name: "Emma Chen",
    role: "Founder & Creative Director",
    specialty: "15 years shaping beauty brands",
  },
  {
    name: "Marcus Rivera",
    role: "Strategy Director",
    specialty: "Brand positioning specialist",
  },
  {
    name: "Sophia Anderson",
    role: "Design Director",
    specialty: "Visual identity & packaging",
  },
  {
    name: "David Kim",
    role: "Digital Director",
    specialty: "Digital experiences & platforms",
  },
];

const stats = [
  { value: "50+", label: "Beauty brands launched" },
  { value: "$2B+", label: "In brand value created" },
  { value: "25+", label: "Industry awards" },
  { value: "100%", label: "Beauty focused" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* — Intro — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8 border-b border-[#e5e7eb]">
          {/* Left */}
          <div className="flex gap-4 items-start">
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

          {/* Right */}
          <div className="flex flex-col gap-5 w-full md:max-w-[688px]">
            <span
              className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              WHO WE ARE
            </span>
            <h1
              className="text-[28px] md:text-[38px] font-medium text-[#0a0a0a] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Building beauty brands from the ground up.
              <br className="hidden sm:block" /> One vision, one team.
            </h1>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We&apos;re not a traditional agency. We&apos;re brand architects who specialize
              exclusively in beauty. Every brand we touch is built with the same
              meticulous attention — from strategic foundation to final launch.
            </p>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              No hand-offs. No disconnects. Just one cohesive vision executed by
              a team that lives and breathes beauty.
            </p>
          </div>
        </section>

        {/* — Philosophy — */}
        <section className="bg-[#f9fafb] w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
            <div className="max-w-[688px] flex flex-col gap-6">
              <span
                className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                OUR PHILOSOPHY
              </span>
              <h2
                className="text-[28px] md:text-[36px] font-light italic text-[#0a0a0a] leading-[1.25]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Inevitable, not assembled.
              </h2>
              <p
                className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Most agencies treat branding like an assembly line — different
                teams, different timelines, different visions. The result? Brands
                that feel pieced together.
              </p>
              <p
                className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                We do the opposite. Every dimension of your brand — strategy,
                identity, packaging, digital, campaigns — flows from one cohesive
                vision. One team. One execution.
              </p>
              <p
                className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                The result is a brand that doesn&apos;t just look good. It feels
                inevitable.
              </p>
            </div>
          </div>
        </section>

        {/* — Team — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-20">
          <span
            className="block text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px] mb-10 md:mb-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            THE TEAM
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-3">
                {/* Photo placeholder */}
                <div className="w-full aspect-[4/5] bg-[#f3f4f6]" />
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[17px] md:text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.name}
                  </span>
                  <span
                    className="text-[13px] md:text-[14px] text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.role}
                  </span>
                  <span
                    className="text-[13px] md:text-[14px] text-[#4a5565] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* — Stats — */}
        <section className="bg-[#f9fafb] w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 flex flex-col items-center gap-12">
            <span
              className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              RECOGNITION
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 w-full max-w-[768px]">
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center gap-2">
                  <span
                    className="text-[36px] md:text-[42px] font-medium text-[#0a0a0a] leading-[63px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[13px] md:text-[14px] text-[#0a0a0a] leading-[21px] text-center"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
