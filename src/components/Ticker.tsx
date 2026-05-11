const items = [
  "Custom Websites",
  "E-Commerce",
  "SEO & Rankings",
  "Local Businesses",
  "Restaurants",
  "Contractors",
  "Real Estate",
  "Healthcare",
  "Retail & Shops",
  "Startups",
  "Nonprofits",
  "Service Businesses",
];

const doubled = [...items, ...items];

export default function Ticker() {
  return (
    <div className="bg-dark-3 border-y border-line overflow-hidden py-3.5 group">
      <div className="flex ticker-track whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 font-mono text-[0.65rem] uppercase tracking-widest"
          >
            <span className="text-neon opacity-60">›</span>
            <span className="text-light-2">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
