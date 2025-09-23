export default function Footer() {
  return (
    <footer className="relative w-full mt-24 text-white overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
            fill="#E8E5E3"
          />
        </svg>
      </div>

      {/* Main Footer Content (images removed for now) */}
      <div className="relative bg-charcoal text-ivory">

        {/* Newsletter Section */}
        <div className="relative z-20 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay connected with our story
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-ivory/90">
              Receive updates from the field of revival. Stories, prayer
              requests, and inspiration delivered to your inbox.
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-ivory placeholder-ivory/60 border border-ivory/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-clay text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary whitespace-nowrap"
              >
                Join the Movement
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="relative z-20 border-t border-ivory/20 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">4theOne International</h3>
                    <p className="text-sm text-ivory/70 italic">
                      Carrying Revival
                    </p>
                  </div>
                </div>
                <p className="text-ivory/80 text-sm leading-relaxed">
                  Encounter Jesus. Carry Revival. Host His Presence.
                </p>
              </div>

              {/* Ministry */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Ministry
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/about"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Our Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sermons"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Messages
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Revival Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Testimonies
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Connect
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/partner"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Prayer Requests
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#newsletter"
                      className="text-ivory/80 hover:text-primary transition-colors"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Follow
                </h4>
                <div className="flex space-x-4 mb-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="text-sm font-bold">YT</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="text-sm font-bold">IG</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="text-sm font-bold">FB</span>
                  </a>
                </div>
                <p className="text-xs text-ivory/60">
                  Stay updated with our latest ministry moments and revival
                  reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bridge and background images removed temporarily */}

        {/* Copyright */}
        <div className="relative z-40 bg-charcoal/90 backdrop-blur-sm border-t border-ivory/10 py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-ivory/70">
            <p>© 2024 4theOne International. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              "The harvest is plentiful, but the workers are few." - Matthew
              9:37
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
