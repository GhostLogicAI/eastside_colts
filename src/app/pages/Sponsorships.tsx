import { CheckCircle, Download, Building2, Send } from "lucide-react";
import { sponsorTiers, sponsors } from "../data/sponsors";
import { photos } from "../data/photos";

export function Sponsorships() {
  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Hero - Gold for sponsor highlights */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={photos[71].src}
          alt="Fundraiser event"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.1) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Partnership Opportunities</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-6" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Partner With the{" "}
            <span className="text-gold">Eastside Colts</span>
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto">
            Join the organizations making a real difference in Detroit's youth. Your sponsorship builds champions and strengthens community.
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-12 sm:py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "350+", label: "Youth Reached Annually", sub: "Direct brand exposure to families" },
              { value: "50K+", label: "Social Media Impressions", sub: "Monthly across all platforms" },
              { value: "200+", label: "Community Events", sub: "Hosted since 2018" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="text-3xl text-gold mb-1" style={{ fontWeight: 800 }}>{stat.value}</div>
                <div className="text-white text-sm" style={{ fontWeight: 600 }}>{stat.label}</div>
                <div className="text-soft-gray text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Sponsorship Tiers</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Choose Your Level of Impact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-card border rounded-xl overflow-hidden hover:scale-[1.02] transition-transform ${
                  tier.name === 'Championship Sponsor' ? 'border-royal' : 'border-border'
                }`}
              >
                {tier.name === 'Championship Sponsor' && (
                  <div className="absolute top-0 left-0 right-0 bg-royal text-white text-center text-xs py-1" style={{ fontWeight: 700 }}>
                    PREMIER PARTNER
                  </div>
                )}
                <div className={`p-6 ${tier.name === 'Championship Sponsor' ? 'pt-8' : ''}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>{tier.name}</h3>
                  <div className="text-2xl text-royal mt-1 mb-4" style={{ fontWeight: 800 }}>{tier.price}</div>
                  <ul className="space-y-2.5 mb-6">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                        <span className="text-soft-gray text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2.5 rounded-lg text-sm transition-colors ${
                      tier.name === 'Championship Sponsor'
                        ? 'bg-royal text-white hover:bg-royal/90'
                        : 'bg-secondary text-white hover:bg-secondary/80 border border-border'
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    Become a {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download PDF */}
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-royal/30 text-royal hover:bg-royal/10 transition-colors text-sm" style={{ fontWeight: 600 }}>
              <Download className="w-4 h-4" />
              Download Sponsorship Deck (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Current Sponsors - Gold hover for sponsor highlights */}
      <section className="py-12 sm:py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-steel text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Current Partners</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.map((sponsor, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center hover:border-gold/20 transition-colors">
                <span className="text-soft-gray text-xs" style={{ fontWeight: 600 }}>{sponsor.name}</span>
                <span className={`block text-xs mt-1 ${
                  sponsor.tier === 'championship' ? 'text-royal' :
                  sponsor.tier === 'elite' ? 'text-royal-deep' :
                  sponsor.tier === 'gold' ? 'text-gold' :
                  sponsor.tier === 'silver' ? 'text-steel' :
                  sponsor.tier === 'community' ? 'text-amber-700' :
                  'text-soft-gray'
                }`} style={{ fontWeight: 500, textTransform: 'capitalize' }}>{sponsor.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Photos */}
      <section className="py-8 sm:py-12 bg-charcoal overflow-hidden">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 px-4 snap-x">
          {[photos[71], photos[72], photos[73], photos[74], photos[75], photos[76]].map((photo, i) => (
            <div key={i} className="shrink-0 snap-center">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-56 sm:w-72 h-40 sm:h-48 object-cover rounded-lg"
                style={{ filter: 'contrast(1.1) saturate(0.85)' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Get In Touch</span>
            <h2 className="text-3xl text-white mt-3" style={{ fontWeight: 700 }}>Interested in Sponsoring?</h2>
            <p className="text-soft-gray mt-2">Fill out the form below and we'll send you our full sponsorship package.</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white mb-1.5">Company Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
              </div>
              <div>
                <label className="block text-sm text-white mb-1.5">Contact Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white mb-1.5">Email *</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
              </div>
              <div>
                <label className="block text-sm text-white mb-1.5">Phone</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white mb-1.5">Interested Tier</label>
              <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                <option value="">Select a tier</option>
                {sponsorTiers.map((tier) => (
                  <option key={tier.name} value={tier.name}>{tier.name} — {tier.price}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-white mb-1.5">Message</label>
              <textarea className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none resize-none" rows={4} placeholder="Tell us about your sponsorship goals..." />
            </div>
            <button className="w-full py-3 rounded-lg bg-royal text-white hover:bg-royal/90 transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
