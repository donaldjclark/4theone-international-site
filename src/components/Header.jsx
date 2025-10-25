import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import emblem from "../assets/emblem.svg";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={emblem}
              alt="4 the One emblem"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <img
                src={`${import.meta.env.BASE_URL}header.svg`}
                alt="4theOne International"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/sermons", label: "Sermons" },
              { path: "/events", label: "Events" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-all duration-300 ${
                  isActive(path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-charcoal hover:text-primary hover:border-b-2 hover:border-primary/50"
                } pb-1`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/partner"
              className="bg-gradient-to-r from-primary to-clay text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-primary"
            >
              Partner
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-charcoal hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/sermons", label: "Sermons" },
                { path: "/events", label: "Events" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact" },
                { path: "/partner", label: "Partner" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                    isActive(path)
                      ? "text-white bg-primary"
                      : "text-charcoal hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
