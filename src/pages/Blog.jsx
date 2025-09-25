import Footer from "../components/Footer";
import SubscribeCard from "../components/SubscribeCard";
import { posts } from "./posts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate to-secondary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Revival <span className="text-sand">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Read testimonies, devotionals, and insights from the field of
            revival. Let these stories ignite your faith.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-ivory to-sand rounded-2xl overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-primary to-clay flex items-center justify-center">
                  {featured?.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <span className="text-white text-6xl">📖</span>
                  )}
                </div>
                <div className="p-8">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featured?.category || "Featured Story"}
                  </span>
                  <h2 className="text-3xl font-bold text-charcoal mt-4 mb-4">
                    {featured?.title}
                  </h2>
                  <p className="text-slate mb-6 text-lg leading-relaxed">
                    {featured
                      ? (featured.content || "")
                          .replace(/<[^>]+>/g, "")
                          .slice(0, 240) + "..."
                      : ""}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">
                          {featured?.author
                            ? featured.author
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("")
                            : "JS"}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">
                          {featured?.author}
                        </p>
                        <p className="text-sm text-slate">{featured?.date}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featured?.slug}`}
                      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-clay transition-colors duration-300 font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <SubscribeCard />

              <div className="bg-gradient-to-br from-lavender to-sand p-6 rounded-xl">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 4).map((p, index) => (
                    <div key={p.slug} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <Link
                        to={`/blog/${p.slug}`}
                        className="text-charcoal hover:text-primary transition-colors duration-300 text-sm font-medium"
                      >
                        {p.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-clay flex items-center justify-center">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-4xl">✨</span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mt-3 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-slate mb-4 text-sm">
                      {(post.content || "")
                        .replace(/<[^>]+>/g, "")
                        .slice(0, 120) + "..."}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate">{post.date}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-clay transition-colors duration-300 text-sm font-semibold"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
