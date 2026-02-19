import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowRight, Heart, Trophy, BookOpen, Users, ChevronRight,
  TrendingUp, Award, Clock, GraduationCap, Quote
} from "lucide-react";
import { photos, heroPhotos } from "../data/photos";
import { sponsors } from "../data/sponsors";
import { GalleryGrid } from "../components/GalleryGrid";
const logo = "/images/logo.svg";

export function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center overflow-hidden">
        {heroPhotos.map((photo, i) => (
          <div
            key={photo.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIndex ? 1 : 0 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.35) contrast(1.15) saturate(0.8)' }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Prominent Logo */}
            <div className="mb-6 sm:mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-royal/20 blur-2xl rounded-full" />
                <img
                  src={logo}
                  alt="Eastside Colts"
                  className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal/15 border border-royal/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-royal animate-pulse" />
              <span className="text-royal text-xs sm:text-sm" style={{ fontWeight: 500 }}>Detroit Youth Development Organization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontWeight: 800, lineHeight: '1.05', letterSpacing: '-0.02em' }}>
              Empowering Detroit Youth Through{" "}
              <span className="text-royal">Sports, Mentorship,</span>{" "}
              and Mental Strength.
            </h1>

            <p className="text-lg sm:text-xl text-soft-gray mb-8 max-w-lg" style={{ lineHeight: '1.6' }}>
              Eastside Colts empowers Detroit youth through athletics, academic support, leadership development, mental wellness, and community engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-royal text-white hover:bg-royal/90 transition-all text-sm sm:text-base"
                style={{ fontWeight: 700 }}
              >
                Register a Player
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-gold text-charcoal hover:bg-gold/90 transition-all text-sm sm:text-base"
                style={{ fontWeight: 700 }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                Donate Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Hero indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === heroIndex ? 'bg-royal w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Why We Exist</span>
          <h2 className="text-3xl sm:text-4xl text-white mt-3 mb-8" style={{ fontWeight: 700 }}>The Need Is Real</h2>
          <div className="space-y-6">
            <p className="text-soft-gray text-lg" style={{ lineHeight: '1.8' }}>
              Too many young people grow up with talent but without opportunity.<br />
              Too many neighborhoods have strength but lack structured support.
            </p>
            <p className="text-soft-gray text-lg" style={{ lineHeight: '1.8' }}>
              Eastside Colts exists because we believe potential is everywhere — but guidance, discipline, mentorship, and opportunity must be intentional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-royal" style={{ fontWeight: 700 }}>Football teaches discipline.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-royal" style={{ fontWeight: 700 }}>Academics build confidence.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-royal" style={{ fontWeight: 700 }}>Community builds responsibility.</p>
              </div>
            </div>
            <p className="text-white text-xl sm:text-2xl pt-2" style={{ fontWeight: 800 }}>
              Together, they build leaders.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Three Pillars of Development</h2>
            <p className="text-soft-gray mt-3 max-w-xl mx-auto">
              We build complete young men through a holistic approach that goes far beyond the gridiron.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Trophy,
                title: "Athletics & Development",
                description: "Structured football training, conditioning, and competitive play that builds discipline, teamwork, and physical excellence.",
                image: photos[20].src,
                iconBg: "bg-royal/15",
                iconColor: "text-royal",
              },
              {
                icon: BookOpen,
                title: "Academics & Leadership",
                description: "Academic support, tutoring, mentorship, leadership workshops, and college prep that puts education and character first.",
                image: photos[41].src,
                iconBg: "bg-royal/15",
                iconColor: "text-royal",
              },
              {
                icon: Users,
                title: "Community & Wellness",
                description: "Mental health support, community service, civic engagement, violence prevention, and wellness programs that build whole young people.",
                image: photos[55].src,
                iconBg: "bg-royal/15",
                iconColor: "text-royal",
              },
            ].map((pillar, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-royal/30 transition-all duration-300">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: 'brightness(0.55) contrast(1.15) saturate(0.8)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center`}>
                    <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-white mb-2" style={{ fontWeight: 700 }}>{pillar.title}</h3>
                  <p className="text-soft-gray text-sm" style={{ lineHeight: '1.6' }}>{pillar.description}</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1 text-royal text-sm mt-4 hover:gap-2 transition-all"
                    style={{ fontWeight: 500 }}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS - Gold accent used here as "seasoning" */}
      <section className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src={photos[57].src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Impact</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Numbers That Matter</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Users, value: "350+", label: "Players Served", sub: "Since 2018" },
              { icon: TrendingUp, value: "7", label: "Seasons Active", sub: "And counting" },
              { icon: GraduationCap, value: "45", label: "Scholarships Awarded", sub: "$120K+ total" },
              { icon: Clock, value: "12,000+", label: "Volunteer Hours", sub: "Community impact" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-5 sm:p-8 text-center hover:border-gold/30 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl sm:text-4xl text-white mb-1" style={{ fontWeight: 800 }}>{stat.value}</div>
                <div className="text-white text-sm" style={{ fontWeight: 600 }}>{stat.label}</div>
                <div className="text-soft-gray text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SPOTLIGHTS */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Stories of Impact</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Meet Our Champions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Player Spotlight */}
            <div className="bg-card border border-border rounded-xl overflow-hidden group hover:border-royal/30 transition-colors">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative overflow-hidden">
                  <img
                    src={photos[46].src}
                    alt="Player spotlight"
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-royal text-white text-xs" style={{ fontWeight: 600 }}>Player Spotlight</span>
                  </div>
                </div>
                <div className="sm:w-3/5 p-6">
                  <div className="flex items-center gap-1 text-gold mb-3">
                    <Award className="w-4 h-4" />
                    <span className="text-xs" style={{ fontWeight: 600 }}>2025 Scholar-Athlete Award</span>
                  </div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 700 }}>Marcus Williams</h3>
                  <p className="text-royal text-sm mb-3" style={{ fontWeight: 500 }}>8th Grade | Wide Receiver | 3.8 GPA</p>
                  <div className="relative pl-4 border-l-2 border-royal/30">
                    <Quote className="absolute -top-1 -left-3 w-6 h-6 text-royal/30" />
                    <p className="text-soft-gray text-sm italic" style={{ lineHeight: '1.6' }}>
                      "The Colts taught me that discipline on the field translates to discipline in the classroom. Coach Davis pushed me to be my best in everything, not just football."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach Spotlight */}
            <div className="bg-card border border-border rounded-xl overflow-hidden group hover:border-royal/30 transition-colors">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative overflow-hidden">
                  <img
                    src={photos[40].src}
                    alt="Leadership spotlight"
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-gold text-charcoal text-xs" style={{ fontWeight: 600 }}>Leadership Spotlight</span>
                  </div>
                </div>
                <div className="sm:w-3/5 p-6">
                  <div className="flex items-center gap-1 text-steel mb-3">
                    <Trophy className="w-4 h-4" />
                    <span className="text-xs" style={{ fontWeight: 600 }}>20+ Years | Youth Development</span>
                  </div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 700 }}>Bobby Christian Sr.</h3>
                  <p className="text-royal text-sm mb-3" style={{ fontWeight: 500 }}>President & Executive Director</p>
                  <div className="relative pl-4 border-l-2 border-steel/30">
                    <Quote className="absolute -top-1 -left-3 w-6 h-6 text-steel/30" />
                    <p className="text-soft-gray text-sm italic" style={{ lineHeight: '1.6' }}>
                      "Every kid who walks through our program leaves knowing they matter. Football is the hook, but character is the catch. We're building leaders here."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Gallery</span>
              <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Our Moments</h2>
              <p className="text-soft-gray mt-2">Real moments. Real impact. Real champions.</p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-royal/30 text-royal text-sm hover:bg-royal/10 transition-colors shrink-0"
              style={{ fontWeight: 600 }}
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <GalleryGrid photos={photos} showFilters={false} maxPhotos={16} />
        </div>
      </section>

      {/* SPONSORS - Gold accent for sponsor highlights */}
      <section className="py-12 sm:py-16 bg-navy border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-steel text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Proudly Supported By</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {sponsors.map((sponsor, i) => (
              <div
                key={i}
                className="group flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span
                  className="text-steel/60 group-hover:text-gold text-sm sm:text-base transition-colors whitespace-nowrap"
                  style={{ fontWeight: 700, letterSpacing: '0.05em' }}
                >
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/sponsorships"
              className="text-royal text-sm hover:underline inline-flex items-center gap-1"
              style={{ fontWeight: 500 }}
            >
              Become a Sponsor <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={photos[19].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.2) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Every Kid Deserves a Chance to Be Great
          </h2>
          <p className="text-soft-gray text-lg mb-8 max-w-2xl mx-auto">
            Whether you register a player, make a donation, or volunteer your time — you're investing in Detroit's future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-royal text-white text-base hover:bg-royal/90 transition-all"
              style={{ fontWeight: 700 }}
            >
              Register Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold text-charcoal text-base hover:bg-gold/90 transition-all"
              style={{ fontWeight: 700 }}
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}