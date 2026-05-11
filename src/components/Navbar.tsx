"use client";

import Link from "next/link";
import { useState } from "react";
import GlitchText from "@/components/GlitchText";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 border-b border-line backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-neon font-mono text-sm leading-none">{">"}</span>
          <GlitchText className="font-bold text-light text-lg tracking-tight font-display">
            Y2K Solutions
          </GlitchText>
          <span className="text-light-3 font-mono text-xs leading-none">LLC</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-light-2 hover:text-light transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-neon text-dark text-sm font-bold px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] transition-all duration-200"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-light-2 hover:text-light p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-2 border-t border-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-light-2 hover:text-light transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-neon text-dark text-sm font-bold px-5 py-2.5 rounded-full text-center hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] transition-all"
            onClick={() => setOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
