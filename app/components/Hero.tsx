export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black md:h-screen md:min-h-[900px]">
      {/* Mobile: flow layout — height from 16:9 frame below nav (no extra black before footer).
          md+: full-viewport bleed below nav (match Header nav: 72px / 119px). */}
      <div className="relative w-full pt-[72px] md:absolute md:inset-0 md:p-0">
        <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-x-0 md:bottom-0 md:top-[119px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/InceptionHeroMov.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* NAVIGATE — bottom of hero block */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center md:bottom-16">
        <a href="/work" className="flex flex-col items-center gap-1 group">
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
    </section>
  );
}
