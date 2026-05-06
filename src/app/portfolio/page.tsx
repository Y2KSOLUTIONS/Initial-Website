import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Y2K Solutions LLC",
  description: "Examples of websites and projects built by Y2K Solutions LLC for small and medium-sized businesses.",
};

const projects = [
  {
    title: "Local HVAC Company",
    category: "Custom Website + SEO",
    description:
      "Redesigned a 10-year-old site for a family-owned HVAC business. New site loads 4x faster and ranks #1 for local search terms.",
    tags: ["Web Design", "SEO", "Local Business"],
    color: "from-royal-blue/20 to-teal/20",
  },
  {
    title: "Boutique Clothing Shop",
    category: "E-Commerce Website",
    description:
      "Built a full online store for a brick-and-mortar boutique expanding to online sales. Launched in under 3 weeks.",
    tags: ["E-Commerce", "Product Management", "Payments"],
    color: "from-teal/20 to-royal-blue/20",
  },
  {
    title: "Law Firm",
    category: "Professional Website",
    description:
      "Created a clean, authoritative online presence for a 3-attorney firm. Increased inquiry form submissions by 60%.",
    tags: ["Web Design", "Lead Generation", "Professional Services"],
    color: "from-royal-blue/20 to-teal/20",
  },
  {
    title: "Landscaping Business",
    category: "Website + Landing Pages",
    description:
      "New website plus targeted landing pages for Google Ads campaigns. Cost-per-lead dropped by 40%.",
    tags: ["Landing Pages", "SEO", "Home Services"],
    color: "from-teal/20 to-royal-blue/20",
  },
  {
    title: "Independent Restaurant",
    category: "Website + Online Ordering",
    description:
      "Modernized a restaurant's web presence with online ordering integration and a mobile-optimized menu.",
    tags: ["Web Design", "Online Ordering", "Restaurant"],
    color: "from-royal-blue/20 to-teal/20",
  },
  {
    title: "Medical Practice",
    category: "HIPAA-Conscious Website",
    description:
      "Patient-focused design with secure contact forms, appointment scheduling integration, and full ADA compliance.",
    tags: ["Healthcare", "Compliance", "Scheduling"],
    color: "from-teal/20 to-royal-blue/20",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1a3a] to-[#0A0F1E] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Real businesses, real results. Here&apos;s a look at some of the projects we&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-5xl opacity-60">🌐</span>
              </div>
              <div className="p-6">
                <p className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-2">
                  {p.category}
                </p>
                <h2 className="text-white font-bold text-lg mb-2">{p.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
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

      {/* Coming soon note + CTA */}
      <section className="py-20 px-6 bg-[#111827] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-8">
            We&apos;re actively building our public portfolio. More detailed case studies coming soon.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to be next?
          </h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s talk about what we can build for your business.
          </p>
          <Link
            href="/contact"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
