import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Y2K Solutions LLC",
  description:
    "Web design, e-commerce, SEO, and ongoing maintenance for small and medium-sized businesses across the US.",
};

const services = [
  {
    number: "01",
    title: "Custom Website Design",
    description:
      "Every business is different — your website should be too. We design custom sites from the ground up, built to match your brand, attract your ideal customers, and convert visitors into leads.",
    features: ["Mobile-first design", "Fast load times", "Brand-aligned aesthetic", "Easy to update"],
  },
  {
    number: "02",
    title: "E-Commerce Websites",
    description:
      "Ready to sell online? We build clean, trustworthy online stores that make buying easy and secure — whether you're selling 10 products or 10,000.",
    features: ["Product management", "Secure checkout", "Inventory tracking", "Payment integrations"],
  },
  {
    number: "03",
    title: "SEO & Performance",
    description:
      "A great website no one can find is a missed opportunity. We build with search engine optimization baked in from day one, so your customers can find you on Google.",
    features: ["On-page SEO", "Core Web Vitals optimization", "Local SEO", "Google Business setup"],
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description:
      "Websites aren't a set-it-and-forget-it deal. Our maintenance plans keep your site secure, updated, and running smoothly so you can focus on your business.",
    features: ["Security updates", "Content changes", "Uptime monitoring", "Monthly reports"],
  },
  {
    number: "05",
    title: "Landing Pages",
    description:
      "Need a focused page for a campaign, product launch, or lead generation? We build high-converting landing pages that turn ad traffic into real results.",
    features: ["A/B test ready", "Fast deployment", "Lead capture forms", "Analytics integration"],
  },
  {
    number: "06",
    title: "Website Redesigns",
    description:
      "Got an existing site that's embarrassing you? We'll modernize it — keeping what works and replacing what doesn't, with minimal disruption to your business.",
    features: ["Content migration", "Improved UX", "Modern design", "SEO preservation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden bg-dark">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="label mb-6 block">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-bold text-light mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-light-2 text-lg leading-relaxed">
            Everything your business needs to win online — designed, built, and supported by a
            team that actually cares about your results.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-dark-2 border border-line rounded-xl p-8 card-base"
            >
              <div className="font-mono text-4xl font-bold text-light-3 mb-5">{s.number}</div>
              <h2 className="text-xl font-bold text-light mb-3">{s.title}</h2>
              <p className="text-light-2 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-light-2 font-mono"
                  >
                    <span className="text-neon">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-dark-2 border-t border-line text-center">
        <div className="max-w-2xl mx-auto">
          <p className="label mb-6 block">Not Sure What You Need?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Let&apos;s figure it out together
          </h2>
          <p className="text-light-2 mb-8">
            Let&apos;s talk. We&apos;ll find the best approach for your business — no commitment
            required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-dark font-bold px-8 py-4 rounded-full hover:shadow-[0_0_28px_rgba(0,229,160,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
