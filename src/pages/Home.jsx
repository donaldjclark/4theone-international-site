// src/pages/Home.jsx

// ✝️ Project: 4theOne International Website
// Build React components using Tailwind CSS.
// Use the custom color palette already configured in tailwind.config.js.
// Follow structure: pages for Home, About, Sermons, Events, Partner, Blog, Contact
// Keep layout spiritually warm, modern, and responsive.
// Ask ChatGPT for copy, headlines, CTAs, or visual style help when needed.

// 🛐 Hero section for the 4theOne International homepage
// - Full-screen background with soft spiritual gradient (or image placeholder)
// - Centered text: "Encounter Jesus. Carry Revival. Host His Presence."
// - Subheading: "Empowering the global church through freedom and fire."
// - Two buttons: "Partner With Us" (primary) and "Watch Sermons" (secondary)
// - Responsive, mobile-friendly, flexbox centered
// - Tailwind classes only — no external CSS

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-ivory to-sand px-6 py-24 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-charcoal mb-6 leading-tight">
          Encounter Jesus. <br /> Carry Revival. <br /> Host His Presence.
        </h1>
        <p className="text-lg text-slate mb-8">
          Empowering the global church through freedom and fire.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/partner" className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition">
            Partner With Us
          </a>
          <a href="/sermons" className="bg-white text-primary border border-primary px-6 py-3 rounded shadow hover:bg-primary hover:text-white transition">
            Watch Sermons
          </a>
        </div>
      </div>
    </section>
  );
}