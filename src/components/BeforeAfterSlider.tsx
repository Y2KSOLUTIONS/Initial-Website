"use client";
import { useRef, useState, useCallback, useEffect } from "react";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateFromClientX(e.clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden border border-line select-none cursor-col-resize"
        style={{ aspectRatio: "16/9" }}
        onTouchMove={(e) => { e.preventDefault(); updateFromClientX(e.touches[0].clientX); }}
        onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* ── AFTER panel (Y2K design) ── */}
        <div className="absolute inset-0" style={{ background: "#050D1A" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, #1A2E4A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.4,
          }} />
          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-2.5 border-b" style={{ borderColor: "#1A2E4A", background: "rgba(5,13,26,0.95)" }}>
            <span style={{ color: "#00E5A0", fontFamily: "monospace", fontSize: "0.65rem" }}>&gt; Y2K Solutions LLC</span>
            <div className="flex gap-4" style={{ color: "#7B9BB8", fontSize: "0.6rem" }}>
              <span>Services</span><span>Portfolio</span><span>Contact</span>
            </div>
            <div style={{ background: "#00E5A0", color: "#050D1A", fontSize: "0.58rem", padding: "3px 10px", borderRadius: "999px", fontWeight: 700 }}>
              Free Quote
            </div>
          </div>
          {/* Hero */}
          <div className="absolute px-6" style={{ top: "52px" }}>
            <div style={{ color: "#00E5A0", fontFamily: "monospace", fontSize: "0.5rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px", opacity: 0.8 }}>
              &gt; Web Design Nationwide
            </div>
            <div style={{ color: "#E2EEF7", fontWeight: 700, fontSize: "clamp(1rem, 3vw, 1.6rem)", lineHeight: 1.2, marginBottom: "10px" }}>
              Your Business.<br />
              <span style={{ color: "#00E5A0" }}>Online. Ranked. Growing.</span>
            </div>
            <div style={{ color: "#7B9BB8", fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", marginBottom: "14px", maxWidth: "360px" }}>
              Fast, modern websites for small businesses across America. No jargon. No hidden fees.
            </div>
            <div style={{ background: "#00E5A0", color: "#050D1A", fontSize: "0.62rem", padding: "6px 16px", borderRadius: "999px", fontWeight: 700, display: "inline-block" }}>
              Get a Free Quote
            </div>
          </div>
          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 border-t" style={{ borderColor: "#1A2E4A", background: "#0A1628" }}>
            {[["100%", "US-Based"], ["< 2wk", "Launch"], ["24/7", "Support"], ["$0", "Hidden Fees"]].map(([v, l]) => (
              <div key={l} className="text-center py-2.5">
                <div style={{ color: "#00E5A0", fontFamily: "monospace", fontWeight: 700, fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)" }}>{v}</div>
                <div style={{ color: "#3A5470", fontSize: "0.45rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
          {/* AFTER badge */}
          <div className="absolute" style={{ bottom: "44px", right: "12px", background: "#00E5A0", color: "#050D1A", fontSize: "0.5rem", padding: "2px 8px", borderRadius: "4px", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            After ✓
          </div>
        </div>

        {/* ── BEFORE panel (bad generic website) — clipped ── */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 overflow-hidden" style={{ background: "#f3f4f6" }}>
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 text-center py-3" style={{ background: "#1a4f8c" }}>
              <div style={{ color: "white", fontWeight: 700, fontSize: "clamp(0.7rem, 2vw, 1rem)", fontFamily: "Times New Roman" }}>
                SMITH&apos;S PLUMBING LLC
              </div>
              <div style={{ color: "#b0c8e8", fontSize: "0.5rem" }}>Family Owned Since 1987 | Serving Your Local Area</div>
            </div>
            {/* Nav */}
            <div className="absolute flex gap-4 px-4 py-1.5 border-b" style={{ top: "54px", left: 0, right: 0, background: "#d1d5db", borderColor: "#9ca3af", fontSize: "0.58rem", color: "#374151" }}>
              <span style={{ color: "#1a4f8c", fontWeight: 700 }}>Home</span>
              <span>About Us</span><span>Services</span><span>Testimonials</span><span>Contact</span>
            </div>
            {/* Body */}
            <div className="absolute px-5" style={{ top: "80px" }}>
              <h1 style={{ fontFamily: "Times New Roman, serif", fontSize: "clamp(0.85rem, 2vw, 1.15rem)", color: "#1f2937", marginBottom: "8px" }}>
                Welcome To Our Website!
              </h1>
              <p style={{ fontSize: "clamp(0.5rem, 1.1vw, 0.65rem)", color: "#4b5563", marginBottom: "12px", lineHeight: 1.6, maxWidth: "320px" }}>
                We are a family owned and operated plumbing company serving the local area for over 35 years. We offer quality service at competitive prices. Call us today for a free estimate!
              </p>
              <div style={{ background: "#1a4f8c", color: "white", fontSize: "0.58rem", padding: "5px 12px", display: "inline-block", cursor: "pointer" }}>
                ☎ CLICK HERE TO CALL: (555) 867-5309
              </div>
            </div>
            {/* Boxes */}
            <div className="absolute flex gap-2 px-4" style={{ top: "195px", left: 0 }}>
              {[
                ["Our Services", "• Pipe Repair\n• Water Heaters\n• Drain Cleaning\n• Emergency Calls"],
                ["Contact Info", "📞 (555) 867-5309\n📧 info@smiths.net\nMon-Fri  8am-5pm\nEmergency: 24/7"],
              ].map(([title, content]) => (
                <div key={title} style={{ flex: 1, background: "white", border: "1px solid #d1d5db", padding: "8px", fontSize: "0.52rem" }}>
                  <div style={{ color: "#1a4f8c", fontWeight: 700, marginBottom: "4px", fontSize: "0.58rem" }}>{title}</div>
                  <div style={{ color: "#6b7280", whiteSpace: "pre-line", lineHeight: 1.7 }}>{content}</div>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 py-2 text-center" style={{ background: "#9ca3af", fontSize: "0.45rem", color: "#374151" }}>
              © 2009 Smith&apos;s Plumbing LLC. All Rights Reserved. | Best viewed in Internet Explorer 8
            </div>
            {/* BEFORE badge */}
            <div className="absolute" style={{ bottom: "24px", left: "10px", background: "#6b7280", color: "white", fontSize: "0.5rem", padding: "2px 8px", borderRadius: "4px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Before
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${position}%`, transform: "translateX(-50%)", width: "2px", background: "linear-gradient(to bottom, transparent 0%, #00E5A0 20%, #00E5A0 80%, transparent 100%)" }}
          onMouseDown={() => { dragging.current = true; }}
        >
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#050D1A",
              border: "2px solid #00E5A0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,229,160,0.5)",
              color: "#00E5A0",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "col-resize",
              userSelect: "none",
            }}
          >
            ‹›
          </div>
        </div>
      </div>

      <p className="text-center font-mono text-light-3 text-xs">
        ← drag to compare →
      </p>
    </div>
  );
}
