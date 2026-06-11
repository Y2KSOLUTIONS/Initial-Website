import Link from "next/link";
import Image from "next/image";
import ParticleCanvas from "@/components/ParticleCanvas";
import HeroHeadline from "@/components/HeroHeadline";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import GlitchText from "@/components/GlitchText";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GoogleImpact from "@/components/GoogleImpact";
import Testimonials from "@/components/Testimonials";

const services = [
  {
    title: "Custom Website Design",
    description:
      "Built from scratch to match your brand and turn visitors into customers. Mobile-first, fast, and made to convert.",
    features: ["Mobile-first design", "Fast load times", "Brand-aligned aesthetic", "Easy to update"],
  },
  {
    title: "SEO & Performance",
    description:
      "Get found on Google. We bake SEO in from day one so your customers can find you.",
    features: ["On-page SEO", "Core Web Vitals", "Local SEO", "Google Business setup"],
  },
  {
    title: "Maintenance & Support",
    description:
      "We handle the tech. You run your business. Ongoing plans to keep your site secure and fast.",
    features: ["Security updates", "Content changes", "Uptime monitoring", "Monthly reports"],
  },
  {
    title: "Landing Pages",
    description:
      "High-converting pages for campaigns, product launches, or lead generation. Built fast, built to perform.",
    features: ["A/B test ready", "Fast deployment", "Lead capture forms", "Analytics integration"],
  },
];

const stats = [
  { value: "100%", label: "US-Based" },
  { value: "< 2wk", label: "Avg. Launch" },
  { value: "24/7", label: "Support" },
  { value: "$0", label: "Hidden Fees" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-dark section-dark">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <ParticleCanvas />
        {/* Y2K watermark */}
        <span
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-bold leading-none select-none pointer-events-none font-display"
          style={{ color: "rgba(96,165,250,0.07)", zIndex: 2 }}
        >
          Y2K
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid lg:grid-cols-[1fr_320px] gap-16 items-center">
          {/* Left: main content */}
          <div>
            <p className="label anim anim-1 mb-6 block">
              Y2K Solutions LLC — Web Design Nationwide
            </p>

            <HeroHeadline />

            <p className="anim anim-6 text-light-2 text-lg max-w-xl mb-10 leading-relaxed">
              We build fast, modern websites for small businesses across America. No jargon.
              No hidden fees. Just a website that works as hard as you do.
            </p>

            <div className="anim anim-7 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-neon text-white font-bold px-8 py-4 rounded-full text-base text-center hover:shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border border-line-2 text-light px-8 py-4 rounded-full text-base font-medium text-center hover:border-neon hover:bg-neon/10 transition-all duration-200"
              >
                See Our Work →
              </Link>
            </div>
          </div>

          {/* Right: terminal status card */}
          <div className="hidden lg:block anim anim-5">
            <div className="bg-dark-2 border border-line rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-3 border-b border-line">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/50" />
                <span className="ml-3 font-mono text-light-3 text-xs">Y2K_STATUS.exe</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2 text-light-2">
                <p>
                  <span className="text-neon">›</span> scanning business health...
                </p>
                <p>
                  <span className="text-neon">›</span> no website detected
                </p>
                <p className="text-amber-600">⚠ WARNING: invisible online</p>
                <p className="text-amber-600">⚠ competitors are ranking</p>
                <div className="h-px bg-line my-3" />
                <p>
                  <span className="text-neon">›</span> initiating Y2K protocol...
                </p>
                <div className="h-px bg-line my-3" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-light-3">load time</span>
                    <span className="text-neon">&lt; 1.0s ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-3">seo score</span>
                    <span className="text-neon">98/100 ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-3">google rank</span>
                    <span className="text-neon">#1 local ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-3">uptime</span>
                    <span className="text-neon">99.9% ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light-3">status</span>
                    <span className="text-neon animate-pulse">● LIVE</span>
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-neon">_</span>
                  <span className="inline-block w-2 h-3.5 bg-neon ml-0.5 align-middle cursor-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-dark-2 border-y border-line py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-neon font-mono">{s.value}</div>
              <div className="text-xs text-light-3 mt-1.5 uppercase tracking-widest font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ticker ── */}
      <Ticker />

      {/* ── Y2K Story ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="label mb-6 block">Our Origin</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-8">
            Remember the year 2000?
          </h2>
          <p className="text-light-2 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            The world was convinced the internet would collapse. Data would vanish. Chaos would
            follow. It didn&apos;t happen. The internet didn&apos;t just survive — it became the
            backbone of every business on earth.
          </p>
          <p className="text-light-2 text-lg leading-relaxed max-w-3xl mx-auto">
            Today, businesses without a strong web presence face their own Y2K moment — slow
            sites, outdated designs, invisible on Google.{" "}
            <span className="text-neon font-semibold">
              We exist to make sure that never happens to you.
            </span>
          </p>
        </div>
      </section>

      {/* ── Who We Help ── */}
      <section className="py-20 px-6 bg-dark-2 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <p className="label mb-10 block text-center">Industries We Serve</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Home Services", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
              { label: "Restaurants", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" },
              { label: "Professional Services", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
              { label: "Healthcare", img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80" },
            ].map(({ label, img }) => (
              <div key={label} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-light text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      </div>

      {/* ── Before / After ── */}
      <section className="py-28 px-6 relative overflow-hidden bg-dark section-dark">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="label mb-4 block">The Transformation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-light">
              From outdated to{" "}
              <span className="gradient-text">unstoppable</span>
            </h2>
            <p className="text-light-2 mt-4 max-w-lg mx-auto text-base">
              This is what we replace — and what we build instead.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ── The Payoff / Google impact ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="label mb-4 block">The Payoff</p>
            <h2 className="text-4xl md:text-5xl font-bold text-light">
              What that means{" "}
              <span className="gradient-text">for your business</span>
            </h2>
            <p className="text-light-2 mt-4 max-w-xl mx-auto text-base">
              A website isn&apos;t decoration. It&apos;s the engine behind your Google
              presence — and the difference between getting found and getting skipped.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Benefits */}
            <div className="space-y-7">
              {[
                {
                  title: "Get found first",
                  body: "Google ranks businesses with fast, mobile-friendly websites higher in local search and the map pack. You climb. Competitors without one sit on page two.",
                },
                {
                  title: "Turn searches into phone calls",
                  body: "When someone taps your profile and lands on a real website, they call. Without one, they hit “back” and call the next business on the list.",
                },
                {
                  title: "Look like the obvious choice",
                  body: "Strong reviews plus a sharp, modern site builds trust before you ever pick up the phone. People hire businesses that look like they're winning.",
                },
                {
                  title: "See exactly what it earns you",
                  body: "Every call, click, and direction request gets tracked. You'll know precisely how many customers your website brings in — no guesswork.",
                },
              ].map((b, i) => (
                <div key={b.title} className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-neon/10 border border-neon/25 flex items-center justify-center font-mono text-neon text-xs font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-light font-bold text-lg mb-1.5">{b.title}</h3>
                    <p className="text-light-2 text-sm leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2 pl-13">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-neon font-mono text-sm hover:gap-3 transition-all"
                >
                  <span className="text-light-3">›</span> Get found on Google
                </Link>
              </div>
            </div>

            {/* Google Business Profile graphic */}
            <GoogleImpact />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      </div>

      {/* ── How It Works ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="label mb-4 block">The Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-light">
              From idea to{" "}
              <span className="gradient-text">live website</span>
            </h2>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      </div>

      {/* ── Services Preview ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="label mb-4 block">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-light">
              Services built for{" "}
              <span className="gradient-text">real businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-dark-2 border border-line rounded-xl p-7 card-accent"
              >
                <h3 className="text-light font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-light-2 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-light-2 font-mono">
                      <span className="text-neon">›</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-neon font-mono text-sm hover:gap-3 transition-all"
            >
              <span className="text-light-3">›</span> View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      </div>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      </div>

      {/* ── CTA ── */}
      <section className="py-28 px-6 bg-dark-2 border-t border-line section-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label mb-6 block">Ready?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
            Ready to outlive
            <br />
            <GlitchText className="text-neon">the competition?</GlitchText>
          </h2>
          <p className="text-light-2 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Get a free consultation and quote. No pressure, no jargon — just a straight
            conversation about what your business needs online.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-white font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
