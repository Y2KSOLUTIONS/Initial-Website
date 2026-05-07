import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Custom Website Design",
    description:
      "Professionally designed websites built to convert visitors into customers. Mobile-first and fast.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Sell products online with a smooth, secure shopping experience your customers will trust.",
  },
  {
    icon: "📈",
    title: "SEO & Performance",
    description:
      "Get found on Google. We build with SEO best practices baked in from day one.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Stay up-to-date and secure with ongoing maintenance plans. We handle the tech, you run your business.",
  },
];

const stats = [
  { value: "100%", label: "US-Based Clients" },
  { value: "Fast", label: "Turnaround" },
  { value: "24/7", label: "Support Available" },
  { value: "$0", label: "Hidden Fees" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDD6] via-[#EDE0C4] to-[#F5EDD6] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-royal-blue/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-teal/8 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1A1205]/5 border border-[#C8B89A] rounded-full px-4 py-1.5 text-sm text-[#6B5A3A] mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Web design for small &amp; medium businesses — nationwide
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Y2K Solutions</span>
            <br />
            <span className="text-[#1A1205]">Built for Business</span>
          </h1>

          <p className="text-xl text-[#3D2E0E] max-w-2xl mx-auto mb-10 leading-relaxed">
            The internet outlived Y2K. Your website should outlive your competition.{" "}
            <span className="text-[#1A1205] font-semibold">We&apos;ll make that happen.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#C8B89A] text-[#1A1205] font-medium px-8 py-4 rounded-full text-lg hover:bg-[#EDE0C4] transition-colors w-full sm:w-auto text-center"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#EDE0C4] border-y border-[#C8B89A] py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-[#6B5A3A] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Y2K Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Our Origin
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1205] mb-6">
            Remember the year 2000?
          </h2>
          <p className="text-[#3D2E0E] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            The world was convinced the internet would collapse. Data would vanish. Chaos would follow.
            It didn&apos;t happen. The internet didn&apos;t just survive — it became the backbone of every
            business on earth.
          </p>
          <p className="text-[#3D2E0E] text-lg leading-relaxed max-w-3xl mx-auto">
            Today, a business without a strong web presence faces its own kind of Y2K — slow sites,
            outdated designs, invisible on Google.{" "}
            <span className="text-[#1A1205] font-semibold">We exist to make sure that never happens to you.</span>
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-[#EDE0C4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1205]">
              Services built for <span className="gradient-text">real businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#F5EDD6] border border-[#C8B89A] rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[#1A1205] font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-[#6B5A3A] text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border border-[#C8B89A] text-[#1A1205] font-medium px-6 py-3 rounded-full hover:bg-[#E0CFA8] transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1205] mb-6">
            Ready to outlive the competition?
          </h2>
          <p className="text-[#3D2E0E] text-lg mb-10">
            Get a free consultation and quote. No pressure, no jargon — just a straight conversation
            about what your business needs online.
          </p>
          <Link
            href="/contact"
            className="gradient-bg text-white font-semibold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
