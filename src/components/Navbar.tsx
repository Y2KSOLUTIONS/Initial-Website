"use client";

import Link from "next/link";
import Image from "next/image";
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
    <nav className="sticky top-0 z-50 bg-[#0A0F1E] border-b border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Y2K Solutions LLC"
            width={220}
            height={88}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
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
          className="md:hidden text-gray-300 hover:text-white p-2"
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
        <div className="md:hidden bg-[#111827] border-t border-[#1F2937] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white transition-colors font-medium"
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
