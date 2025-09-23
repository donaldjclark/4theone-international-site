import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-lavender via-ivory to-sand flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              This path leads nowhere
            </h2>
            <p className="text-lg text-slate mb-8">
              The page you're looking for seems to have wandered off the narrow
              path. Let us guide you back to where the Spirit is moving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-clay hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary"
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary border-2 border-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Send Prayer Request
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate italic">
              "Trust in the Lord with all your heart and lean not on your own
              understanding." - Proverbs 3:5
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
