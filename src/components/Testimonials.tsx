// Replace placeholder content with real client testimonials as you get them

const testimonials = [
  {
    quote:
      "I had zero web presence before Y2K Solutions. Within two weeks I had a site up and my phone started ringing from Google. Best money I've spent on my business.",
    name: "Client Name",
    business: "Business Type — City, State",
  },
  {
    quote:
      "Carson built exactly what I asked for and explained everything along the way. No upsells, no confusion. Just a clean site that actually gets me customers.",
    name: "Client Name",
    business: "Business Type — City, State",
  },
  {
    quote:
      "I was skeptical because I'd been burned by an agency before. Y2K was different — fast, affordable, and they actually answered my messages.",
    name: "Client Name",
    business: "Business Type — City, State",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="label mb-4 block">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light">
            Don&apos;t take our{" "}
            <span className="gradient-text">word for it</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-dark-2 border border-line rounded-xl p-7 card-base flex flex-col gap-5"
            >
              <span className="text-neon font-mono text-4xl leading-none select-none">&ldquo;</span>
              <p className="text-light-2 text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="border-t border-line pt-5">
                <p className="text-light font-bold text-sm">{t.name}</p>
                <p className="text-light-3 font-mono text-xs mt-0.5">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
