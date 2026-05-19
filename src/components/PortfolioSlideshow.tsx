"use client";
import { useState } from "react";

const slides = [
  {
    title: "Kings & Cuts Barbershop",
    category: "Barbershop",
    src: "/demos/demo-barber.html",
  },
  {
    title: "Arctic Air HVAC & Plumbing",
    category: "HVAC & Plumbing",
    src: "/demos/demo-hvac.html",
  },
  {
    title: "Ember & Vine",
    category: "Farm-to-Table Restaurant",
    src: "/demos/demo-restaurant.html",
  },
];

export default function PortfolioSlideshow() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];
  const urlSlug = slide.src.split("/").pop()?.replace(".html", "");

  return (
    <section className="py-24 px-6 bg-dark border-t border-line">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="label mb-4 block">Live Demos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light">
            See the <span className="gradient-text">work in action</span>
          </h2>
          <p className="text-light-2 mt-3 max-w-xl text-sm leading-relaxed">
            Real sites built for real businesses. Click around — they&apos;re fully interactive.
          </p>
        </div>

        {/* Browser window */}
        <div className="rounded-xl overflow-hidden border border-line shadow-[0_0_60px_rgba(0,229,160,0.06)]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-dark-2 border-b border-line">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-60" />
            </div>
            <div className="flex-1 bg-dark-3 border border-line rounded px-3 py-1 font-mono text-xs text-light-3 truncate">
              demo.y2ksolutionsllc.com/{urlSlug}
            </div>
          </div>

          {/* iframe stack */}
          <div className="relative w-full overflow-hidden bg-dark-3" style={{ height: "540px" }}>
            {slides.map((s, i) => (
              <div
                key={s.src}
                className="absolute inset-0"
                style={{
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 0.35s ease",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <div
                  style={{
                    width: "1440px",
                    height: "900px",
                    transform: "scale(0.625)",
                    transformOrigin: "top left",
                  }}
                >
                  <iframe
                    src={s.src}
                    title={s.title}
                    width="1440"
                    height="900"
                    style={{ border: "none", display: "block" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between mt-5">
          {/* Slide info */}
          <div>
            <p className="text-light font-bold">{slide.title}</p>
            <p className="font-mono text-xs text-light-3 mt-0.5">{slide.category}</p>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? "20px" : "8px",
                    backgroundColor: i === current ? "#00E5A0" : "#1A2E4A",
                  }}
                />
              ))}
            </div>

            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-line bg-dark-2 flex items-center justify-center text-light-2 hover:border-neon hover:text-neon transition-colors duration-200 cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-line bg-dark-2 flex items-center justify-center text-light-2 hover:border-neon hover:text-neon transition-colors duration-200 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
