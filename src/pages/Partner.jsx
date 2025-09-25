import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DonateSection from "../components/DonateSection";

export default function Partner() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-charcoal via-slate to-secondary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner in <span className="text-sand">Revival</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Join with us to see nations transformed. Your partnership fuels the
            fire of revival across the earth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sand text-sand font-semibold hover:bg-sand hover:text-charcoal transition-colors duration-300"
            >
              Explore Missions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand text-charcoal font-semibold hover:bg-ivory transition-colors duration-300"
            >
              Connect with Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Column 1 (left): Why Partner? */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Why Partner?</h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="text-3xl" role="img" aria-label="globe">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">Global Impact</h3>
                  <p className="text-slate">
                    Your partnership helps us reach nations with the Gospel and see
                    entire regions transformed by God&apos;s power.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-3xl" role="img" aria-label="fire">🔥</div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">Revival Fire</h3>
                  <p className="text-slate">
                    Together we ignite revival fires that spread from city to city,
                    awakening hearts to encounter Jesus.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-3xl" role="img" aria-label="crown">👑</div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">Kingdom Building</h3>
                  <p className="text-slate">
                    We&apos;re building God&apos;s kingdom together, one transformed life at a
                    time, for His glory alone.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2 (right): Donate */}
          <DonateSection />
        </div>
      </section>

      <Footer />
    </>
  );
}
