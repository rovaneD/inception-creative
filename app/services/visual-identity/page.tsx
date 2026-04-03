import Header from "../../components/Header";
import Footer from "../../components/Footer";

const whatWeDo = [
  {
    title: "Logo & Brand Marks",
    description:
      "Distinctive marks that embody your brand's personality and create instant recognition.",
  },
  {
    title: "Typography Systems",
    description:
      "Carefully selected typefaces that enhance readability and reinforce your brand voice.",
  },
  {
    title: "Color Palettes",
    description:
      "Strategic color systems that evoke emotion and create visual harmony across touchpoints.",
  },
  {
    title: "Brand Guidelines",
    description:
      "Comprehensive documentation to ensure consistent application of your visual identity.",
  },
];

export default function VisualIdentityPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* — Intro — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 flex flex-col md:flex-row justify-between gap-10 border-b border-[#e5e7eb]">
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
              Visual Identity
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:w-[48%]">
            <p
              className="text-[18px] md:text-[22px] text-[#0a0a0a] leading-[1.625]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your visual identity is the face of your brand. We create cohesive
              systems that capture your essence and stand out in the beauty
              landscape.
            </p>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From logos to typography to color palettes, every element works
              together to create a memorable and ownable brand presence.
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

        {/* — Our Approach — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
            {/* Left — text */}
            <div className="w-full lg:w-[48%] flex flex-col gap-8">
              <span
                className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                OUR APPROACH
              </span>
              <h2
                className="text-[30px] md:text-[38px] font-semibold text-[#0a0a0a] leading-[1.25]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Beauty is in the details
              </h2>
              <div className="flex flex-col gap-5">
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  In beauty, visual excellence isn&apos;t optional — it&apos;s
                  everything. We obsess over every detail, from the curve of a
                  letterform to the balance of negative space.
                </p>
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Our identities aren&apos;t just beautiful. They&apos;re
                  strategic, ownable, and built to last.
                </p>
              </div>
            </div>

            {/* Right — image placeholder */}
            <div className="w-full lg:w-[48%] min-h-[400px] lg:min-h-[500px] bg-[#f3f4f6] rounded-[6px]" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
