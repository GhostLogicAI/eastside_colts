import { Link } from "react-router";
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
const logo = "/images/logo.svg";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Eastside Colts" className="w-11 h-11 object-contain drop-shadow-lg" />
              <div>
                <span className="text-white" style={{ fontWeight: 700 }}>EASTSIDE </span>
                <span className="text-royal" style={{ fontWeight: 700 }}>COLTS</span>
              </div>
            </div>
            <p className="text-soft-gray text-sm mb-4" style={{ lineHeight: '1.6' }}>
              Empowering Detroit youth through athletics, academic support, leadership development, mental wellness, and community engagement.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-charcoal text-sm hover:bg-gold/90 transition-colors"
              style={{ fontWeight: 600 }}
            >
              <Heart className="w-4 h-4" />
              Support Our Mission
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Programs", path: "/programs" },
                { label: "Events & Calendar", path: "/events" },
                { label: "Register a Player", path: "/register" },
                { label: "Photo Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-soft-gray text-sm hover:text-royal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Support</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Donate", path: "/donate" },
                { label: "Become a Sponsor", path: "/sponsorships" },
                { label: "Volunteer", path: "/contact" },
                { label: "Sponsor a Player", path: "/donate" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-soft-gray text-sm hover:text-royal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-soft-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-royal shrink-0" />
                <span>Clark Park, Detroit, MI 48209</span>
              </li>
              <li className="flex items-center gap-2 text-soft-gray text-sm">
                <Phone className="w-4 h-4 text-royal shrink-0" />
                <span>(313) 555-COLT</span>
              </li>
              <li className="flex items-center gap-2 text-soft-gray text-sm">
                <Mail className="w-4 h-4 text-royal shrink-0" />
                <span>info@eastsidecolts.org</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-soft-gray hover:text-royal hover:bg-royal/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs">
            &copy; 2026 Eastside Colts Youth Football. All rights reserved. 501(c)(3) Nonprofit Organization.
          </p>
          <div className="flex items-center gap-4 text-xs text-steel">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Tax ID: 38-XXXXXXX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}