import { Buffer } from "buffer";
import matter from "gray-matter";
import { marked } from "marked";
import { asset } from "../utils/assetPath";

if (typeof globalThis.Buffer === "undefined") {
  globalThis.Buffer = Buffer;
}

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
    content: marked.parse(content.trim()),
  };
});

export const posts = parsedPosts.sort((a, b) => {
  const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return bTime - aTime;
});
