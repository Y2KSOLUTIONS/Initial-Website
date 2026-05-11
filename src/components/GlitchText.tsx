"use client";
import { useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%<>{}[]";

interface Props {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = "" }: Props) {
  const [text, setText] = useState(children);
  const frame = useRef<number | null>(null);
  const iter = useRef(0);

  const scramble = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    iter.current = 0;

    const tick = () => {
      setText(
        children
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iter.current / 3) return children[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iter.current++;
      if (iter.current < children.length * 3) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setText(children);
      }
    };

    frame.current = requestAnimationFrame(tick);
  }, [children]);

  const reset = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    setText(children);
  }, [children]);

  return (
    <span className={className} onMouseEnter={scramble} onMouseLeave={reset}>
      {text}
    </span>
  );
}
