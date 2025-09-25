import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import YouTubePosterPlayer from "../components/YouTubePosterPlayer";

export default function Sermons() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-primary via-clay to-copper text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Watch & Be <span className="text-sand">Transformed</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience powerful messages that ignite revival fire and equip you
            to carry God's presence.
          </p>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-charcoal mb-3">
              Featured Sermon
            </h2>
            <p className="text-lg text-slate">
              Be strengthened by the Word and the testimony of Jesus
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video">
              <YouTubePosterPlayer
                videoUrl="https://www.youtube.com/embed/2cvtmS8q_nE"
                poster="/sermon-poster.jpg"
                title="Featured Sermon"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://youtu.be/2cvtmS8q_nE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-clay font-semibold underline-offset-4 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Live Now</h2>
            <p className="text-lg text-slate">
              Join us live for our weekly revival services
            </p>
          </div>

          <div className="bg-charcoal rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-slate/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-xl font-semibold">
                  Live Stream Starting Soon
                </p>
                <p className="text-sm opacity-80">
                  Every Sunday at 10:00 AM PST
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/events"
                className="bg-gradient-to-r from-primary to-clay text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 glow-primary"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
