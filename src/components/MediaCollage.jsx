// src/components/MediaCollage.jsx
// A flexible media collage for hero/right column areas.
// Props:
// - items: Array<{ type: 'image'|'video'|'youtube', src: string, alt?: string, poster?: string }>
// - heightClass: Tailwind height classes for container (default: responsive heights)
// - className: additional wrapper classes
// If fewer items are provided, tasteful placeholders are shown.

export default function MediaCollage({
  items = [],
  heightClass = "h-[420px] md:h-[520px] lg:h-[600px]",
  className = "",
}) {
  // Predefined tile spots across a 6x6 grid. We render up to 4 items.
  const spots = [
    "col-span-3 row-span-3", // top-left
    "col-start-4 col-span-3 row-span-2", // top-right
    "col-span-2 row-start-4 row-span-3", // bottom-left
    "col-start-3 col-span-4 row-start-4 row-span-3", // bottom-right wide
  ];

  const renderTile = (item, idx) => {
    const base = "w-full h-full object-cover";
    const wrapper = "rounded-2xl overflow-hidden shadow-lg";
    if (!item) {
      // Placeholder aesthetic blocks
      const placeholderStyles = [
        "bg-white/70 backdrop-blur-sm",
        "bg-gradient-to-br from-primary to-clay glow-primary",
        "bg-secondary/80",
        "bg-lavender/70",
      ];
      return (
        <div key={`ph-${idx}`} className={`${wrapper} ${placeholderStyles[idx % placeholderStyles.length]}`} />
      );
    }

    if (item.type === "image") {
      return (
        <div key={idx} className={wrapper}>
          <img
            src={item.src}
            alt={item.alt || "media"}
            className={base}
            loading="lazy"
            decoding="async"
          />
        </div>
      );
    }

    if (item.type === "video") {
      return (
        <div key={idx} className={wrapper}>
          <video
            className="w-full h-full object-cover"
            src={item.src}
            poster={item.poster}
            preload="metadata"
            controls
            playsInline
          />
        </div>
      );
    }

    if (item.type === "youtube") {
      // Expect src like https://www.youtube.com/embed/VIDEO_ID
      return (
        <div key={idx} className={wrapper}>
          <iframe
            className="w-full h-full"
            src={item.src}
            title={item.alt || "YouTube video"}
            frameBorder="0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }

    // Fallback placeholder
    return (
      <div key={`fallback-${idx}`} className={`${wrapper} bg-white/60`} />
    );
  };

  // Build up to 4 tiles, filling missing with placeholders
  const tiles = Array.from({ length: 4 }).map((_, i) => items[i] || null);

  return (
    <div className={`relative ${heightClass} ${className}`}>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-3">
        {tiles.map((item, idx) => (
          <div key={idx} className={spots[idx]}>
            {renderTile(item, idx)}
          </div>
        ))}
      </div>

      {/* Decorative glow accents */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-charcoal/10 pointer-events-none" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-sand/70 rounded-xl blur-2xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/50 rounded-xl blur-2xl opacity-60 pointer-events-none" />
    </div>
  );
}
