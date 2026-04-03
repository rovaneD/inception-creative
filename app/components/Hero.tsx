import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[900px] overflow-hidden">
      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="Inception Creative hero"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 h-full flex flex-col justify-between pt-[72px] md:pt-[119px] pb-10 md:pb-20">
        {/* Top tagline */}
        <div className="pt-10 md:pt-[130px]">
          <p
            className="text-[15px] md:text-[18px] text-[#000000] leading-[27px]"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Where beauty brands begin.
          </p>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col gap-8 md:gap-12">
          <h1
            className="text-[38px] md:text-[58px] font-semibold text-[#000000] leading-[1] max-w-[90%] md:max-w-[496px]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The work speaks.
            <br />
            Everything else is noise.
          </h1>

          <a
            href="/work"
            className="flex flex-col items-center gap-1 w-fit group"
          >
            <span
              className="text-[11px] font-medium text-[#000000] tracking-[0.05em] leading-[16.5px]"
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
      </div>
    </section>
  );
}
