"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "The internet", cls: "text-4xl md:text-6xl lg:text-7xl text-light-2" },
  { text: "outlived Y2K.", cls: "text-4xl md:text-6xl lg:text-7xl text-light" },
  { text: "Your website should", cls: "text-4xl md:text-6xl lg:text-7xl text-light-2 mt-1" },
  { text: "outlive the competition.", cls: "text-4xl md:text-6xl lg:text-7xl text-neon" },
];

const SPEED = 28;
const PAUSE = 160;
const START_DELAY = 350;

export default function HeroHeadline() {
  const [state, setState] = useState({ line: 0, char: 0, done: false });

  useEffect(() => {
    if (state.done) return;

    const line = LINES[state.line];
    if (!line) {
      setState((s) => ({ ...s, done: true }));
      return;
    }

    if (state.char < line.text.length) {
      const delay = state.line === 0 && state.char === 0 ? START_DELAY : SPEED;
      const t = setTimeout(
        () => setState((s) => ({ ...s, char: s.char + 1 })),
        delay
      );
      return () => clearTimeout(t);
    }

    if (state.line < LINES.length - 1) {
      const t = setTimeout(
        () => setState({ line: state.line + 1, char: 0, done: false }),
        PAUSE
      );
      return () => clearTimeout(t);
    }

    setState((s) => ({ ...s, done: true }));
  }, [state]);

  return (
    <h1 className="font-bold leading-[1.05] tracking-tight mb-8">
      {LINES.map((line, i) => {
        const chars =
          i < state.line || state.done
            ? line.text
            : i === state.line
            ? line.text.slice(0, state.char)
            : "";
        const showCursor = i === state.line && !state.done;

        return (
          <span key={i} className={`${line.cls} block min-h-[1.1em]`}>
            {chars}
            {showCursor && (
              <span className="inline-block w-[2px] h-[0.8em] bg-neon align-middle ml-1 cursor-blink" />
            )}
          </span>
        );
      })}
    </h1>
  );
}
