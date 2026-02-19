import { Link } from "react-router";
import { photos } from "../data/photos";
import {
  Trophy, BookOpen, Target, Heart, Building2,
  Users, GraduationCap, Shield, Dumbbell, Pencil,
  Calendar, Clock, ArrowRight, CheckCircle, Sun
} from "lucide-react";

const programs = [
  {
    icon: Trophy,
    title: "Youth Football Development",
    description: "Structured football training focused on fundamentals, conditioning, teamwork, sportsmanship, and competitive excellence.",
  },
  {
    icon: BookOpen,
    title: "Academic Support & Tutoring",
    description: "Tutoring, homework help, literacy development, and study skills support to ensure student-athletes succeed in the classroom.",
  },
  {
    icon: Target,
    title: "Leadership Development",
    description: "Mentorship and workshops focused on character, accountability, goal setting, decision-making, and public speaking.",
  },
  {
    icon: Heart,
    title: "Mental Health & Wellness Training",
    description: "Mental health awareness, emotional regulation, conflict resolution strategies, and access to trained youth mentors.",
  },
  {
    icon: Pencil,
    title: "Reading Literacy Initiative",
    description: "Reading time, comprehension support, and literacy engagement to strengthen communication and academic confidence.",
  },
  {
    icon: Building2,
    title: "Civic & Cultural Engagement",
    description: "Civic responsibility, community history, leadership values, and active citizenship.",
  },
  {
    icon: Users,
    title: "Community Outreach & Service",
    description: "Clean-ups, volunteer initiatives, food distribution, and neighborhood engagement projects.",
  },
  {
    icon: GraduationCap,
    title: "College & Career Exposure",
    description: "Guest speakers, campus visits, and career pathway discussions to expand long-term vision.",
  },
  {
    icon: Shield,
    title: "Violence Prevention & Conflict Resolution",
    description: "De-escalation, peer mediation, and building safe environments through structured guidance.",
  },
  {
    icon: Dumbbell,
    title: "Health & Fitness Education",
    description: "Nutrition awareness, strength training fundamentals, and overall wellness development.",
  },
];

const schedule = [
  {
    title: "School Year",
    subtitle: "Mon – Fri",
    description: "After-school programming combining athletics, academics, leadership, and enrichment.",
    icon: Calendar,
  },
  {
    title: "Saturdays",
    subtitle: "Optional",
    description: "Skill-building training, conditioning, mentorship workshops, and community projects.",
    icon: Clock,
  },
  {
    title: "Summer Program",
    subtitle: "4:00 PM – 8:00 PM",
    description: "Expanded athletics, literacy programming, field trips, leadership labs, and family engagement.",
    icon: Sun,
  },
];

const safetyProtocols = [
  "Background-checked coaches",
  "Concussion protocol",
  "Code of conduct",
];

const parentExpectations = [
  "Consistent attendance",
  "Academic accountability",
  "Respectful sportsmanship",
  "Clear communication",
  "Volunteer support when possible",
  "Health and safety cooperation",
  "Reinforcement of the Colt Standard",
];

export function Programs() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={photos[20].src}
          alt="Practice session"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) contrast(1.15) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Our Programs</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-6" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Comprehensive{" "}
            <span className="text-royal">Youth Development</span>
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto">
            Football is the foundation, but our program builds the whole person — athlete, student, leader, citizen.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>What We Offer</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>10 Pillars of Development</h2>
            <p className="text-soft-gray mt-3 max-w-xl mx-auto">
              We build complete young people through a holistic approach that goes far beyond the gridiron.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-royal/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center mb-4 group-hover:bg-royal/20 transition-colors">
                  <program.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="text-lg text-white mb-2" style={{ fontWeight: 700 }}>{program.title}</h3>
                <p className="text-soft-gray text-sm" style={{ lineHeight: '1.6' }}>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-royal text-xs sm:text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Schedule</span>
            <h2 className="text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 700 }}>When We Meet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 sm:p-8 text-center hover:border-royal/30 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-xl bg-royal/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-royal" />
                </div>
                <h3 className="text-white mb-1" style={{ fontWeight: 700 }}>{item.title}</h3>
                <p className="text-royal text-sm mb-3" style={{ fontWeight: 600 }}>{item.subtitle}</p>
                <p className="text-soft-gray text-sm" style={{ lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Parent Expectations */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Safety */}
            <div className="bg-card border border-royal/20 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-royal" />
                <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>Safety Protocols</h3>
              </div>
              <ul className="space-y-3">
                {safetyProtocols.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-royal shrink-0 mt-1" />
                    <span className="text-soft-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Expectations */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-royal" />
                <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>Parent Expectations</h3>
              </div>
              <p className="text-soft-gray text-sm mb-4" style={{ lineHeight: '1.6' }}>
                Parents and guardians are essential partners in each child's success. We ask families to support:
              </p>
              <ul className="space-y-3">
                {parentExpectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-royal shrink-0 mt-1" />
                    <span className="text-soft-gray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <img
          src={photos[48].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.15) contrast(1.2) saturate(0.7)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontWeight: 800 }}>Ready to Join the Colts?</h2>
          <p className="text-soft-gray mb-8">Registration is open for the 2026 season. Scholarships available.</p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-royal text-white hover:bg-royal/90 transition-colors"
            style={{ fontWeight: 700 }}
          >
            Register a Player <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
