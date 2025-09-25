import { useState } from "react";

export default function SubscribeCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(199,146,234,0.28),_transparent_52%)]" />
      <div className="relative px-8 py-12 md:px-12 md:py-14 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
          stay in the move
        </span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Subscribe for revival updates, testimonies, and future gatherings.
        </h2>
        <p className="max-w-xl text-white/70 text-base">
          A single monthly email with upcoming events, prayer focuses, teaching
          highlights, and resources to help you carry the fire.
        </p>
        <form
          action="https://formspree.io/f/mpwywpvy"
          method="POST"
          className="w-full max-w-xl flex flex-col items-stretch gap-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-3"
          onSubmit={(e) => {
            setTimeout(() => setEmail(""), 1000);
          }}
        >
          <label className="sr-only" htmlFor="subscribe-email">
            Email address
          </label>
          <input
            id="subscribe-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-xl bg-white text-charcoal px-4 py-3 text-base placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="pt-1">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-sand to-primary px-6 py-3 text-base font-semibold text-charcoal shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sand"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-sm text-white/60">
          We respect your inbox. Unsubscribe with a single click.
        </p>
      </div>
    </div>
  );
}
