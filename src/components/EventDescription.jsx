import { useState, useRef, useLayoutEffect } from "react";

export default function EventDescription({
  text = "",
  className = "",
  toggleClass = "text-sand",
}) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const measurerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Find the first sentence (up to first ., !, or ? followed by space or end)
  const match = text.match(/^[\s\S]*?[.!?](?=\s|$)/);
  const first = match ? match[0].trim() : text.trim();
  const hasMore = text.trim().length > first.length;

  // Measure heights for animation
  const measure = () => {
    if (!contentRef.current || !measurerRef.current) return;
    const full = contentRef.current.scrollHeight;
    const collapsed = measurerRef.current.scrollHeight;
    setMaxHeight(expanded ? full : collapsed);
  };

  useLayoutEffect(() => {
    measure();

    // Debounced resize handling
    let timer = null;
    const onResize = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => measure(), 120);
    };
    window.addEventListener("resize", onResize);

    // Re-measure after images load inside content
    const imgs = contentRef.current
      ? contentRef.current.querySelectorAll("img")
      : [];
    const onImgLoad = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => measure(), 60);
    };
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    return () => {
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, text]);

  return (
    <div className={`${className} text-slate`}>
      {/* Hidden measurer used only to calculate collapsed height */}
      <div
        ref={measurerRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          height: "auto",
          overflow: "visible",
          whiteSpace: "normal",
          width: "100%",
        }}
        aria-hidden
      >
        <div dangerouslySetInnerHTML={{ __html: first }} />
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: `${maxHeight}px`,
          overflow: "hidden",
          transition: "max-height 320ms ease, opacity 240ms ease",
          opacity: expanded ? 1 : 0.85,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>

      {hasMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((s) => !s);
          }}
          className={`ml-2 ${toggleClass} font-semibold italic no-underline hover:text-primary focus:text-primary focus:outline-none`}
          aria-expanded={expanded}
        >
          {expanded ? "See Less" : "See more"}
        </button>
      )}
    </div>
  );
}
