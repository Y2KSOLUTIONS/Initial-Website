import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-lg font-bold gradient-text">Y2K Solutions LLC</span>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            The internet outlived Y2K. Your website should outlive your competition.
            We&apos;ll make that happen.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Get Started
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Ready to build something great? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block gradient-bg text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Y2K Solutions LLC. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">Built for Main Street businesses, nationwide.</p>
      </div>
    </footer>
  );
}
