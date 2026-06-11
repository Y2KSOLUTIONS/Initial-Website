"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINE = "rgba(100, 116, 139, 0.16)";
const MARK = "rgba(100, 116, 139, 0.38)";
const TEXT = "rgba(100, 116, 139, 0.42)";
const GLYPH = "rgba(100, 116, 139, 0.22)";

const GLYPHS: { char: string; top: string; side: "left" | "right"; duration: number; delay: number }[] = [
  { char: "01001011", top: "16%", side: "left", duration: 13, delay: 0 },
  { char: "[ ]", top: "62%", side: "left", duration: 17, delay: 2 },
  { char: "›_", top: "30%", side: "right", duration: 15, delay: 1 },
  { char: "+", top: "88%", side: "left", duration: 11, delay: 4 },
  { char: "00110", top: "74%", side: "right", duration: 19, delay: 3 },
];

export default function SideRails() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    setCount(sections.length);
    setActive(0);
    if (sections.length < 2) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(sections.indexOf(e.target as HTMLElement));
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [pathname]);

  const jumpTo = (i: number) => {
    document.querySelectorAll<HTMLElement>("main section")[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div aria-hidden className="hidden min-[1400px]:block pointer-events-none fixed inset-0 z-30">
      {/* ── Frame lines ── */}
      <div className="absolute top-0 bottom-0 w-px" style={{ left: "38px", background: LINE }} />
      <div className="absolute top-0 bottom-0 w-px" style={{ right: "38px", background: LINE }} />

      {/* ── Crosshair marks ── */}
      {["22%", "50%", "78%"].map((top) => (
        <span
          key={`l-${top}`}
          className="absolute font-mono select-none"
          style={{ top, left: "38px", transform: "translate(-50%, -50%)", color: MARK, fontSize: "11px" }}
        >
          +
        </span>
      ))}
      {["15%", "85%"].map((top) => (
        <span
          key={`r-${top}`}
          className="absolute font-mono select-none"
          style={{ top, right: "38px", transform: "translate(50%, -50%)", color: MARK, fontSize: "11px" }}
        >
          +
        </span>
      ))}

      {/* ── Micro-text rails ── */}
      <span
        className="absolute font-mono uppercase select-none"
        style={{
          left: "12px",
          bottom: "90px",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "9px",
          letterSpacing: "0.28em",
          color: TEXT,
        }}
      >
        Y2K Solutions LLC — Web Design Nationwide
      </span>
      <span
        className="absolute font-mono uppercase select-none"
        style={{
          right: "12px",
          top: "90px",
          writingMode: "vertical-rl",
          fontSize: "9px",
          letterSpacing: "0.28em",
          color: TEXT,
        }}
      >
        Built for Main Street — Serving all 50 states
      </span>

      {/* ── Drifting glyphs ── */}
      {GLYPHS.map((g) => (
        <span
          key={`${g.side}-${g.top}`}
          className="absolute font-mono select-none"
          style={{
            top: g.top,
            [g.side]: "16px",
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: GLYPH,
            writingMode: g.char.length > 3 ? "vertical-rl" : undefined,
            animation: `rail-drift ${g.duration}s ease-in-out ${g.delay}s infinite`,
          }}
        >
          {g.char}
        </span>
      ))}

      {/* ── Live section tracker ── */}
      {count > 1 && (
        <div
          className="absolute pointer-events-auto flex flex-col items-center gap-2"
          style={{ right: "38px", top: "50%", transform: "translate(50%, -50%)" }}
        >
          <span className="font-mono select-none" style={{ fontSize: "9px", color: "#2563EB", marginBottom: "4px" }}>
            {String(active + 1).padStart(2, "0")}
          </span>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              aria-label={`Jump to section ${i + 1}`}
              className="flex items-center justify-center cursor-pointer"
              style={{ width: "22px", height: "9px" }}
            >
              <span
                style={{
                  height: "1.5px",
                  width: i === active ? "18px" : "9px",
                  background: i === active ? "#2563EB" : MARK,
                  transition: "all 0.3s ease",
                }}
              />
            </button>
          ))}
          <span className="font-mono select-none" style={{ fontSize: "9px", color: TEXT, marginTop: "4px" }}>
            {String(count).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
