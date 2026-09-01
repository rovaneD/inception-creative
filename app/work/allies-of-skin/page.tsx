import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const images = {
  featured: "/work/allies-of-skin/featured.jpg",
  showcase: [
    "/work/allies-of-skin/showcase-1.jpg",
    "/work/allies-of-skin/showcase-2.jpg",
    "/work/allies-of-skin/showcase-3.jpg",
    "/work/allies-of-skin/showcase-4.jpg",
  ],
  photography: [
    "/work/allies-of-skin/photography-1.jpg",
    "/work/allies-of-skin/photography-2.jpg",
    "/work/allies-of-skin/photography-3.jpg",
  ],
  campaignHero: "/work/allies-of-skin/campaign-hero.jpg",
};

export default function AlliesOfSkinPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Project intro */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8 border-b border-[#e5e7eb]">
          <div className="flex gap-4 items-start">
            <div className="hidden md:block">
              <span
                className="text-[8px] font-medium text-[#0a0a0a] tracking-[0.17em] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-inter)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                BRAND FOUNDATION - 2026
              </span>
            </div>
            <div className="flex flex-col gap-2 md:ml-6">
              <Link
                href="/work"
                className="text-[13px] text-[#4e4e4e] hover:opacity-60 transition-opacity w-fit"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ← Back to Work
              </Link>
              <span
                className="text-[18px] md:text-[26px] font-medium text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Allies of Skin
              </span>
              <span
                className="text-[14px] text-[#0a0a0a] leading-[21px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Campaign · Creative Direction
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
            <a href="#case-study" className="flex items-center gap-2 w-fit group">
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
                className="group-hover:translate-y-1 transition-transform"
              >
                <path
                  d="M8 3L8 13M8 13L4 9M8 13L12 9"
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Featured image */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-16">
          <div className="w-full max-w-[704px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.featured}
              alt="Allies of Skin campaign"
              className="w-full aspect-[704/504] object-cover bg-[#f3f4f6]"
            />
            <div className="flex flex-col gap-1 mt-4">
              <span
                className="text-[24px] font-medium text-[#0a0a0a] leading-[28px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Allies of Skin
              </span>
              <span
                className="text-[14px] text-[#0a0a0a] leading-[21px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Campaign · Creative Direction
              </span>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section
          id="case-study"
          className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-16 border-t border-[#e5e7eb]"
        >
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-16 max-w-[864px]">
            <h2
              className="text-[22px] md:text-[24px] font-medium text-[#0a0a0a] leading-[28px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Campaign creative direction for the Beta Glucan & Resveratrol
              Advanced Hydrating Serum.
            </h2>
            <p
              className="text-[14px] text-[#4e4e4e] leading-[21px] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Allies of Skin built their reputation on science — potent actives,
              clinical results, zero compromise. The challenge was translating
              that precision into imagery that felt intimate rather than sterile.
              The campaign puts skin first — real texture, real light, real faces
              — while the product holds its own as an object worth examining.
              Performance made personal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-16">
            {images.showcase.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`Allies of Skin campaign showcase ${i + 1}`}
                className="w-full h-[260px] sm:h-[380px] md:h-[522px] object-cover bg-[#f3f4f6]"
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8 max-w-[1198px]">
            <h3
              className="text-[17px] md:text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Model & product photography
            </h3>
            <p
              className="text-[13px] md:text-[14px] text-[#4e4e4e] leading-[21px] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The casting was deliberate — real skin, direct eye contact, no
              performance. Paired with a clean product study that lets the
              packaging speak for itself. Science and humanity in the same frame.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-16">
            {images.photography.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`Allies of Skin photography ${i + 1}`}
                className="w-full h-[260px] sm:h-[380px] md:h-[522px] object-cover bg-[#f3f4f6]"
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8 max-w-[1158px]">
            <h3
              className="text-[17px] md:text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Campaign hero image
            </h3>
            <p
              className="text-[13px] md:text-[14px] text-[#4e4e4e] leading-[21px] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The hero image translates the formula into feeling. Beta Glucan is
              a hydration ingredient — so we put it in water. Submerged,
              suspended, weightless. The product becomes the concept.
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.campaignHero}
            alt="Allies of Skin campaign hero"
            className="w-full h-[260px] sm:h-[380px] md:h-[522px] object-cover bg-[#f3f4f6]"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
