"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Free Consult",
    desc: "Tell us about your business and goals. 30 minutes, no pressure, no jargon.",
  },
  {
    num: "02",
    title: "Design & Build",
    desc: "We design, develop, and refine your site. Most projects go live in under 2 weeks.",
  },
  {
    num: "03",
    title: "Launch & Grow",
    desc: "We go live and stick around. Updates, support, and growth — all included.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-3 gap-0">
      {/* connecting line — desktop only */}
      <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon/30 via-neon/70 to-neon/30"
          style={{
            width: visible ? "100%" : "0%",
            transition: "width 1s ease 0.4s",
          }}
        />
      </div>

      {steps.map((step, i) => (
        <div
          key={step.num}
          className="flex flex-col items-center text-center px-8 py-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
          }}
        >
          <div className="relative z-10 mb-6">
            <div className="w-20 h-20 rounded-full border border-neon/40 bg-dark-2 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,160,0.08)]">
              <span className="font-mono text-2xl font-bold text-neon">{step.num}</span>
            </div>
          </div>
          <h3 className="text-light font-bold text-xl mb-3">{step.title}</h3>
          <p className="text-light-2 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
