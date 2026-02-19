import { useState } from "react";
import { Heart, DollarSign, CheckCircle, Shield, Users, BookOpen, Trophy, ArrowRight } from "lucide-react";
import { photos } from "../data/photos";

export function Donate() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [sponsorPlayer, setSponsorPlayer] = useState(false);

  const amounts = [25, 50, 100];
  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Hero - Gold accent for donation CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={photos[82].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.2) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Support Our Mission</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-6" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Invest in{" "}
            <span className="text-gold">Detroit's Future</span>
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto">
            Every dollar you give goes directly toward building champions — through equipment, coaching, tutoring, mentorship, and scholarships.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl text-white mb-6" style={{ fontWeight: 700 }}>Make a Donation</h2>

              {/* Toggle */}
              <div className="flex bg-secondary rounded-lg p-1 mb-6">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-2.5 rounded-md text-sm transition-colors ${
                    donationType === 'one-time' ? 'bg-royal text-white' : 'text-soft-gray hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-2.5 rounded-md text-sm transition-colors ${
                    donationType === 'monthly' ? 'bg-royal text-white' : 'text-soft-gray hover:text-white'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                    className={`py-3 rounded-lg text-sm transition-all border ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-royal text-white border-royal'
                        : 'bg-input-background text-white border-border hover:border-royal/30'
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative mb-6">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-soft-gray" />
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none"
                />
              </div>

              {/* Sponsor a Player */}
              <label className="flex items-center gap-3 px-4 py-3.5 rounded-lg bg-gold/10 border border-gold/20 cursor-pointer mb-6 hover:bg-gold/15 transition-colors">
                <input
                  type="checkbox"
                  checked={sponsorPlayer}
                  onChange={(e) => setSponsorPlayer(e.target.checked)}
                  className="w-4 h-4 accent-[#D6A500]"
                />
                <div>
                  <span className="text-gold text-sm" style={{ fontWeight: 600 }}>Sponsor a Player ($150)</span>
                  <p className="text-soft-gray text-xs mt-0.5">Cover a player's full season registration who can't afford it.</p>
                </div>
              </label>

              {/* Donor Info */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-white mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="For tax receipt" />
                </div>
              </div>

              {/* Submit - Gold for donation CTA */}
              <button className="w-full py-4 rounded-lg bg-gold text-charcoal hover:bg-gold/90 transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
                <Heart className="w-5 h-5" />
                Donate {activeAmount ? `$${sponsorPlayer ? activeAmount + 150 : activeAmount}` : ''} {donationType === 'monthly' ? '/month' : ''}
              </button>

              {/* Tax info */}
              <div className="flex items-start gap-2 mt-4 px-3 py-2.5 rounded-lg bg-secondary/50">
                <Shield className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                <p className="text-soft-gray text-xs" style={{ lineHeight: '1.5' }}>
                  Eastside Colts is a registered 501(c)(3) nonprofit. Your donation is tax-deductible. Tax ID: 38-XXXXXXX. You'll receive a receipt via email.
                </p>
              </div>
            </div>
          </div>

          {/* Where Money Goes */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mb-6">
              <h3 className="text-lg text-white mb-5" style={{ fontWeight: 700 }}>Where Your Money Goes</h3>
              <div className="space-y-4">
                {[
                  { label: "Equipment & Uniforms", percent: 35, color: "bg-royal", icon: Trophy },
                  { label: "Coaching & Training", percent: 25, color: "bg-royal-deep", icon: Users },
                  { label: "Academic Programs", percent: 20, color: "bg-gold", icon: BookOpen },
                  { label: "Scholarships", percent: 15, color: "bg-royal/50", icon: Heart },
                  { label: "Operations", percent: 5, color: "bg-steel", icon: Shield },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-soft-gray" />
                        <span className="text-white text-sm" style={{ fontWeight: 500 }}>{item.label}</span>
                      </div>
                      <span className="text-royal text-sm" style={{ fontWeight: 700 }}>{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-soft-gray text-xs mt-4" style={{ lineHeight: '1.5' }}>
                95% of all funds go directly to programs that serve our youth.
              </p>
            </div>

            {/* Impact examples */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-lg text-white mb-4" style={{ fontWeight: 700 }}>Your Impact</h3>
              <div className="space-y-3">
                {[
                  { amount: "$25", impact: "Snacks, reading materials, practice equipment, and transportation support" },
                  { amount: "$50", impact: "Tutoring support, leadership workshop materials, team shirts, and volunteer background checks" },
                  { amount: "$100", impact: "A month of structured after-school programming, conflict resolution training, and tournament support" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold text-sm shrink-0 w-12" style={{ fontWeight: 700 }}>{item.amount}</span>
                    <div className="flex-1 flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-soft-gray shrink-0 mt-1" />
                      <span className="text-soft-gray text-sm">{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emotional Photo Strip */}
      <section className="py-8 sm:py-12 bg-navy overflow-hidden">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 px-4 snap-x">
          {[photos[84], photos[83], photos[86], photos[87], photos[88]].map((photo, i) => (
            <div key={i} className="shrink-0 snap-center relative group overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-56 sm:w-72 h-40 sm:h-48 object-cover"
                style={{ filter: 'contrast(1.1) saturate(0.8)' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <p className="text-white text-xs" style={{ fontWeight: 500 }}>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
