export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  startTime: string;
  endTime: string;
  location: string;
  category: 'games' | 'practices' | 'fundraisers' | 'volunteer' | 'community';
  description: string;
  photos?: string[];
  rsvpLink?: string;
  volunteerLink?: string;
  isPast: boolean;
  recap?: string;
}

export const categoryEventColors: Record<string, { bg: string; text: string; dot: string }> = {
  games: { bg: 'bg-royal/15', text: 'text-royal', dot: 'bg-royal' },
  practices: { bg: 'bg-secondary', text: 'text-soft-gray', dot: 'bg-soft-gray' },
  fundraisers: { bg: 'bg-gold/15', text: 'text-gold', dot: 'bg-gold' },
  volunteer: { bg: 'bg-royal-deep/20', text: 'text-royal', dot: 'bg-royal-deep' },
  community: { bg: 'bg-royal/10', text: 'text-royal', dot: 'bg-royal' },
};

export const events: CalendarEvent[] = [
  // Past Events
  {
    id: "evt-001",
    title: "Season Opener vs. Westside Panthers",
    date: "2025-08-30",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    location: "Clark Park Field, Detroit",
    category: "games",
    description: "The Colts kicked off the 2025 season with a commanding 28-14 victory over the Westside Panthers. The defense was dominant, and QB Darius threw for 3 touchdowns.",
    photos: [
      "https://images.unsplash.com/photo-1631490238089-0e2ca174a876?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1661587538719-b332042e1c92?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618536516485-006eb4d1e9bb?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "An incredible opening night under the lights. The Colts showed everyone they came to play this season."
  },
  {
    id: "evt-002",
    title: "Week 2 vs. Chandler Park Eagles",
    date: "2025-09-07",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Clark Park Field, Detroit",
    category: "games",
    description: "Another strong performance from the Colts. Final score 21-7.",
    photos: [
      "https://images.unsplash.com/photo-1508088062105-17d61307629d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1547992455-3815e61a458a?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "The defense held strong with 3 turnovers. Our running game was unstoppable."
  },
  {
    id: "evt-003",
    title: "Annual Fundraiser Gala",
    date: "2025-03-15",
    startTime: "6:00 PM",
    endTime: "10:00 PM",
    location: "Detroit Marriott at the Renaissance Center",
    category: "fundraisers",
    description: "Our annual fundraiser gala raised over $45,000 for the program. Thank you to all sponsors and donors!",
    photos: [
      "https://images.unsplash.com/photo-1659081462196-0f0c58cc3042?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1768508947362-bca7a379e62a?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "Record-breaking attendance with over 250 guests. We raised enough to fund scholarships for 15 players."
  },
  {
    id: "evt-004",
    title: "Community Clean-Up Day",
    date: "2025-04-19",
    startTime: "9:00 AM",
    endTime: "1:00 PM",
    location: "East Side Detroit Neighborhoods",
    category: "volunteer",
    description: "Players and coaches spent the morning cleaning up local parks and streets in the East Side community.",
    photos: [
      "https://images.unsplash.com/photo-1769837230054-7f3a7356dde1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1751666526244-40239a251eae?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "Over 60 volunteers joined our players to clean up 12 blocks in the East Side neighborhood."
  },
  {
    id: "evt-005",
    title: "Colts 5K Charity Run",
    date: "2025-05-10",
    startTime: "8:00 AM",
    endTime: "11:00 AM",
    location: "Belle Isle Park, Detroit",
    category: "fundraisers",
    description: "Annual 5K charity run supporting youth athletics in Detroit.",
    photos: [
      "https://images.unsplash.com/photo-1763950270216-cc3a7bde6aa8?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "200+ runners participated. Raised $12,000 for new equipment."
  },
  {
    id: "evt-006",
    title: "Summer Sports Camp Week 1",
    date: "2025-06-16",
    startTime: "8:00 AM",
    endTime: "3:00 PM",
    location: "Clark Park, Detroit",
    category: "community",
    description: "Free sports camp for youth ages 7-14. Football fundamentals, fitness, and mentorship.",
    photos: [
      "https://images.unsplash.com/photo-1505950476988-702d4a1af500?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "85 kids attended our free summer camp. Amazing week of football and fun."
  },
  {
    id: "evt-007",
    title: "Week 3 vs. Rouge Park Raiders",
    date: "2025-09-14",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Chandler Park, Detroit",
    category: "games",
    description: "A tough road game that tested the Colts' resolve.",
    photos: [
      "https://images.unsplash.com/photo-1554438847-e31bb5c42c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1730251446350-1a21ccee4037?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "Hard-fought 17-14 victory. Jaylen's 50-yard run in the 4th quarter sealed the deal."
  },
  {
    id: "evt-008",
    title: "Week 4 at Cass Tech Warriors",
    date: "2025-09-21",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    location: "Clark Park Field, Detroit",
    category: "games",
    description: "Homecoming game under the Friday night lights.",
    photos: [
      "https://images.unsplash.com/photo-1629492070154-587601fb59af?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "Colts dominated on homecoming night. Final: 35-10."
  },
  {
    id: "evt-009",
    title: "Week 5 vs. Brightmoor Bulldogs",
    date: "2025-09-28",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Cass Tech Field, Detroit",
    category: "games",
    description: "Season continues with another conference matchup.",
    photos: [
      "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1489358921548-9b3f69a1eb4a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1706841534379-95682aac32d4?w=600&h=400&fit=crop",
    ],
    isPast: true,
    recap: "Marcus J.'s incredible one-handed catch was the play of the season so far."
  },
  {
    id: "evt-010",
    title: "Week 6 vs. Denby Tech Tigers",
    date: "2025-10-05",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Rouge Park, Detroit",
    category: "games",
    description: "Mid-season showdown with an undefeated opponent.",
    isPast: true,
    recap: "A defensive battle. Colts win 10-7 with a last-minute field goal."
  },
  // Upcoming Events
  {
    id: "evt-011",
    title: "Homecoming Game vs. Midtown Mustangs",
    date: "2026-02-21",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    location: "Clark Park Field, Detroit",
    category: "games",
    description: "The biggest game of the season! Come out and support the Colts as we celebrate Homecoming 2026.",
    rsvpLink: "#",
    isPast: false,
  },
  {
    id: "evt-012",
    title: "Tuesday Practice",
    date: "2026-02-17",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice. All players must attend.",
    isPast: false,
  },
  {
    id: "evt-013",
    title: "Thursday Practice",
    date: "2026-02-19",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice. All players must attend.",
    isPast: false,
  },
  {
    id: "evt-014",
    title: "Spring Equipment Drive",
    date: "2026-03-07",
    startTime: "10:00 AM",
    endTime: "2:00 PM",
    location: "East Side Community Center, Detroit",
    category: "fundraisers",
    description: "Collecting gently used sports equipment for new players. Monetary donations also welcome.",
    volunteerLink: "#",
    isPast: false,
  },
  {
    id: "evt-015",
    title: "Coach Appreciation Dinner",
    date: "2026-03-14",
    startTime: "6:00 PM",
    endTime: "9:00 PM",
    location: "Detroit Marriott at the Renaissance Center",
    category: "community",
    description: "Celebrating our incredible volunteer coaches who give their time and energy to our youth.",
    rsvpLink: "#",
    isPast: false,
  },
  {
    id: "evt-016",
    title: "Tuesday Practice",
    date: "2026-02-24",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice.",
    isPast: false,
  },
  {
    id: "evt-017",
    title: "Thursday Practice",
    date: "2026-02-26",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice.",
    isPast: false,
  },
  {
    id: "evt-018",
    title: "Week 8 vs. Palmer Park Lions",
    date: "2026-02-28",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Palmer Park, Detroit",
    category: "games",
    description: "Away game against the Palmer Park Lions. Bus departs at 12:30 PM.",
    isPast: false,
  },
  {
    id: "evt-019",
    title: "Annual Fundraiser Gala 2026",
    date: "2026-03-21",
    startTime: "6:00 PM",
    endTime: "10:00 PM",
    location: "Detroit Marriott at the Renaissance Center",
    category: "fundraisers",
    description: "Our biggest fundraiser of the year. Silent auction, dinner, and guest speakers. Tickets: $75/person.",
    rsvpLink: "#",
    isPast: false,
  },
  {
    id: "evt-020",
    title: "Community Service Day",
    date: "2026-03-28",
    startTime: "9:00 AM",
    endTime: "1:00 PM",
    location: "East Side Detroit Neighborhoods",
    category: "volunteer",
    description: "Players and families partner with local organizations to clean up parks and plant trees.",
    volunteerLink: "#",
    isPast: false,
  },
  {
    id: "evt-021",
    title: "Tuesday Practice",
    date: "2026-03-03",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice.",
    isPast: false,
  },
  {
    id: "evt-022",
    title: "Thursday Practice",
    date: "2026-03-05",
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    location: "Clark Park Field, Detroit",
    category: "practices",
    description: "Regular season practice.",
    isPast: false,
  },
  {
    id: "evt-023",
    title: "Playoff Game - Quarterfinals",
    date: "2026-03-14",
    startTime: "2:00 PM",
    endTime: "4:30 PM",
    location: "Clark Park Field, Detroit",
    category: "games",
    description: "First round of the playoffs. Let's bring that energy!",
    isPast: false,
  },
  {
    id: "evt-024",
    title: "Academic Awards Night",
    date: "2026-04-04",
    startTime: "6:00 PM",
    endTime: "8:00 PM",
    location: "East Side Community Center, Detroit",
    category: "community",
    description: "Celebrating players who achieved academic excellence this season.",
    isPast: false,
  },
];

export const getUpcomingEvents = () => events.filter(e => !e.isPast).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
export const getPastEvents = () => events.filter(e => e.isPast).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const getEventsByCategory = (cat: string) => events.filter(e => e.category === cat);
export const getEventsForDate = (dateStr: string) => events.filter(e => e.date === dateStr);
