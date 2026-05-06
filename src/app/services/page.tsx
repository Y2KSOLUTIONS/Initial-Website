import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Y2K Solutions LLC",
  description:
    "Web design, e-commerce, SEO, and ongoing maintenance for small and medium-sized businesses across the US.",
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Website Design",
    description:
      "Every business is different — your website should be too. We design custom sites from the ground up, built to match your brand, attract your ideal customers, and convert visitors into leads.",
    features: ["Mobile-first design", "Fast load times", "Brand-aligned aesthetic", "Easy to update"],
  },
  {
    icon: "🛒",
    title: "E-Commerce Websites",
    description:
      "Ready to sell online? We build clean, trustworthy online stores that make buying easy and secure — whether you're selling 10 products or 10,000.",
    features: ["Product management", "Secure checkout", "Inventory tracking", "Payment integrations"],
  },
  {
    icon: "📈",
    title: "SEO & Performance",
    description:
      "A great website no one can find is a missed opportunity. We build with search engine optimization baked in from day one, so your customers can find you on Google.",
    features: ["On-page SEO", "Core Web Vitals optimization", "Local SEO", "Google Business setup"],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Websites aren't a set-it-and-forget-it deal. Our maintenance plans keep your site secure, updated, and running smoothly so you can focus on your business.",
    features: ["Security updates", "Content changes", "Uptime monitoring", "Monthly reports"],
  },
  {
    icon: "🎨",
    title: "Landing Pages",
    description:
      "Need a focused page for a campaign, product launch, or lead generation? We build high-converting landing pages that turn ad traffic into real results.",
    features: ["A/B test ready", "Fast deployment", "Lead capture forms", "Analytics integration"],
  },
  {
    icon: "🔗",
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
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1a3a] to-[#0A0F1E] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Everything your business needs to win online — designed, built, and supported by a team
            that actually cares about your results.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#111827] border border-white/10 rounded-2xl p-8 card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s talk. We&apos;ll figure out the best approach for your business together — no
            commitment required.
          </p>
          <Link
            href="/contact"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
