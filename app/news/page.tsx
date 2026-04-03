import Header from "../components/Header";
import Footer from "../components/Footer";

const articles = [
  {
    tag: "PRESS",
    date: "March 15, 2026",
    title: "Inception Named Agency of the Year by Beauty Independent",
    excerpt: "Recognized for pioneering the concept-to-launch model in beauty branding.",
    slug: "agency-of-the-year",
  },
  {
    tag: "LAUNCH",
    date: "March 1, 2026",
    title: "Introducing Three New Beauty Brands This Spring",
    excerpt: "From strategy to shelf in record time. See our latest launches.",
    slug: "three-new-brands-spring",
  },
  {
    tag: "INSIGHT",
    date: "February 20, 2026",
    title: "Why Beauty Brands Need Cohesive Vision, Not Assembly Lines",
    excerpt: "Our founder Emma Chen on the future of brand building.",
    slug: "cohesive-vision-not-assembly-lines",
  },
  {
    tag: "CASE STUDY",
    date: "February 5, 2026",
    title: "How We Built Ole Henriksen's New Identity",
    excerpt: "A deep dive into our complete brand refresh process.",
    slug: "ole-henriksen-identity",
  },
  {
    tag: "ANNOUNCEMENT",
    date: "January 22, 2026",
    title: "Expanding Our Studio in New York",
    excerpt: "Growing our team to meet demand for beauty-first branding.",
    slug: "expanding-studio-new-york",
  },
  {
    tag: "INSIGHT",
    date: "January 10, 2026",
    title: "The Art of Packaging: Beyond Pretty Bottles",
    excerpt: "How packaging design shapes brand perception and drives sales.",
    slug: "art-of-packaging",
  },
];

export default function NewsPage() {
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
              NEWS & INSIGHTS
            </span>
            <h1
              className="text-[28px] md:text-[38px] font-medium text-[#0a0a0a] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Thoughts on beauty, branding, and building brands that last.
            </h1>
          </div>
        </section>

        {/* — Articles list — */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/news/${article.slug}`}
              style={{ textDecoration: "none" }}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-0 py-10 md:py-12 border-b border-[#e5e7eb] transition-colors hover:bg-[#f9fafb] cursor-pointer"
            >
              {/* Left — tag + date */}
              <div className="w-full sm:w-[213px] shrink-0 flex flex-row sm:flex-col gap-3 sm:gap-1">
                <span
                  className="text-[10px] font-medium text-[#4e4e4e] tracking-[0.27em] leading-[15px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {article.tag}
                </span>
                <span
                  className="text-[14px] text-[#4a5565] leading-[21px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {article.date}
                </span>
              </div>

              {/* Right — title + excerpt */}
              <div className="flex flex-col gap-2">
                <h2
                  className="text-[22px] md:text-[26px] font-medium text-[#0a0a0a] leading-[1.5]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-[14px] text-[#4a5565] leading-[21px]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
