import Header from "../../components/Header";
import Footer from "../../components/Footer";

const whatWeDo = [
  {
    title: "Structural Design",
    description:
      "Innovative package structures that are both functional and ownable. From bottles to boxes to beyond.",
  },
  {
    title: "Graphics & Labels",
    description:
      "Beautiful, on-brand graphics that communicate benefits and create desire at first glance.",
  },
  {
    title: "Unboxing Experience",
    description:
      "Every moment from delivery to first use is designed to delight and amplify your brand.",
  },
  {
    title: "Production Support",
    description:
      "We manage vendor relationships and production details to ensure flawless execution.",
  },
];

export default function PackagingDesignPage() {
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
              Packaging Design
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:w-[48%]">
            <p
              className="text-[18px] md:text-[22px] text-[#0a0a0a] leading-[1.625]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              In beauty, packaging is your first and most powerful touchpoint.
              We design packages that stop scrolls and command shelf presence.
            </p>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From structure to graphics to unboxing experience, we craft
              packaging that sells and delights.
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

        {/* — Our Philosophy — image LEFT, text RIGHT — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
            {/* Left — image placeholder */}
            <div className="w-full lg:w-[48%] min-h-[400px] lg:min-h-[500px] bg-[#f3f4f6] rounded-[6px]" />

            {/* Right — text */}
            <div className="w-full lg:w-[48%] flex flex-col gap-8 lg:justify-center">
              <span
                className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                OUR PHILOSOPHY
              </span>
              <h2
                className="text-[30px] md:text-[38px] font-semibold text-[#0a0a0a] leading-[1.25]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Packaging is product
              </h2>
              <div className="flex flex-col gap-5">
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Your package isn&apos;t just a container — it&apos;s part of
                  the product experience. It communicates quality, builds
                  desire, and creates memorable moments.
                </p>
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  We design packaging that doesn&apos;t just protect. It
                  performs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
