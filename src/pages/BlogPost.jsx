import { Link, useParams } from "react-router-dom";
import { posts } from "./posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
        <p className="mb-6 text-lg">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-clay transition-colors duration-300 font-semibold"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
      <div
        className="prose max-w-none text-charcoal"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-12">
        <Link
          to="/blog"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-clay transition-colors duration-300 font-semibold"
        >
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
