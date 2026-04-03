import Header from "../../components/Header";
import Footer from "../../components/Footer";

const whatWeDo = [
  {
    title: "Brand Positioning",
    description:
      "Define your unique space in the market with a positioning that's authentic, differentiated, and compelling.",
  },
  {
    title: "Brand Architecture",
    description:
      "Structure your brand portfolio for clarity and growth, from sub-brands to product ranges.",
  },
  {
    title: "Market Research",
    description:
      "Deep insights into your audience, competitors, and category trends to inform smart decisions.",
  },
  {
    title: "Brand Messaging",
    description:
      "Craft a clear, consistent voice that connects with your audience across every touchpoint.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your vision, category, and audience. Through workshops and research, we uncover the insights that will shape your strategy.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "We craft your positioning, messaging framework, and strategic roadmap. Every element is designed to differentiate and resonate.",
  },
  {
    number: "03",
    title: "Activation",
    description:
      "Your strategy becomes the foundation for all creative work — from identity to campaigns to customer experience.",
  },
];

export default function BrandStrategyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* — Intro — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 flex flex-col md:flex-row justify-between gap-10 border-b border-[#e5e7eb]">
          {/* Left */}
          <div className="flex flex-col gap-5 md:w-[45%]">
            <span
              className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              SERVICES
            </span>
            <h1
              className="text-[48px] md:text-[68px] font-semibold text-[#0a0a0a] leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Brand Strategy
            </h1>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 md:w-[48%]">
            <p
              className="text-[18px] md:text-[22px] text-[#0a0a0a] leading-[1.625]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Every successful beauty brand starts with a solid strategic
              foundation. We uncover what makes your brand unique and craft a
              positioning that resonates.
            </p>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From market research to brand architecture, we build strategies
              that guide every decision and create lasting competitive advantage.
            </p>
          </div>
        </section>

        {/* — What We Do — */}
        <section className="bg-[#f9fafb] w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 flex flex-col gap-12">
            <span
              className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              WHAT WE DO
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {whatWeDo.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <h3
                    className="text-[22px] md:text-[24px] font-semibold text-[#0a0a0a] leading-[36px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* — Our Process — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 flex flex-col gap-12">
          <span
            className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            OUR PROCESS
          </span>
          <div className="flex flex-col">
            {process.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-0 py-10 md:py-12 ${i < process.length - 1 ? "border-b border-[#e5e7eb]" : ""}`}
              >
                {/* Number */}
                <div className="sm:w-[213px] shrink-0">
                  <span
                    className="text-[36px] md:text-[42px] font-medium text-[#0a0a0a] leading-[63px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[24px] md:text-[28px] font-semibold text-[#0a0a0a] leading-[42px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] text-[#0a0a0a] leading-[22.75px] max-w-[672px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
