import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { photos } from "../data/photos";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [volunteerInterest, setVolunteerInterest] = useState(false);

  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={photos[60].src}
          alt="Community gathering"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.1) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl text-white mt-4 mb-4" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Contact Us
          </h1>
          <p className="text-soft-gray text-lg max-w-xl mx-auto">
            Questions about registration, volunteering, or partnerships? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-royal/20 rounded-xl p-8 sm:p-12 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-royal/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-royal" />
                </div>
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>Message Sent!</h3>
                <p className="text-soft-gray">
                  Thank you for reaching out. We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl text-white mb-6" style={{ fontWeight: 700 }}>Send Us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-white mb-1.5">First Name *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-white mb-1.5">Last Name *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-white mb-1.5">Email *</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-white mb-1.5">Phone</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Optional" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-white mb-1.5">Subject *</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                    <option value="">Select a topic</option>
                    <option>Registration Question</option>
                    <option>Donation Inquiry</option>
                    <option>Sponsorship Interest</option>
                    <option>Volunteer Inquiry</option>
                    <option>Media / Press</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-white mb-1.5">Message *</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none resize-none" rows={5} placeholder="How can we help?" />
                </div>

                {/* Volunteer Checkbox */}
                <label className="flex items-center gap-3 px-4 py-3 rounded-lg bg-royal/10 border border-royal/20 cursor-pointer mb-6 hover:bg-royal/15 transition-colors">
                  <input
                    type="checkbox"
                    checked={volunteerInterest}
                    onChange={(e) => setVolunteerInterest(e.target.checked)}
                    className="w-4 h-4 accent-[#1E5BFF]"
                  />
                  <div>
                    <span className="text-royal text-sm" style={{ fontWeight: 600 }}>I'm interested in volunteering</span>
                    <p className="text-soft-gray text-xs mt-0.5">Check this box and we'll send you volunteer opportunities.</p>
                  </div>
                </label>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3 rounded-lg bg-royal text-white hover:bg-royal/90 transition-colors flex items-center justify-center gap-2"
                  style={{ fontWeight: 700 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg text-white mb-5" style={{ fontWeight: 700 }}>Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 600 }}>Email</p>
                    <p className="text-soft-gray text-sm">info@eastsidecolts.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 600 }}>Phone</p>
                    <p className="text-soft-gray text-sm">(313) 555-COLT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 600 }}>Location</p>
                    <p className="text-soft-gray text-sm">Clark Park</p>
                    <p className="text-soft-gray text-sm">1130 Clark St, Detroit, MI 48209</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 600 }}>Office Hours</p>
                    <p className="text-soft-gray text-sm">Mon – Fri: 9 AM – 5 PM</p>
                    <p className="text-soft-gray text-sm">Sat: 9 AM – 12 PM (game days vary)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg text-white mb-4" style={{ fontWeight: 700 }}>Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Facebook, label: "Facebook", handle: "@EastSideColts" },
                  { icon: Instagram, label: "Instagram", handle: "@eastsidecolts" },
                  { icon: Twitter, label: "Twitter / X", handle: "@ESColtsDetroit" },
                  { icon: Youtube, label: "YouTube", handle: "Eastside Colts" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-royal" />
                    <div>
                      <p className="text-white text-xs" style={{ fontWeight: 600 }}>{social.label}</p>
                      <p className="text-soft-gray text-xs">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="relative h-48 bg-secondary flex items-center justify-center">
                <img
                  src={photos[57].src}
                  alt="Detroit skyline with Renaissance Center"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  loading="lazy"
                />
                <div className="relative text-center">
                  <MapPin className="w-8 h-8 text-royal mx-auto mb-2" />
                  <p className="text-white text-sm" style={{ fontWeight: 600 }}>Clark Park, Detroit</p>
                  <a
                    href="https://maps.google.com/?q=Clark+Park+Detroit+MI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal text-xs hover:underline mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
