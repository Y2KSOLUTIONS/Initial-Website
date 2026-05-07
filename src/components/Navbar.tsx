"use client";

import Link from "next/link";
import { useState } from "react";

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
    <nav className="sticky top-0 z-50 bg-[#F5EDD6]/95 backdrop-blur-md border-b border-[#C8B89A]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">Y2K Solutions</span>
          <span className="text-xs text-[#6B5A3A] hidden sm:block">LLC</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#3D2E0E] hover:text-royal-blue transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="gradient-bg text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#3D2E0E] hover:text-royal-blue p-2"
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
        <div className="md:hidden bg-[#EDE0C4] border-t border-[#C8B89A] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#3D2E0E] hover:text-royal-blue transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="gradient-bg text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
