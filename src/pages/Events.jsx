import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { events } from "../data/events";
import EventDescription from "../components/EventDescription";

export default function Events() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-secondary via-lavender to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Revival <span className="text-sand">Events</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Join us for life-changing encounters with Jesus. See where the fire
            of revival is spreading next.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-slate">
              Don't miss these powerful gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.slug} className="block">
                <div className="bg-gradient-to-br from-ivory to-sand rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                    <span className="text-slate text-sm">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    {event.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    📍 {event.location}
                  </p>
                  <EventDescription
                    text={event.description}
                    className="mb-6"
                    toggleClass="text-copper"
                  />
                  <div className="flex gap-3">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-primary to-clay text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex-1 text-center"
                    >
                      Register Now
                    </a>
                    <Link
                      to={`/events/${event.slug}`}
                      className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Host an Event</h2>
          <p className="text-xl mb-12 opacity-90">
            Invite 4theOne International to bring revival fire to your city,
            church, or region.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-clay text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 glow-primary"
            >
              Invite Us
            </Link>
            <Link
              to="/partner"
              className="bg-transparent border-2 border-sand text-sand font-bold px-8 py-4 rounded-full hover:bg-sand hover:text-charcoal transition-all duration-300"
            >
              Sponsor an Event
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
