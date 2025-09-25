import { useState } from "react";

export default function YouTubePosterPlayer({
  videoUrl,
  poster,
  title = "Video",
  className = "",
}) {
  const [playing, setPlaying] = useState(false);

  const resolveSrc = (src) => {
    if (!src) return src;
    if (/^(https?:)?\/\//.test(src) || src.startsWith("data:") || src.startsWith("blob:")) return src;
    if (src.startsWith("/")) return `${import.meta.env.BASE_URL}${src.slice(1)}`;
    return src;
  };

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

  const id = getYouTubeId(videoUrl);
  const baseEmbed = videoUrl.includes("/embed/") && !videoUrl.includes("youtube.com/watch")
    ? videoUrl
    : id
      ? `https://www.youtube.com/embed/${id}`
      : videoUrl;
  const autoplaySrc = `${baseEmbed}${baseEmbed.includes("?") ? "&" : "?"}autoplay=1&rel=0&modestbranding=1&color=white`;
  const ytThumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
  const posterSrc = resolveSrc(poster) || ytThumb;

  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-charcoal/10 bg-charcoal ${className}`}>
      {playing ? (
        <iframe
          className="w-full h-full"
          src={autoplaySrc}
          title={title}
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
          className="group relative w-full h-full text-left"
          aria-label={title ? `Play: ${title}` : "Play video"}
        >
          {posterSrc ? (
            <img
              src={posterSrc}
              alt={title || "video poster"}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                if (ytThumb && e.currentTarget.src !== ytThumb) e.currentTarget.src = ytThumb;
              }}
            />
          ) : (
            <div className="w-full h-full bg-black/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" aria-hidden="true" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-2xl ring-1 ring-charcoal/10 group-hover:bg-white transition">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-charcoal translate-x-[1px]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
