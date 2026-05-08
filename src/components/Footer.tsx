import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-neon font-mono text-sm leading-none">{">"}</span>
            <span className="font-bold text-light font-display">Y2K Solutions LLC</span>
          </div>
          <p className="text-sm text-light-2 leading-relaxed">
            The internet outlived Y2K. Your website should outlive your competition.
            We&apos;ll make that happen.
          </p>
        </div>

        <div>
          <h4 className="label mb-4 block">Navigation</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-light-2 hover:text-neon transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label mb-4 block">Get Started</h4>
          <p className="text-sm text-light-2 mb-4">
            Ready to build something great? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-dark text-sm font-bold px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] transition-all"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-line px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-light-3 font-mono">
          &copy; {new Date().getFullYear()} Y2K Solutions LLC. All rights reserved.
        </p>
        <p className="text-xs text-light-3 font-mono">
          Built for Main Street businesses, nationwide.
        </p>
      </div>
    </footer>
  );
}
