import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-lavender via-ivory to-sand">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate">
            We'd love to hear from you. Send us a prayer request, invite us to
            your city, or just say hello.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Prayer Request Form */}
            <div className="bg-gradient-to-br from-ivory to-sand p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Prayer Request
              </h2>
              <p className="text-slate mb-8">
                It's our honor to pray with you and believe God for breakthrough
                in your situation.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Prayer Request
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none resize-none"
                    placeholder="Share your prayer need with us..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-clay text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary"
                >
                  Submit Prayer Request
                </button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-charcoal to-slate text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-white/80 mb-8">
                Have questions about ministry, want to invite us to your city,
                or just want to connect?
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-sand focus:outline-none text-white placeholder-white/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-sand focus:outline-none text-white placeholder-white/60"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-sand focus:outline-none text-white">
                    <option value="">Select a subject</option>
                    <option value="invitation">Ministry Invitation</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="media">Media/Interview Request</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-sand focus:outline-none resize-none text-white placeholder-white/60"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sand to-primary text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-gradient-to-br from-primary to-clay text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@4theone.org</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">YT</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">FB</span>
                </a>
              </div>
            </div>
            <div>
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-2">Prayer Line</h3>
              <p className="opacity-90">24/7 prayer available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
