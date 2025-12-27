import { Buffer } from "buffer";
import matter from "gray-matter";
import { marked } from "marked";
import { asset } from "../utils/assetPath";

if (typeof globalThis.Buffer === "undefined") {
  globalThis.Buffer = Buffer;
}

marked.use({
  mangle: false,
  headerIds: false,
  extensions: [
    {
      name: "post-block",
      level: "block",
      start(src) {
        const match = src.match(/^:::(?:card|cta|lead|footer)/m);
        return match ? match.index : undefined;
      },
      tokenizer(src) {
        const rule = /^:::(card|cta|lead|footer)\s*\n([\s\S]+?)\n:::\s*/;
        const match = rule.exec(src);
        if (!match) return undefined;
        return {
          type: "post-block",
          raw: match[0],
          blockType: match[1],
          text: match[2].trim(),
        };
      },
      renderer(token) {
        const inner = marked
          .parse(token.text, {
            mangle: false,
            headerIds: false,
          })
          .trim();

        switch (token.blockType) {
          case "lead":
            return `<div class="post-lead">${inner}</div>`;
          case "card":
            return `<section class="post-card">${inner}</section>`;
          case "cta":
            return `<section class="post-cta">${inner}</section>`;
          case "footer":
            return `<footer class="post-footer">${inner}</footer>`;
          default:
            return inner;
        }
      },
    },
  ],
});

const postModules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const parsedPosts = Object.entries(postModules).map(([path, raw]) => {
  const { content, data } = matter(raw ?? "");

  const slugFromPath = path.split("/").pop()?.replace(/\.md$/i, "");

  const publishedAt = data.date ? new Date(data.date) : null;
  const dateLabel =
    data.displayDate ||
    (publishedAt
      ? publishedAt.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "");

  return {
    slug: data.slug || slugFromPath || "",
    title: data.title || slugFromPath || "Untitled Post",
    image: data.image ? asset(data.image) : undefined,
    imageStyle: data.imageStyle || undefined,
    category: data.category || "",
    author: data.author || "",
    date: dateLabel,
    publishedAt: publishedAt ? publishedAt.toISOString() : null,
    content: marked.parse(content.trim(), { mangle: false, headerIds: false }),
  };
});

export const posts = parsedPosts.sort((a, b) => {
  const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return bTime - aTime;
});
