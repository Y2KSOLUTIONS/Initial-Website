"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0, tx = 0, ty = 0;
    let visible = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        x = tx;
        y = ty;
        visible = true;
        el.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[500px] h-[500px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 65%)",
        willChange: "transform",
      }}
    />
  );
}
