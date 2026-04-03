import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* — Contact Section — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-16">

            {/* Left — Form */}
            <div className="w-full lg:w-[48%] flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <span
                  className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  LET&apos;S TALK
                </span>
                <h1
                  className="text-[28px] md:text-[38px] font-medium text-[#0a0a0a] leading-[1.05]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Ready to build something inevitable?
                </h1>
              </div>

              <form className="flex flex-col gap-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[14px] font-medium text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full h-[49px] bg-white border-b border-[#d1d5dc] text-[14px] text-[#0a0a0a] outline-none focus:border-[#0a0a0a] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-medium text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full h-[49px] bg-white border-b border-[#d1d5dc] text-[14px] text-[#0a0a0a] outline-none focus:border-[#0a0a0a] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-[14px] font-medium text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full h-[49px] bg-white border-b border-[#d1d5dc] text-[14px] text-[#0a0a0a] outline-none focus:border-[#0a0a0a] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>

                {/* Project */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="project"
                    className="text-[14px] font-medium text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="project"
                    required
                    rows={7}
                    className="w-full py-3 bg-white border-b border-[#d1d5dc] text-[14px] text-[#0a0a0a] outline-none focus:border-[#0a0a0a] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="h-[56px] px-10 bg-[#0a0a0a] text-white text-[11px] font-medium tracking-[0.124em] leading-[16.5px] hover:bg-[#333] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>

            {/* Right — Contact info */}
            <div className="w-full lg:w-[43%] flex flex-col gap-10">
              <span
                className="text-[10px] text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                GET IN TOUCH
              </span>

              <div className="flex flex-col gap-10">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:hello@inceptioncreative.agency"
                    className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "var(--font-cormorant)", textDecoration: "none" }}
                  >
                    hello@inceptioncreative.agency
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-[14px] text-[#0a0a0a] leading-[21px] hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "var(--font-cormorant)", textDecoration: "none" }}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>

                {/* Studio */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Studio
                  </h3>
                  <p
                    className="text-[14px] text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    123 Design Street<br />
                    New York, NY 10001
                  </p>
                </div>

                {/* Hours */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Hours
                  </h3>
                  <p
                    className="text-[14px] text-[#0a0a0a] leading-[21px]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
