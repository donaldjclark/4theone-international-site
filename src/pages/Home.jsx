// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MediaCollage from "../components/MediaCollage";

export default function Home() {
  return (
    <>
      {/* Hero Section - two columns */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-lavender via-ivory to-sand flex items-center px-6 md:px-10 lg:px-16">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
          {/* Left: statement + CTAs */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Encounter Jesus.
              <br />
              <span className="text-primary">Carry Revival.</span>
              <br />
              Host His Presence.
            </h1>
            <p className="text-xl md:text-2xl text-slate mb-10 max-w-3xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empowering the global church through freedom and fire. Join us as we see nations transformed by the power of God.
            </p>

            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-6 mb-12">
              <Link
                to="/partner"
                className="bg-gradient-to-r from-primary to-clay text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300 glow-primary text-lg"
              >
                Partner With Us
              </Link>
              <Link
                to="/sermons"
                className="bg-white/80 backdrop-blur-sm text-primary border-2 border-primary font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Watch Sermons
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md lg:max-w-none lg:max-w-2xl mx-auto lg:mx-0">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-charcoal text-sm md:text-base">Nations</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-charcoal text-sm md:text-base">Lives</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-charcoal text-sm md:text-base">Events</div>
              </div>
            </div>
          </div>

          {/* Right: media collage (placeholders by default) */}
          <MediaCollage
            items={[
              { type: "image", src: "/media-1.svg", alt: "Revival moment" },
              { type: "youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Livestream highlight" },
              { type: "image", src: "/media-2.svg", alt: "Outreach" },
              { type: "image", src: "/media-3.svg", alt: "Missions" },
            ]}
            heightClass="h-[420px] md:h-[520px] lg:h-[600px]"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-charcoal/30 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-12">
              We exist to see the church equipped, empowered, and unleashed into
              the fullness of who God has called her to be. Through prophetic
              ministry, teaching, and impartation, we carry the fire of revival
              to every corner of the earth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Ignite Revival
                </h3>
                <p className="text-slate">
                  Awakening hearts to encounter Jesus in unprecedented ways.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Transform Nations
                </h3>
                <p className="text-slate">
                  Seeing entire regions shift through the power of the Gospel.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✋</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Equip Saints
                </h3>
                <p className="text-slate">
                  Training believers to walk in supernatural power and
                  authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-charcoal to-slate text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Fire is Spreading
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of believers who are carrying the flame of revival to
            their communities. Your partnership helps fuel the movement that's
            transforming nations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/events"
              className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-clay transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join an Event
            </Link>
            <Link
              to="/partner"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
