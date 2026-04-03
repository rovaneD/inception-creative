"use client";

import { useState } from "react";

const projects = [
  {
    num: "01",
    tag: "CAMPAIGN IDENTITY",
    name: "Ole Henriksen",
    projectName: "Project Name",
    description: "About the project here",
    image: null,
  },
  {
    num: "02",
    tag: "PACKAGING CAMPAIGN",
    name: "Bite Beauty",
    projectName: "Project Name",
    description: "About the project here",
    image: null,
  },
  {
    num: "03",
    tag: "IDENTITY DIGITAL",
    name: "Dr. Lancer",
    projectName: "Project Name",
    description: "About the project here",
    image: null,
  },
  {
    num: "04",
    tag: "CONCEPT TO LAUNCH",
    name: "Paula's Choice",
    projectName: "Project Name",
    description: "About the project here",
    image: null,
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-16">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Featured project — top on mobile, left on desktop */}
        <div className="flex flex-col gap-4 w-full lg:w-[704px] lg:shrink-0">
          <div className="w-full h-[280px] sm:h-[380px] md:h-[504px] bg-[#f3f4f6] overflow-hidden">
            {active.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full bg-[#f3f4f6]" />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-[17px] md:text-[19px] font-medium text-[#0a0a0a] leading-[28.5px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {active.projectName}
            </span>
            <span
              className="text-[14px] text-[#0a0a0a] leading-[21px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {active.description}
            </span>
          </div>
        </div>

        {/* 2×2 client cards */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
          {projects.map((project, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={project.num}
                onClick={() => setActiveIndex(i)}
                className="flex flex-col text-left focus:outline-none"
              >
                <div
                  className="relative w-full h-[140px] sm:h-[180px] md:h-[218px] flex items-end p-4 md:p-6 transition-colors duration-300 cursor-pointer"
                  style={{ backgroundColor: isActive ? "#ffeb76" : "#f5f4ee" }}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[9px] md:text-[10px] text-[#4e4e4e] tracking-[0.14em] leading-[15px]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="text-[18px] md:text-[24px] font-medium text-[#0a0a0a] leading-[1.2]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {project.name}
                    </span>
                  </div>
                  <span
                    className="absolute top-3 right-3 md:top-4 md:right-4 text-[9px] md:text-[10px] text-[#979595] tracking-[0.14em] leading-[15px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.num}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
