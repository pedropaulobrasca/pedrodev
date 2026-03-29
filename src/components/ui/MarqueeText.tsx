import { siteContent } from '../../data/content';

const { marquee } = siteContent;

const items = [...marquee, ...marquee];

export function MarqueeText() {
  return (
    <div className="border-y border-white/5 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {items.map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-sm text-text-muted/60 font-medium tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
