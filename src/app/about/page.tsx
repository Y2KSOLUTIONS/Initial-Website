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
      "We take the time to understand your business and build something that actually helps it grow.",
  },
  {
    title: "Built to Last",
    description:
      "Modern, proven technology so your site doesn't need a full rebuild in 2 years. Sustainable from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden bg-dark">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="label mb-6 block">Who We Are</p>
          <h1 className="text-5xl md:text-6xl font-bold text-light mb-6">
            About <span className="gradient-text">Y2K Solutions</span>
          </h1>
          <p className="text-light-2 text-lg leading-relaxed">
            A web design company built for the businesses that keep America running — the small
            shops, service providers, and entrepreneurs who deserve an online presence that works
            as hard as they do.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="label mb-4 block">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
              The name says it all
            </h2>
            <p className="text-light-2 leading-relaxed mb-4">
              In 1999, the world panicked. Everyone thought the turn of the millennium would bring
              technological catastrophe — systems would fail, data would disappear, the internet
              would crash. But on January 1st, 2000, nothing happened. The internet didn&apos;t
              just survive Y2K — it thrived.
            </p>
            <p className="text-light-2 leading-relaxed mb-4">
              That&apos;s the spirit behind our name. While others worry, we build things that hold
              up. While the noise gets louder, we focus on what matters: a website that works,
              ranks, and brings in business.
            </p>
            <p className="text-light-2 leading-relaxed">
              We work with small and medium-sized businesses across the country — the kind of
              business where a strong web presence can make a real difference.
            </p>
          </div>

          <div className="bg-dark-2 border border-line rounded-xl p-8">
            <div className="font-mono text-xs text-light-2 mb-6 space-y-1.5">
              <p>
                <span className="text-neon">›</span> year: 1999
              </p>
              <p>
                <span className="text-neon">›</span> threat: Y2K bug
              </p>
              <p>
                <span className="text-neon">›</span> prediction: digital collapse
              </p>
              <p className="text-yellow-400/80">⚠ world.exe panicking...</p>
              <div className="h-px bg-line my-3" />
              <p>
                <span className="text-neon">›</span> year: 2000
              </p>
              <p>
                <span className="text-neon">›</span> result: internet survived
              </p>
              <p className="text-neon">✓ internet.exe thriving</p>
            </div>
            <blockquote className="text-light text-base leading-relaxed italic border-l-2 border-neon pl-4">
              &ldquo;The internet outlived Y2K. Your website should outlive your competition.
              We&apos;ll make that happen.&rdquo;
            </blockquote>
            <p className="text-neon text-sm mt-4 font-mono">— Y2K Solutions LLC_</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-dark-2 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="label mb-4 block">How We Work</p>
            <h2 className="text-4xl font-bold text-light">What we believe in</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-dark border border-line rounded-xl p-7 card-accent"
              >
                <h3 className="text-light font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-light-2 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="label mb-6 block">Let&apos;s Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-light-2 mb-8">
            We&apos;d love to learn about your business and show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-neon text-dark font-bold px-8 py-4 rounded-full hover:shadow-[0_0_28px_rgba(0,229,160,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
