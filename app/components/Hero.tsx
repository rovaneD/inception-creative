export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[900px] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/InceptionHeroMov.mov" type="video/quicktime" />
        <source src="/InceptionHeroMov.mov" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />

      {/* NAVIGATE — absolute bottom center */}
      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-10 flex justify-center">
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
