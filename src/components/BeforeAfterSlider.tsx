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
        className="relative w-full rounded-xl overflow-hidden border border-line select-none cursor-col-resize aspect-[4/3] md:aspect-[16/8]"
        onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
        onTouchMove={(e) => { e.preventDefault(); updateFromClientX(e.touches[0].clientX); }}
        onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* ── AFTER panel (Y2K design) ── */}
        <div className="absolute inset-0 flex flex-col" style={{ background: "#FFFFFF" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }} />
          {/* Soft blue glow, upper right */}
          <div className="absolute pointer-events-none" style={{
            top: "-20%", right: "-10%", width: "55%", height: "70%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)",
          }} />
          {/* Navbar */}
          <div className="relative flex items-center justify-between px-5 py-2.5 border-b shrink-0" style={{ borderColor: "#E2E8F0", background: "rgba(255,255,255,0.95)" }}>
            <span style={{ color: "#2563EB", fontFamily: "monospace", fontSize: "0.65rem", fontWeight: 700 }}>&gt; Y2K Solutions LLC</span>
            <div className="flex gap-4" style={{ color: "#475569", fontSize: "0.6rem" }}>
              <span>Services</span><span>Portfolio</span><span>Contact</span>
            </div>
            <div style={{ background: "#2563EB", color: "#FFFFFF", fontSize: "0.58rem", padding: "3px 10px", borderRadius: "999px", fontWeight: 700 }}>
              Free Quote
            </div>
          </div>
          {/* Hero — right-aligned so it stays visible beside the Before overlay */}
          <div className="relative flex-1 flex flex-col justify-center items-end text-right px-6 py-4 gap-0">
            <div style={{ color: "#2563EB", fontFamily: "monospace", fontSize: "0.5rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px", opacity: 0.8 }}>
              &gt; Web Design Nationwide
            </div>
            <div style={{ color: "#0F172A", fontWeight: 700, fontSize: "clamp(1.1rem, 3.2vw, 2rem)", lineHeight: 1.15, marginBottom: "10px" }}>
              Your Business.<br />
              <span style={{ color: "#2563EB" }}>Online. Ranked. Growing.</span>
            </div>
            <div style={{ color: "#475569", fontSize: "clamp(0.55rem, 1.2vw, 0.78rem)", marginBottom: "14px", maxWidth: "380px" }}>
              Fast, modern websites for small businesses across America. No jargon. No hidden fees.
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ border: "1px solid #CBD5E1", color: "#475569", fontSize: "0.62rem", padding: "6px 16px", borderRadius: "999px", fontWeight: 700 }}>
                See Our Work →
              </div>
              <div style={{ background: "#2563EB", color: "#FFFFFF", fontSize: "0.62rem", padding: "6px 16px", borderRadius: "999px", fontWeight: 700, boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}>
                Get a Free Quote
              </div>
            </div>
            {/* Feature chips */}
            <div className="hidden md:flex gap-2 flex-wrap justify-end">
              {[["★★★★★", "5.0 Rated"], ["⚡", "Loads in <1s"], ["📱", "Mobile-First"], ["🔍", "SEO Built-In"]].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-1.5" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "5px 10px", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}>
                  <span style={{ fontSize: "0.55rem", color: "#2563EB" }}>{icon}</span>
                  <span style={{ fontSize: "0.55rem", color: "#0F172A", fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats bar */}
          <div className="relative grid grid-cols-4 border-t shrink-0" style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
            {[["100%", "US-Based"], ["< 2wk", "Launch"], ["24/7", "Support"], ["$0", "Hidden Fees"]].map(([v, l], i) => (
              <div key={l} className="text-center py-2.5" style={{ borderLeft: i > 0 ? "1px solid #E2E8F0" : "none" }}>
                <div style={{ color: "#2563EB", fontFamily: "monospace", fontWeight: 700, fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)" }}>{v}</div>
                <div style={{ color: "#94A3B8", fontSize: "0.45rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
          {/* AFTER badge */}
          <div className="absolute" style={{ bottom: "52px", right: "12px", background: "#2563EB", color: "#FFFFFF", fontSize: "0.5rem", padding: "2px 8px", borderRadius: "4px", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            After ✓
          </div>
        </div>

        {/* ── BEFORE panel (bad generic website) — clipped ── */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: "#f3f4f6" }}>
            {/* Header */}
            <div className="text-center py-2.5 shrink-0" style={{ background: "#1a4f8c" }}>
              <div style={{ color: "white", fontWeight: 700, fontSize: "clamp(0.7rem, 2vw, 1rem)", fontFamily: "Times New Roman" }}>
                SMITH&apos;S PLUMBING LLC
              </div>
              <div style={{ color: "#b0c8e8", fontSize: "0.5rem" }}>Family Owned Since 1987 | Serving Your Local Area</div>
            </div>
            {/* Nav */}
            <div className="flex gap-4 px-4 py-1.5 border-b shrink-0" style={{ background: "#d1d5db", borderColor: "#9ca3af", fontSize: "0.58rem", color: "#374151" }}>
              <span style={{ color: "#1a4f8c", fontWeight: 700 }}>Home</span>
              <span>About Us</span><span>Services</span><span>Testimonials</span><span>Contact</span>
            </div>
            {/* Marquee-style alert strip */}
            <div className="px-4 py-1 shrink-0" style={{ background: "#fef9c3", borderBottom: "1px solid #fde047", fontSize: "0.52rem", color: "#854d0e", fontStyle: "italic" }}>
              *** NEW!! We now accept credit cards!! Call today!! *** FREE estimates!! ***
            </div>
            {/* Body */}
            <div className="flex-1 flex flex-col px-5 py-3 min-h-0">
              <div className="shrink-0">
                <h1 style={{ fontFamily: "Times New Roman, serif", fontSize: "clamp(0.85rem, 2vw, 1.15rem)", color: "#1f2937", marginBottom: "6px" }}>
                  Welcome To Our Website!
                </h1>
                <p style={{ fontSize: "clamp(0.5rem, 1.1vw, 0.65rem)", color: "#4b5563", marginBottom: "10px", lineHeight: 1.6, maxWidth: "340px" }}>
                  We are a family owned and operated plumbing company serving the local area for over 35 years. We offer quality service at competitive prices. Call us today for a free estimate!
                </p>
                <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: "12px" }}>
                  <div style={{ background: "#1a4f8c", color: "white", fontSize: "0.58rem", padding: "5px 12px", display: "inline-block", cursor: "pointer" }}>
                    ☎ CLICK HERE TO CALL: (555) 867-5309
                  </div>
                  <div style={{ background: "repeating-linear-gradient(45deg, #facc15, #facc15 8px, #1f2937 8px, #1f2937 16px)", padding: "2px" }}>
                    <div style={{ background: "#fef9c3", color: "#854d0e", fontSize: "0.5rem", padding: "2px 8px", fontWeight: 700 }}>
                      🚧 PAGE UNDER CONSTRUCTION 🚧
                    </div>
                  </div>
                </div>
              </div>
              {/* Boxes — stretch to fill remaining height */}
              <div className="flex gap-2 flex-1 min-h-0" style={{ marginBottom: "8px" }}>
                {[
                  ["Our Services", "• Pipe Repair\n• Water Heaters\n• Drain Cleaning\n• Emergency Calls\n• Sump Pumps\n• Leak Detection\n• Faucet Install\n• Gas Lines"],
                  ["Contact Info", "📞 (555) 867-5309\n📠 Fax: (555) 867-5310\n📧 info@smiths.net\n📍 123 Main Street\nAnytown, USA 46032\nMon-Fri  8am-5pm\nSat  9am-12pm\nEmergency: 24/7"],
                  ["Latest News", "10/12/2009 — Updated\nour photo gallery!\n\n3/4/2008 — New\ncoupon page added!\n\n7/2/2007 — Welcome\nto our new website!"],
                ].map(([title, content]) => (
                  <div key={title} className="overflow-hidden" style={{ flex: 1, background: "white", border: "1px solid #d1d5db", padding: "7px", fontSize: "0.5rem" }}>
                    <div style={{ color: "#1a4f8c", fontWeight: 700, marginBottom: "4px", fontSize: "0.56rem", fontFamily: "Times New Roman, serif" }}>{title}</div>
                    <div style={{ color: "#6b7280", whiteSpace: "pre-line", lineHeight: 1.6 }}>{content}</div>
                  </div>
                ))}
              </div>
              {/* Bottom clutter row */}
              <div className="flex items-center justify-between gap-3 flex-wrap shrink-0">
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "0.5rem", color: "#6b7280" }}>You are visitor:</span>
                  <span style={{ background: "#000", color: "#22c55e", fontFamily: "monospace", fontSize: "0.55rem", padding: "1px 6px", letterSpacing: "0.15em" }}>004271</span>
                </div>
                <span style={{ fontSize: "0.5rem", color: "#1a4f8c", textDecoration: "underline" }}>Sign our guestbook!</span>
                <span style={{ fontSize: "0.5rem", color: "#9ca3af" }}>Best viewed at 800x600 resolution</span>
              </div>
            </div>
            {/* Footer */}
            <div className="py-1.5 text-center shrink-0" style={{ background: "#9ca3af", fontSize: "0.45rem", color: "#374151" }}>
              © 2009 Smith&apos;s Plumbing LLC. All Rights Reserved. | Best viewed in Internet Explorer 8
            </div>
            {/* BEFORE badge */}
            <div className="absolute" style={{ bottom: "28px", left: "10px", background: "#6b7280", color: "white", fontSize: "0.5rem", padding: "2px 8px", borderRadius: "4px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Before
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${position}%`, transform: "translateX(-50%)", width: "2px", background: "linear-gradient(to bottom, transparent 0%, #2563EB 20%, #2563EB 80%, transparent 100%)" }}
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
              background: "#FFFFFF",
              border: "2px solid #2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(37,99,235,0.4)",
              color: "#2563EB",
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
