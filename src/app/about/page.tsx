import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Y2K Solutions LLC",
  description:
    "Learn about Y2K Solutions LLC — a web design company built to help small and medium-sized businesses thrive online.",
};

const values = [
  {
    title: "Transparency",
    description:
      "No hidden fees, no confusing tech jargon. You always know what you're getting and what you're paying for.",
  },
  {
    title: "Results First",
    description:
      "Pretty websites don't pay your bills — customers do. We build with conversion and growth in mind.",
  },
  {
    title: "Your Partner, Not a Vendor",
    description:
      "We're not just checking boxes. We take the time to understand your business and build something that actually helps it grow.",
  },
  {
    title: "Built to Last",
    description:
      "We use modern, proven technology so your site doesn't need a full rebuild in 2 years. Sustainable from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1a3a] to-[#0A0F1E] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Y2K Solutions</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A web design company built specifically for the businesses that keep America running —
            the small shops, service providers, and entrepreneurs who deserve an online presence
            that works as hard as they do.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The name says it all
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In 1999, the world panicked. Everyone thought the turn of the millennium would bring
              technological catastrophe — systems would fail, data would disappear, and the internet
              would crash. But on January 1st, 2000, nothing happened. The internet didn&apos;t just
              survive Y2K — it thrived.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              That&apos;s the spirit behind our name. While others worry, we build things that hold up.
              While the noise gets louder, we focus on what matters: a website that works, ranks,
              and brings in business.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We work exclusively with small and medium-sized businesses across the country — the
              kind of businesses where a strong web presence can make a real difference.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <div className="text-6xl mb-6 text-center">⚡</div>
            <blockquote className="text-gray-200 text-lg leading-relaxed text-center italic">
              &ldquo;The internet outlived Y2K. Your website should outlive your competition.
              We&apos;ll make that happen.&rdquo;
            </blockquote>
            <p className="text-center text-teal-light text-sm mt-4">— Y2K Solutions LLC</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="text-4xl font-bold text-white">
              What we believe in
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#0A0F1E] border border-white/10 rounded-2xl p-7 card-glow transition-all duration-300"
              >
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-gray-300 mb-8">
            We&apos;d love to learn about your business and show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
