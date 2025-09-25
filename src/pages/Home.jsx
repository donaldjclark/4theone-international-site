// src/pages/Contact.jsx
import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [submittedPrayer, setSubmittedPrayer] = useState(false);
  const [submittedContact, setSubmittedContact] = useState(false);

  return (
    <>
      <section className="py-24 bg-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-charcoal mb-12 text-center">
          Contact Us
        </h1>

        {/* Prayer Request Form */}
        <form action="https://formspree.io/f/mpwywpvy" method="POST" className="space-y-4" onSubmit={() => setSubmittedPrayer(true)}>
          <input type="hidden" name="_subject" value="New Prayer Request Submission" />
          <div>
            <label htmlFor="prayerName" className="block text-sm font-medium text-charcoal mb-1">
              Name
            </label>
            <input
              type="text"
              id="prayerName"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="prayerEmail" className="block text-sm font-medium text-charcoal mb-1">
              Email
            </label>
            <input
              type="email"
              id="prayerEmail"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="prayerMessage" className="block text-sm font-medium text-charcoal mb-1">
              Prayer Request
            </label>
            <textarea
              id="prayerMessage"
              name="message"
              placeholder="Your Prayer Request..."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold px-6 py-3 rounded-md hover:bg-clay transition"
          >
            Submit Prayer Request
          </button>
          {submittedPrayer && (
            <p className="mt-4 text-green-600">Thank you for your prayer request!</p>
          )}
        </form>

        {/* Get in Touch Form */}
        <form action="https://formspree.io/f/mpwywpvy" method="POST" className="space-y-4 mt-16" onSubmit={() => setSubmittedContact(true)}>
          <input type="hidden" name="_subject" value="New General Contact Message" />
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-charcoal mb-1">
              Name
            </label>
            <input
              type="text"
              id="contactName"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-charcoal mb-1">
              Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="contactMessage" className="block text-sm font-medium text-charcoal mb-1">
              Message
            </label>
            <textarea
              id="contactMessage"
              name="message"
              placeholder="Your Message..."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold px-6 py-3 rounded-md hover:bg-clay transition"
          >
            Send Message
          </button>
          {submittedContact && (
            <p className="mt-4 text-green-600">Thank you for reaching out to us!</p>
          )}
        </form>
      </section>

      <Footer />
    </>
  );
}
