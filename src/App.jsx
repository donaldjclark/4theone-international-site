import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events.jsx";
import EventDetail from "./pages/EventDetail";
import Partner from "./pages/Partner";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function AdminRedirect() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}admin/index.html`);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory text-charcoal">
      <p className="text-lg">Opening the admin dashboard…</p>
    </div>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* Watermark logo overlayed above backgrounds but behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 flex items-center justify-center z-10"
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt=""
          className="w-[min(2000px,120vw)] max-h-[100vh] opacity-20 select-none"
        />
      </div>

      <div className="relative min-h-screen bg-ivory/80 backdrop-blur">
        <Header />
        <main className="relative z-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-white/10"
          />
          <div className="relative z-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<EventDetail />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/*" element={<AdminRedirect />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
