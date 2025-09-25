import { Link } from "react-router-dom";
import { posts } from "./posts";

function Sidebar({ posts }) {
  return (
    <aside className="space-y-6">
      <div className="bg-gradient-to-br from-charcoal/80 to-slate/70 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-2">Subscribe to Updates</h3>
        <p className="text-sm mb-4">
          Get the latest revival stories and devotionals delivered to your
          inbox.
        </p>
        <div className="flex gap-3">
          <input
            className="flex-1 rounded-lg p-3 text-charcoal"
            placeholder="Your email"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h4 className="font-semibold mb-4">Popular Posts</h4>
        <ol className="space-y-3 list-none">
          {posts.slice(0, 4).map((p, i) => (
            <li key={p.slug} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <Link
                to={`/blog/${p.slug}`}
                className="text-sm text-charcoal hover:text-primary"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

export default function BlogList() {
  const [featured, ...rest] = posts;

  return (
    <div>
      <header className="h-56 bg-gradient-to-r from-charcoal to-slate text-white flex items-center justify-center mb-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Revival <span className="text-sand">Stories</span>
          </h1>
          <p className="mt-4 max-w-2xl">
            Read testimonies, devotionals, and insights from the field of
            revival. Let these stories ignite your faith.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Featured card */}
            {featured && (
              <article className="rounded-xl overflow-hidden shadow-lg mb-8 bg-white">
                <div className="relative">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-96 object-cover"
                    />
                  ) : (
                    <div className="w-full h-96 bg-clay flex items-center justify-center text-white text-4xl font-bold">
                      {featured.title}
                    </div>
                  )}
                  <div className="absolute left-6 bottom-6 bg-ivory/90 rounded-full px-4 py-2 text-sm font-semibold">
                    Featured Story
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-3 text-charcoal">
                    {featured.title}
                  </h2>
                  <p
                    className="text-slate mb-6"
                    dangerouslySetInnerHTML={{
                      __html:
                        (featured.content || "")
                          .replace(/<[^>]+>/g, "")
                          .slice(0, 260) + "...",
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        JS
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          {featured.author}
                        </div>
                        <div className="text-xs text-slate">
                          {featured.date}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featured.slug}`}
                      className="bg-primary text-white px-6 py-2 rounded-lg"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Recent posts grid */}
            <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow p-0 overflow-hidden"
                >
                  <div className="h-36 bg-gray-200">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">
                      {post.title}
                    </h4>
                    <p
                      className="text-sm text-slate mb-4"
                      dangerouslySetInnerHTML={{
                        __html:
                          (post.content || "")
                            .replace(/<[^>]+>/g, "")
                            .slice(0, 120) + "...",
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate">{post.date}</div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary text-sm font-semibold"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <Sidebar posts={posts} />
          </div>
        </div>
      </section>
    </div>
  );
}
