// Prefix a relative asset path with Vite's BASE_URL.
// Ensures URLs work in dev ("/") and on GitHub Pages (e.g. "/4theone-international-site/").
export function asset(relPath = "") {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  return `${base}${normalized}`;
}

