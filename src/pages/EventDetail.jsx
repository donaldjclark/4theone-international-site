import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import Footer from "../components/Footer";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <Link to="/events" className="text-primary font-semibold">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-secondary via-lavender to-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="opacity-90 mb-3">
            <Link to="/events" className="underline">Events</Link> / {event.type}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="opacity-90 flex gap-6 flex-wrap">
            <span>📍 {event.location}</span>
            <span>📅 {event.date}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose max-w-none">
            {event.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate text-lg leading-relaxed mb-6">{para}</p>
            ))}
          </div>

          {event.registrationLink && (
            <div className="mt-10">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary to-clay text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition"
              >
                Register Now
              </a>
            </div>
          )}

          <div className="mt-8">
            <Link to="/events" className="text-primary font-semibold">← Back to Events</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
