import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Y2K Solutions LLC",
  description:
    "Examples of websites and projects built by Y2K Solutions LLC for small and medium-sized businesses.",
};

const projects = [
  {
    number: "01",
    title: "Local HVAC Company",
    category: "Custom Website + SEO",
    description:
      "Redesigned a 10-year-old site for a family-owned HVAC business. New site loads 4x faster and ranks #1 for local search terms.",
    stats: [
      { label: "load speed", value: "+4x" },
      { label: "local rank", value: "#1" },
    ],
    tags: ["Web Design", "SEO", "Local Business"],
  },
  {
    number: "02",
    title: "Boutique Clothing Shop",
    category: "E-Commerce Website",
    description:
      "Built a full online store for a brick-and-mortar boutique expanding to online sales. Launched in under 3 weeks.",
    stats: [
      { label: "launch time", value: "< 3wk" },
      { label: "products", value: "200+" },
    ],
    tags: ["E-Commerce", "Product Management", "Payments"],
  },
  {
    number: "03",
    title: "Law Firm",
    category: "Professional Website",
    description:
      "Created a clean, authoritative online presence for a 3-attorney firm. Increased inquiry form submissions by 60%.",
    stats: [
      { label: "form leads", value: "+60%" },
      { label: "bounce rate", value: "-40%" },
    ],
    tags: ["Web Design", "Lead Generation", "Professional Services"],
  },
  {
    number: "04",
    title: "Landscaping Business",
    category: "Website + Landing Pages",
    description:
      "New website plus targeted landing pages for Google Ads campaigns. Cost-per-lead dropped by 40%.",
    stats: [
      { label: "cost per lead", value: "-40%" },
      { label: "conversion", value: "+55%" },
    ],
    tags: ["Landing Pages", "SEO", "Home Services"],
  },
  {
    number: "05",
    title: "Independent Restaurant",
    category: "Website + Online Ordering",
    description:
      "Modernized a restaurant's web presence with online ordering integration and a mobile-optimized menu.",
    stats: [
      { label: "mobile visits", value: "+80%" },
      { label: "orders/mo", value: "+120" },
    ],
    tags: ["Web Design", "Online Ordering", "Restaurant"],
  },
  {
    number: "06",
    title: "Medical Practice",
    category: "HIPAA-Conscious Website",
    description:
      "Patient-focused design with secure contact forms, appointment scheduling integration, and full ADA compliance.",
    stats: [
      { label: "appointments", value: "+35%" },
      { label: "compliance", value: "100%" },
    ],
    tags: ["Healthcare", "Compliance", "Scheduling"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden bg-dark">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="label mb-6 block">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-bold text-light mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-light-2 text-lg leading-relaxed">
            Real businesses, real results. Here&apos;s a look at some of the projects we&apos;re
            proud of.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-dark-2 border border-line rounded-xl overflow-hidden card-base"
            >
              {/* Card header */}
              <div className="bg-dark-3 border-b border-line px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-light-3 text-xs">{p.number}</span>
                <span className="text-xs text-neon font-mono uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              {/* Stats strip */}
              <div className="grid grid-cols-2 border-b border-line">
                {p.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-6 py-3 text-center ${i === 0 ? "border-r border-line" : ""}`}
                  >
                    <div className="font-mono text-xl font-bold text-neon">{stat.value}</div>
                    <div className="font-mono text-xs text-light-3 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="p-6">
                <h2 className="text-light font-bold text-lg mb-2">{p.title}</h2>
                <p className="text-light-2 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-dark-3 border border-line text-light-3 text-xs px-3 py-1 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-dark-2 border-t border-line text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-light-3 text-xs font-mono mb-6">
            More detailed case studies coming soon.
          </p>
          <p className="label mb-4 block">Want To Be Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Your business could be here
          </h2>
          <p className="text-light-2 mb-8">
            Let&apos;s talk about what we can build for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-dark font-bold px-8 py-4 rounded-full hover:shadow-[0_0_28px_rgba(0,229,160,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
