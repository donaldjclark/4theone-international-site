import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8">
            Our <span className="text-sand">Vision</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90">
            To see the church awakened, equipped, and unleashed into the
            fullness of God calling.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-8">Our Heart</h2>
          <p className="text-lg text-slate max-w-4xl mx-auto">
            4theOne International was born from a divine encounter with the
            heart of God for revival.
          </p>
          <div className="mt-12 flex gap-6 justify-center">
            <Link
              to="/events"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold"
            >
              Events
            </Link>
            <Link
              to="/partner"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold"
            >
              Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
