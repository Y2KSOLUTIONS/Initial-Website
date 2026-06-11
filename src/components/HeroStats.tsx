"use client";
import { useEffect, useState } from "react";

const RING_PCT = 81;
const RING_R = 56;
const RING_C = 2 * Math.PI * RING_R;

const BARS = [
  { pct: 75, label: "judge credibility by web design" },
  { pct: 88, label: "of local searchers visit within 24h" },
];

const COUNT_DURATION = 1300;
const START_DELAY = 700;

export default function HeroStats() {
  const [on, setOn] = useState(false);
  const [ring, setRing] = useState(0);
  const [bars, setBars] = useState(BARS.map(() => 0));

  useEffect(() => {
    const t = setTimeout(() => setOn(true), START_DELAY);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!on) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_DURATION);
      const ease = 1 - Math.pow(1 - t, 3);
      setRing(Math.round(RING_PCT * ease));
      setBars(BARS.map((b) => Math.round(b.pct * ease)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on]);

  return (
    <div className="relative">
      {/* Floating callout chip */}
      <div
        className="absolute -top-3.5 -right-3 z-10 rounded-lg px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.08em]"
        style={{
          background: "#F59E0B",
          color: "#0A1228",
          boxShadow: "0 6px 24px rgba(245,158,11,0.35)",
          opacity: on ? 1 : 0,
          transform: on ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease 1.2s, transform 0.5s ease 1.2s",
        }}
      >
        46% of Google searches are local
      </div>

      <div className="bg-dark-2 border border-line rounded-xl overflow-hidden">
        {/* Terminal chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-3 border-b border-line">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-neon/50" />
          <span className="ml-3 font-mono text-light-3 text-xs">WHY_A_WEBSITE.exe</span>
        </div>

        <div className="p-5">
          {/* Radial gauge */}
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              <svg width="128" height="128" viewBox="0 0 128 128" className="block -rotate-90">
                <circle cx="64" cy="64" r={RING_R} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="9" />
                <circle
                  cx="64"
                  cy="64"
                  r={RING_R}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={RING_C * (1 - ring / 100)}
                  style={{ filter: "drop-shadow(0 0 6px rgba(59,130,246,0.45))" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono font-bold text-light text-3xl leading-none">{ring}%</span>
              </div>
            </div>
            <p className="text-light-2 text-sm leading-relaxed">
              of customers <span className="text-light font-semibold">research a business online</span>{" "}
              before they buy
            </p>
          </div>

          <div className="h-px bg-line my-5" />

          {/* Stat bars */}
          <div className="space-y-4">
            {BARS.map((b, i) => (
              <div key={b.label}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-light-3">
                    {b.label}
                  </span>
                  <span className="font-mono text-neon text-sm font-bold">{bars[i]}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(148,163,184,0.15)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${bars[i]}%`,
                      background: "linear-gradient(90deg, #2563EB, #3B82F6)",
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-line my-5" />

          {/* Bottom line */}
          <p className="font-mono text-xs text-light-2 leading-relaxed">
            <span className="text-neon">›</span> no website ={" "}
            <span className="text-amber-500">invisible to all of them</span>
            <span className="inline-block w-2 h-3.5 bg-neon ml-1.5 align-middle cursor-blink" />
          </p>
          <p className="mt-3 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-light-3">
            src: Google · Stanford credibility research
          </p>
        </div>
      </div>
    </div>
  );
}
