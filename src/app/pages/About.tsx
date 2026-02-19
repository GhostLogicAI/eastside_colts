import { photos } from "../data/photos";
import { Shield, Heart, Users, Target, BookOpen, Quote } from "lucide-react";
const logo = "/images/logo.svg";

const coreValues = [
  { icon: Shield, title: "Discipline", description: "We hold ourselves and each other to high standards — on the field, in the classroom, and in life." },
  { icon: Heart, title: "Respect", description: "We treat every person with dignity. Coaches, teammates, opponents, and community members." },
  { icon: Users, title: "Teamwork", description: "No one succeeds alone. We build together, win together, and grow together." },
  { icon: Target, title: "Accountability", description: "We own our actions. When we fall short, we learn, adjust, and come back stronger." },
  { icon: BookOpen, title: "Education", description: "Academics come first. Football opens doors, but education keeps them open forever." },
];

const leadership = [
  {
    name: "Bobby Christian Sr.",
    role: "President & Executive Director",
    bio: "Bobby Christian Sr. is a longtime Detroit community leader with over two decades of experience in youth development, athletics, and mentorship. He leads Eastside Colts' vision, partnerships, and program expansion to ensure every child is developed on and off the field.",
    image: photos[40].src,
  },
  {
    name: "Carl Powell",
    role: "Vice President",
    bio: "Carl Powell brings over 30 years of coaching and mentorship experience. He is committed to developing disciplined athletes and instilling character, teamwork, and accountability in every player.",
    image: photos[24].src,
  },
];

const teamPhotoStrip = [
  photos[62], photos[56], photos[60], photos[57], photos[63], photos[69], photos[61], photos[58],
];

export function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <img
          src={photos[57].src}
          alt="Detroit skyline with Renaissance Center"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) contrast(1.15) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo Badge */}
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="absolute -inset-6 bg-royal/15 blur-3xl rounded-full" />
              <img
                src={logo}
                alt="Eastside Colts"
                className="relative w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-2xl mx-auto"
              />
            </div>
          </div>
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>About Us</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-6" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Born in Detroit.{" "}
            <span className="text-royal">Built for Detroit.</span>
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            The Eastside Colts aren't just a football team. We're a movement — a community-driven organization dedicated to transforming young lives through sport, mentorship, and education.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Mission</span>
              <h2 className="text-3xl sm:text-4xl text-white mt-3 mb-6" style={{ fontWeight: 700 }}>
                More Than a Game
              </h2>
              <p className="text-soft-gray mb-4" style={{ lineHeight: '1.8' }}>
                Founded by Bobby Christian Sr., the Eastside Colts began with a simple belief: every kid on Detroit's East Side deserves the chance to discover their potential.
              </p>
              <p className="text-soft-gray mb-4" style={{ lineHeight: '1.8' }}>
                What started as a neighborhood football team has grown into a comprehensive youth development program serving over 350 young athletes. But the scoreboard only tells part of the story.
              </p>
              <p className="text-soft-gray" style={{ lineHeight: '1.8' }}>
                Our players maintain a minimum 2.5 GPA to stay on the roster. They complete community service hours. They attend mentorship sessions. They learn what it means to be accountable, respectful, and driven — values that carry them far beyond the field.
              </p>
            </div>
            <div className="relative">
              <img
                src={photos[40].src}
                alt="Coach mentoring"
                className="w-full rounded-xl"
                style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-4 sm:p-5 max-w-xs">
                <div className="flex items-start gap-2">
                  <Quote className="w-6 h-6 text-royal shrink-0 mt-1" />
                  <div>
                    <p className="text-white text-sm italic" style={{ lineHeight: '1.5' }}>
                      "We don't just coach football. We build leaders."
                    </p>
                    <p className="text-royal text-xs mt-2" style={{ fontWeight: 600 }}>— Bobby Christian Sr.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-royal/30 transition-colors group">
                <div className="w-14 h-14 mx-auto rounded-xl bg-royal/10 flex items-center justify-center mb-4 group-hover:bg-royal/20 transition-colors">
                  <value.icon className="w-7 h-7 text-royal" />
                </div>
                <h3 className="text-white mb-2" style={{ fontWeight: 700 }}>{value.title}</h3>
                <p className="text-soft-gray text-sm" style={{ lineHeight: '1.6' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Team</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>Leadership & Coaches</h2>
            <p className="text-soft-gray mt-3 max-w-xl mx-auto">
              Dedicated volunteers who give their time to build the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {leadership.map((person, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-royal/30 transition-colors">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.65) contrast(1.1) saturate(0.85)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white" style={{ fontWeight: 700 }}>{person.name}</h3>
                  <p className="text-royal text-sm mb-2" style={{ fontWeight: 500 }}>{person.role}</p>
                  <p className="text-soft-gray text-sm" style={{ lineHeight: '1.6' }}>{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Strip */}
      <section className="py-12 sm:py-16 bg-charcoal overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-steel text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Community</span>
        </div>
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 px-4 snap-x">
          {teamPhotoStrip.map((photo, i) => (
            <div key={i} className="shrink-0 snap-center">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-56 sm:w-72 h-40 sm:h-48 object-cover rounded-lg"
                style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}