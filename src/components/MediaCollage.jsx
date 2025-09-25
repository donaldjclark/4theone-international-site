// src/components/MediaCollage.jsx
import { useState } from "react";
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
  // Resolve public asset URLs relative to Vite base to work on GitHub Pages
  const resolveSrc = (src) => {
    if (!src) return src;
    if (
      /^(https?:)?\/\//.test(src) ||
      src.startsWith("data:") ||
      src.startsWith("blob:")
    )
      return src;
    if (src.startsWith("/"))
      return `${import.meta.env.BASE_URL}${src.slice(1)}`;
    return src;
  };

  // Extract a YouTube video id from common URL formats
  const getYouTubeId = (url) => {
    try {
      if (!url) return null;
      if (url.includes("/embed/")) {
        const after = url.split("/embed/")[1] || "";
        return (after.split("?")[0] || "").replaceAll("/", "");
      }
      if (url.includes("youtu.be/")) {
        const after = url.split("youtu.be/")[1] || "";
        return (after.split("?")[0] || "").replaceAll("/", "");
      }
      const u = new URL(url);
      if (u.searchParams.get("v")) return u.searchParams.get("v");
    } catch {
      return null;
    }
    return null;
  };
  // Predefined tile spots across a stylized 6x6 grid. We render up to 4 items.
  const spots = [
    "col-span-3 row-span-3", // top-left
    "col-start-4 col-span-3 row-start-2 row-span-2", // top-right offset downward
    "col-span-2 row-start-4 row-span-3", // bottom-left taller
    "col-start-3 col-span-4 row-start-4 row-span-2", // bottom-right shorter
  ];

  const tileGap = "0.75rem"; // Matches gap-3 so interior spacing stays consistent

  // Subtle background styles for each tile — always rendered behind media
  const bgStyles = [
    // Top-left: primary (#CA9365) to clay (#C18763)
    "bg-gradient-to-br from-[#CA9365] to-[#C18763]",
    // Top-right (YouTube): ivory (#E8E5E3) to sand (#EAC495)
    "bg-gradient-to-br from-[#E8E5E3] to-[#EAC495]",
    // Bottom-left: secondary (#355BA3) to lavender (#b79cd2)
    "bg-gradient-to-br from-[#355BA3] to-[#b79cd2]",
    // Bottom-right: sand (#EAC495) to copper (#A86944) for a warmer card
    "bg-gradient-to-br from-[#EAC495] to-[#A86944]",
  ];

  const renderTile = (item, idx) => {
    const base = "w-full h-full object-cover";
    const wrapper = `relative z-10 w-full h-full rounded-2xl overflow-hidden ${
      item?.type === "youtube"
        ? "shadow-xl border border-charcoal/10"
        : "shadow-lg"
    }`;
    if (!item) return null; // Show only the background tile for placeholders

    if (item.type === "image") {
      return (
        <div key={idx} className={wrapper}>
          <img
            src={resolveSrc(item.src)}
            alt={item.alt || "media"}
            className={base}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const fallback = resolveSrc("/media-1.svg");
              if (fallback && e.currentTarget.src !== fallback) {
                e.currentTarget.src = fallback;
              }
            }}
          />
        </div>
      );
    }

    if (item.type === "video") {
      return (
        <div key={idx} className={wrapper}>
          <video
            className="w-full h-full object-cover"
            src={resolveSrc(item.src)}
            poster={resolveSrc(item.poster)}
            preload="metadata"
            controls
            playsInline
          />
        </div>
      );
    }

    if (item.type === "youtube") {
      const YouTubeTile = () => {
        const [playing, setPlaying] = useState(false);
        const id = getYouTubeId(item.src);
        const baseEmbed =
          item.src.includes("/embed/") &&
          !item.src.includes("youtube.com/watch")
            ? item.src
            : id
            ? `https://www.youtube.com/embed/${id}`
            : item.src;
        const embedSrc = playing
          ? `${baseEmbed}${
              baseEmbed.includes("?") ? "&" : "?"
            }autoplay=1&rel=0&modestbranding=1`
          : baseEmbed;
        const ytThumb = id
          ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
          : "";
        const posterSrc = resolveSrc(item.poster) || ytThumb;

        return (
          <div className={wrapper}>
            <div className="relative w-full h-full">
              {playing ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedSrc}
                  title={item.alt || "YouTube video"}
                  frameBorder="0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="relative w-full h-full group text-left"
                  aria-label={item.alt ? `Play: ${item.alt}` : "Play video"}
                >
                  {posterSrc ? (
                    <img
                      src={posterSrc}
                      alt={item.alt || "video poster"}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        if (ytThumb && e.currentTarget.src !== ytThumb) {
                          e.currentTarget.src = ytThumb;
                        }
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-black/20" />
                  )}

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl ring-1 ring-charcoal/10 group-hover:bg-white transition">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-charcoal translate-x-[1px]"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      };

      return <YouTubeTile key={idx} />;
    }

    // Fallback placeholder
    return <div key={`fallback-${idx}`} className={`${wrapper} bg-white/60`} />;
  };

  // Build up to 4 tiles, filling missing with placeholders
  const tiles = Array.from({ length: 4 }).map((_, i) => items[i] || null);

  return (
    <div className={`relative ${heightClass} ${className}`}>
      {/* Background decorative glows behind everything */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-sand/70 rounded-xl blur-2xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/50 rounded-xl blur-2xl opacity-60 pointer-events-none -z-10" />

      {/* Grid layer with tiles */}
      <div
        className="absolute inset-0 grid grid-cols-6 grid-rows-[repeat(6,minmax(0,1fr))] gap-[var(--tile-gap)] z-10"
        style={{ "--tile-gap": tileGap }}
      >
        {tiles.map((item, idx) => {
          const isYouTube = item && item.type === "youtube";
          return (
            <div
              key={idx}
              className={spots[idx]}
              aria-label={items[idx]?.alt || undefined}
            >
              <div className="relative w-full h-full">
                {/* Background card for non-YouTube tiles only */}
                {!isYouTube && (
                  <div
                    className={`absolute inset-0 rounded-2xl ${bgStyles[idx]} border border-charcoal/10 shadow-xl`}
                    aria-hidden="true"
                  />
                )}
                {/* Foreground media (if any) */}
                {renderTile(item, idx)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle ring above grid for definition */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-charcoal/10 pointer-events-none z-20" />
    </div>
  );
}
