import Header from "../../components/Header";
import Footer from "../../components/Footer";

const whatWeDo = [
  {
    title: "E-commerce Design",
    description:
      "Beautiful, custom e-commerce experiences that drive conversion and showcase your products compellingly.",
  },
  {
    title: "Brand Websites",
    description:
      "Bespoke websites that tell your story and create memorable first impressions.",
  },
  {
    title: "UX/UI Design",
    description:
      "Intuitive interfaces designed to be effortless for your customers and unmistakably on-brand.",
  },
  {
    title: "Development",
    description:
      "Full-platform builds coded to the highest standard — performant, scalable, and production-ready.",
  },
];

export default function DigitalExperiencePage() {
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
              Digital Experience
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:w-[48%]">
            <p
              className="text-[18px] md:text-[22px] text-[#0a0a0a] leading-[1.625]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your digital presence is where your customers experience your
              brand live. We create websites and digital experiences that
              convert and captivate.
            </p>
            <p
              className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From commerce to bespoke, we design and build digital experiences
              that are as beautiful as they are effective.
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
                Beauty meets performance
              </h2>
              <div className="flex flex-col gap-5">
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  A beautiful website that doesn&apos;t convert is just an
                  expense. We design digital experiences that are as
                  aspirational as your brand and as effective as your best
                  salesperson.
                </p>
                <p
                  className="text-[14px] text-[#0a0a0a] leading-[22.75px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Your digital presence shouldn&apos;t just look beautiful. It
                  should drive your business forward.
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
