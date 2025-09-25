import { useParams, Link } from "react-router-dom";
import { posts } from "./posts";

function PostAside({ currentSlug, posts }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <aside className="space-y-6">
      <div className="bg-gradient-to-br from-charcoal/80 to-slate/70 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-2">Subscribe to Updates</h3>
        <p className="text-sm mb-4">
          Get the latest revival stories and devotionals delivered to your
          inbox.
        </p>
        <form
  action="https://formspree.io/f/mpwywpvy"
  method="POST"
  className="flex gap-3"
>
  <input
    type="email"
    name="email"
    required
    placeholder="Your email"
    className="flex-1 rounded-lg p-3 text-charcoal"
  />
  <button
    type="submit"
    className="bg-primary text-white px-4 py-2 rounded-lg"
  >
    Subscribe
  </button>
</form>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h4 className="font-semibold mb-4">Related Posts</h4>
        <ul className="space-y-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="text-charcoal hover:text-primary"
              >
                {p.title}
              </Link>
              <div className="text-xs text-slate">{p.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function BlogDetail() {
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
    <div>
      <header className="h-44 bg-gradient-to-r from-charcoal to-slate text-white flex items-center justify-center mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-2 text-sm">
            {post.category} • {post.date} • {post.author}
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2 bg-white rounded-xl shadow overflow-hidden">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className={`w-full h-96 object-cover rounded-lg ${post.imageStyle || 'object-center'}`}
              />
            )}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
              </div>
              <div
                className="prose max-w-none text-charcoal"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-8">
                <Link
                  to="/blog"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-clay transition-colors duration-300 font-semibold"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </main>

          <div>
            <PostAside currentSlug={slug} posts={posts} />
          </div>
        </div>
      </section>
    </div>
  );
}
