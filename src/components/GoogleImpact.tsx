"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Profile views", value: 214 },
  { label: "Website clicks", value: 180 },
  { label: "Calls from profile", value: 96 },
  { label: "Direction requests", value: 73 },
];

const COUNT_DURATION = 1400;

export default function GoogleImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_DURATION);
      const ease = 1 - Math.pow(1 - t, 3);
      setCounts(STATS.map((s) => Math.round(s.value * ease)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div ref={ref} className="bg-white border border-line rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(15,23,42,0.08)]">
      {/* Mock Google search bar */}
      <div className="px-5 py-3.5 border-b border-line flex items-center gap-3">
        <span className="font-bold text-sm tracking-tight select-none" aria-hidden>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC04" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </span>
        <div className="flex-1 flex items-center justify-between border border-line-2 rounded-full px-4 py-1.5">
          <span className="text-xs text-light-2">plumber near me</span>
          <span className="text-xs" style={{ color: "#4285F4" }}>⌕</span>
        </div>
      </div>

      <div className="p-5">
        {/* Business profile header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-light text-lg leading-tight">Your Business LLC</span>
              <span className="text-[0.65rem]" style={{ color: "#4285F4" }} title="Verified">✔</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-sm font-semibold text-light">4.9</span>
              <span className="text-xs tracking-tight" style={{ color: "#FBBC04" }}>★★★★★</span>
              <span className="text-xs text-light-3">(127 reviews)</span>
            </div>
            <div className="text-xs text-light-3 mt-0.5">Local Business · Your Town, USA</div>
            <div className="text-xs mt-0.5">
              <span style={{ color: "#34A853" }} className="font-semibold">Open</span>
              <span className="text-light-3"> · Closes 5 PM</span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center text-neon font-bold font-display">
            Y
          </div>
        </div>

        {/* Action chips */}
        <div className="flex gap-2 mb-5">
          <span className="bg-neon text-white text-xs font-semibold px-4 py-1.5 rounded-full">🌐 Website</span>
          <span className="border border-line-2 text-light-2 text-xs font-semibold px-4 py-1.5 rounded-full">Directions</span>
          <span className="border border-line-2 text-light-2 text-xs font-semibold px-4 py-1.5 rounded-full">Call</span>
        </div>

        {/* Performance panel */}
        <div className="border border-line rounded-lg bg-dark-2 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-light-3">
              Profile performance
            </span>
            <span className="font-mono text-[0.62rem] text-light-3">last 90 days</span>
          </div>

          {/* Trend chart */}
          <svg viewBox="0 0 340 130" className="w-full h-auto mb-4" role="img" aria-label="Profile views trending sharply upward after the new website launched">
            <defs>
              <linearGradient id="gi-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[32, 64, 96].map((y) => (
              <line key={y} x1="8" y1={y} x2="332" y2={y} stroke="#E2E8F0" strokeWidth="1" />
            ))}
            {/* Area fill */}
            <path
              d="M8,110 C45,107 75,104 110,96 C150,86 190,62 240,40 C275,26 310,16 332,12 L332,126 L8,126 Z"
              fill="url(#gi-fill)"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.9s" }}
            />
            {/* Trend line */}
            <path
              d="M8,110 C45,107 75,104 110,96 C150,86 190,62 240,40 C275,26 310,16 332,12"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={visible ? 0 : 1}
              style={{ transition: "stroke-dashoffset 1.8s ease" }}
            />
            {/* Launch marker */}
            <line x1="110" y1="22" x2="110" y2="110" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="110" cy="96" r="4" fill="#F59E0B" />
            <rect x="116" y="14" rx="3" width="128" height="16" fill="#FEF3C7" stroke="#FDE68A" />
            <text x="122" y="25" fontFamily="monospace" fontSize="9" fill="#92400E">
              ▲ new website launched
            </text>
          </svg>

          {/* Stat counters */}
          <div className="grid grid-cols-2 gap-2">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="bg-white border border-line rounded-lg px-3 py-2.5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.12}s, transform 0.5s ease ${0.3 + i * 0.12}s`,
                }}
              >
                <div className="font-mono font-bold text-neon text-lg leading-none">
                  +{counts[i]}%
                  <span className="text-[0.6rem] align-top ml-1" style={{ color: "#34A853" }}>▲</span>
                </div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-light-3 mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
