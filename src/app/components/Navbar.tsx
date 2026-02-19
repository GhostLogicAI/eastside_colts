import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Heart } from "lucide-react";
const logo = "/images/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Sponsorships", path: "/sponsorships" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Eastside Colts" className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-lg" />
            <div className="hidden sm:block">
              <span className="text-white text-sm sm:text-base" style={{ fontWeight: 700 }}>EASTSIDE</span>
              <span className="text-royal text-sm sm:text-base ml-1" style={{ fontWeight: 700 }}>COLTS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-royal bg-royal/10"
                    : "text-soft-gray hover:text-white hover:bg-white/5"
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/register"
              className="px-4 py-2 text-sm rounded-lg bg-royal text-white hover:bg-royal/90 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Register
            </Link>
            <Link
              to="/donate"
              className="px-4 py-2 text-sm rounded-lg bg-gold text-charcoal hover:bg-gold/90 transition-colors flex items-center gap-1.5"
              style={{ fontWeight: 600 }}
            >
              <Heart className="w-3.5 h-3.5" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-royal bg-royal/10"
                    : "text-soft-gray hover:text-white hover:bg-white/5"
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-center rounded-lg bg-royal text-white"
                style={{ fontWeight: 600 }}
              >
                Register a Player
              </Link>
              <Link
                to="/donate"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-center rounded-lg bg-gold text-charcoal flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}