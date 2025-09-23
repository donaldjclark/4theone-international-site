import Footer from "../components/Footer";

export default function Blog() {
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
                  <span className="text-white text-6xl">📖</span>
                </div>
                <div className="p-8">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Story
                  </span>
                  <h2 className="text-3xl font-bold text-charcoal mt-4 mb-4">
                    When Heaven Touched Earth: A Night of Miracles in Mumbai
                  </h2>
                  <p className="text-slate mb-6 text-lg leading-relaxed">
                    What started as a simple church service turned into an
                    extraordinary night of supernatural encounters. Over 500
                    people experienced healing, deliverance, and life-changing
                    encounters with Jesus...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">JS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">
                          John Smith
                        </p>
                        <p className="text-sm text-slate">December 10, 2024</p>
                      </div>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-clay transition-colors duration-300 font-semibold">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-charcoal to-slate text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Get the latest revival stories and devotionals delivered to
                  your inbox.
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-sand"
                  />
                  <button className="bg-gradient-to-r from-sand to-primary text-charcoal px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-lavender to-sand p-6 rounded-xl">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {[
                    "5 Keys to Hosting God's Presence",
                    "The Power of Prophetic Worship",
                    "Walking in Supernatural Authority",
                    "When Revival Comes to Your City",
                  ].map((title, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <a
                        href="#"
                        className="text-charcoal hover:text-primary transition-colors duration-300 text-sm font-medium"
                      >
                        {title}
                      </a>
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
              {[
                {
                  title: "The Heart of Intercession",
                  excerpt:
                    "Discovering the secret place where revival is birthed through prayer and worship.",
                  date: "Dec 8, 2024",
                  category: "Devotional",
                },
                {
                  title: "Signs, Wonders & Miracles in Berlin",
                  excerpt:
                    "Testimonies from our recent crusade where the supernatural broke out powerfully.",
                  date: "Dec 5, 2024",
                  category: "Testimony",
                },
                {
                  title: "Raising the Next Generation",
                  excerpt:
                    "How to ignite revival fire in young hearts and minds for lasting transformation.",
                  date: "Dec 1, 2024",
                  category: "Teaching",
                },
                {
                  title: "The Prophetic Edge",
                  excerpt:
                    "Operating in prophetic gifts to see breakthrough in impossible situations.",
                  date: "Nov 28, 2024",
                  category: "Teaching",
                },
                {
                  title: "Healing in the Marketplace",
                  excerpt:
                    "Story of supernatural healing that led to an entire business coming to Christ.",
                  date: "Nov 25, 2024",
                  category: "Testimony",
                },
                {
                  title: "Fire on the Mission Field",
                  excerpt:
                    "Latest updates from our teams serving in unreached nations.",
                  date: "Nov 22, 2024",
                  category: "Missions",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-clay flex items-center justify-center">
                    <span className="text-white text-4xl">✨</span>
                  </div>
                  <div className="p-6">
                    <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mt-3 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-slate mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate">{post.date}</span>
                      <button className="text-primary hover:text-clay transition-colors duration-300 text-sm font-semibold">
                        Read More →
                      </button>
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
