import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Partner() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-primary via-clay to-copper text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Partner in <span className="text-sand">Revival</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Join with us to see nations transformed. Your partnership fuels the
            fire of revival across the earth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-8">
                Why Partner?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl font-bold">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      Global Impact
                    </h3>
                    <p className="text-slate">
                      Your partnership helps us reach nations with the Gospel
                      and see entire regions transformed by God's power.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl font-bold">🔥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      Revival Fire
                    </h3>
                    <p className="text-slate">
                      Together we ignite revival fires that spread from city to
                      city, awakening hearts to encounter Jesus.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl font-bold">👑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      Kingdom Building
                    </h3>
                    <p className="text-slate">
                      We're building God's kingdom together, one transformed
                      life at a time, for His glory alone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ivory to-sand p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
                Partner Today
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <button className="bg-white border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    $25
                  </button>
                  <button className="bg-white border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    $50
                  </button>
                  <button className="bg-white border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    $100
                  </button>
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate/20 focus:border-primary focus:outline-none"
                />
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-clay transition-colors duration-300">
                    One-Time
                  </button>
                  <button className="flex-1 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-opacity duration-300">
                    Monthly
                  </button>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-clay text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary">
                  Give Now
                </button>
                <p className="text-xs text-slate text-center">
                  Secure donation processing via Stripe. Your information is
                  protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal to-slate text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Impact Stories</h2>
            <p className="text-xl opacity-90">
              See how your partnership is changing lives around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-sand mb-4">50K+</div>
              <h3 className="text-xl font-semibold mb-2">Lives Transformed</h3>
              <p className="text-white/80">
                Through revival meetings and supernatural encounters across 6
                continents.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-sand mb-4">120+</div>
              <h3 className="text-xl font-semibold mb-2">Churches Planted</h3>
              <p className="text-white/80">
                New church communities established in unreached regions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-sand mb-4">35</div>
              <h3 className="text-xl font-semibold mb-2">Nations Impacted</h3>
              <p className="text-white/80">
                Countries where revival fire has been ignited through our
                ministry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
