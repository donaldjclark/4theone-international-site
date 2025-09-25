import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-charcoal to-slate text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">4theOne International</h3>
          <p className="text-white/70 mt-2 text-sm">
            Carrying revival. Empowering the global church to encounter Jesus.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigate</h4>
          <nav className="flex flex-col gap-2 text-white/80">
            <Link to="/" className="hover:text-sand">Home</Link>
            <Link to="/about" className="hover:text-sand">About</Link>
            <Link to="/sermons" className="hover:text-sand">Sermons</Link>
            <Link to="/events" className="hover:text-sand">Events</Link>
            <Link to="/partner" className="hover:text-sand">Partner</Link>
            <Link to="/blog" className="hover:text-sand">Blog</Link>
            <Link to="/contact" className="hover:text-sand">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              Email: <a href="mailto:donate@4theone.org" className="underline">Donate@4theOne.org</a>
            </li>
            <li>
              Give: <Link to="/partner" className="underline">Partner With Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} 4theOne International. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
