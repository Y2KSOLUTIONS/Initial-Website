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
    color: "from-royal-blue/15 to-teal/15",
  },
  {
    title: "Boutique Clothing Shop",
    category: "E-Commerce Website",
    description:
      "Built a full online store for a brick-and-mortar boutique expanding to online sales. Launched in under 3 weeks.",
    tags: ["E-Commerce", "Product Management", "Payments"],
    color: "from-teal/15 to-royal-blue/15",
  },
  {
    title: "Law Firm",
    category: "Professional Website",
    description:
      "Created a clean, authoritative online presence for a 3-attorney firm. Increased inquiry form submissions by 60%.",
    tags: ["Web Design", "Lead Generation", "Professional Services"],
    color: "from-royal-blue/15 to-teal/15",
  },
  {
    title: "Landscaping Business",
    category: "Website + Landing Pages",
    description:
      "New website plus targeted landing pages for Google Ads campaigns. Cost-per-lead dropped by 40%.",
    tags: ["Landing Pages", "SEO", "Home Services"],
    color: "from-teal/15 to-royal-blue/15",
  },
  {
    title: "Independent Restaurant",
    category: "Website + Online Ordering",
    description:
      "Modernized a restaurant's web presence with online ordering integration and a mobile-optimized menu.",
    tags: ["Web Design", "Online Ordering", "Restaurant"],
    color: "from-royal-blue/15 to-teal/15",
  },
  {
    title: "Medical Practice",
    category: "HIPAA-Conscious Website",
    description:
      "Patient-focused design with secure contact forms, appointment scheduling integration, and full ADA compliance.",
    tags: ["Healthcare", "Compliance", "Scheduling"],
    color: "from-teal/15 to-royal-blue/15",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDD6] via-[#EDE0C4] to-[#F5EDD6] -z-10" />
        <div className="max-w-3xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1205] mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-[#3D2E0E] text-lg leading-relaxed">
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
              className="bg-[#EDE0C4] border border-[#C8B89A] rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-5xl opacity-50">🌐</span>
              </div>
              <div className="p-6">
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">
                  {p.category}
                </p>
                <h2 className="text-[#1A1205] font-bold text-lg mb-2">{p.title}</h2>
                <p className="text-[#6B5A3A] text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#F5EDD6] border border-[#C8B89A] text-[#3D2E0E] text-xs px-3 py-1 rounded-full"
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
      <section className="py-20 px-6 bg-[#EDE0C4] border-t border-[#C8B89A] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#6B5A3A] text-sm mb-8">
            We&apos;re actively building our public portfolio. More detailed case studies coming soon.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1205] mb-4">
            Want to be next?
          </h2>
          <p className="text-[#3D2E0E] mb-8">
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
