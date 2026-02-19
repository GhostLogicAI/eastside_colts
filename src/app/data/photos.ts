export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'games' | 'practice' | 'mentorship' | 'community' | 'events' | 'fundraisers';
  caption?: string;
  date?: string;
  location?: string;
}

// Local photo assets - youth football action shots
const img = {
  playerRunning: "/images/player-running.jpg",
  playerPortrait: "/images/player-portrait.jpg",
  teamCelebration: "/images/team-celebration.jpg",
  gameAction: "/images/game-action.jpg",
  tacklePlay: "/images/tackle-play.jpg",
  gameSprint: "/images/game-sprint.jpg",
};

export const photos: Photo[] = [
  // GAMES (20 photos)
  { id: 1, src: img.gameAction, alt: "Team huddle on the field", category: "games", caption: "Pre-game huddle - Week 4 vs. Westside Lions", date: "Oct 12, 2025", location: "Clark Park Field" },
  { id: 2, src: img.gameSprint, alt: "Game action play", category: "games", caption: "Colts offense driving down the field", date: "Oct 12, 2025", location: "Clark Park Field" },
  { id: 3, src: img.playerRunning, alt: "Football player running", category: "games", caption: "Defense making a key stop in the 4th quarter", date: "Oct 5, 2025", location: "Rouge Park" },
  { id: 4, src: img.tacklePlay, alt: "Quarterback throwing a pass", category: "games", caption: "QB Darius launches a 40-yard bomb", date: "Sep 28, 2025", location: "Cass Tech Field" },
  { id: 5, src: img.tacklePlay, alt: "Quarterback in action", category: "games", caption: "QB Darius with a perfect spiral", date: "Sep 28, 2025", location: "Cass Tech Field" },
  { id: 6, src: img.playerRunning, alt: "Touchdown play", category: "games", caption: "Touchdown celebration - Colts up 21-7!", date: "Sep 21, 2025", location: "Clark Park Field" },
  { id: 7, src: img.teamCelebration, alt: "Football helmet closeup", category: "games", caption: "Defensive line holding strong at the goal line", date: "Sep 14, 2025", location: "Chandler Park" },
  { id: 8, src: img.playerRunning, alt: "Running back sprinting", category: "games", caption: "Jaylen breaks free for a 50-yard run", date: "Sep 14, 2025", location: "Chandler Park" },
  { id: 9, src: img.gameAction, alt: "Stadium lights at night", category: "games", caption: "Season opener kickoff under the lights", date: "Sep 7, 2025", location: "Clark Park Field" },
  { id: 10, src: img.gameAction, alt: "Team on the field", category: "games", caption: "O-line creating holes for the running game", date: "Sep 7, 2025", location: "Clark Park Field" },
  { id: 11, src: img.gameSprint, alt: "Friday night lights game", category: "games", caption: "Friday Night Lights - Colts vs. Panthers", date: "Aug 30, 2025", location: "Clark Park Field" },
  { id: 12, src: img.tacklePlay, alt: "Stadium lights", category: "games", caption: "The lights of Clark Park ready for game night", date: "Aug 30, 2025", location: "Clark Park Field" },
  { id: 13, src: img.teamCelebration, alt: "Football gear closeup", category: "games", caption: "Game-ready hands", date: "Aug 23, 2025", location: "Rouge Park" },
  { id: 14, src: img.gameAction, alt: "Team captains", category: "games", caption: "Captains meeting at midfield", date: "Aug 23, 2025", location: "Rouge Park" },
  { id: 15, src: img.gameSprint, alt: "Game action", category: "games", caption: "Final score: Colts 28, Eagles 14", date: "Aug 16, 2025", location: "Chandler Park" },
  { id: 16, src: img.playerRunning, alt: "Game play", category: "games", caption: "First down, Colts!", date: "Aug 16, 2025", location: "Chandler Park" },
  { id: 17, src: img.teamCelebration, alt: "Fans cheering", category: "games", caption: "East Side faithful showing up strong", date: "Oct 12, 2025", location: "Clark Park Field" },
  { id: 18, src: img.teamCelebration, alt: "Community cheering", category: "games", caption: "Colt parents bringing the energy", date: "Sep 28, 2025", location: "Cass Tech Field" },
  { id: 19, src: img.playerPortrait, alt: "Team unity", category: "games", caption: "Supporting each other from the sideline", date: "Sep 21, 2025", location: "Clark Park Field" },
  { id: 20, src: img.gameAction, alt: "Pregame tunnel entrance", category: "games", caption: "Walking out for the championship game", date: "Nov 2, 2025", location: "Clark Park Field" },

  // PRACTICE (20 photos)
  { id: 21, src: img.gameSprint, alt: "Football practice", category: "practice", caption: "Tuesday afternoon practice session", date: "Oct 8, 2025", location: "Clark Park Field" },
  { id: 22, src: img.playerRunning, alt: "Youth athlete training", category: "practice", caption: "Speed drills - building faster feet", date: "Oct 8, 2025", location: "Clark Park Field" },
  { id: 23, src: img.playerPortrait, alt: "Team stretching warmup", category: "practice", caption: "Warming up before practice", date: "Oct 1, 2025", location: "Clark Park Field" },
  { id: 24, src: img.playerRunning, alt: "Agility drill", category: "practice", caption: "Agility cone drills - footwork fundamentals", date: "Oct 1, 2025", location: "Clark Park Field" },
  { id: 25, src: img.teamCelebration, alt: "Coach with clipboard", category: "practice", caption: "Coach Davis drawing up the next play", date: "Sep 24, 2025", location: "Clark Park Field" },
  { id: 26, src: img.tacklePlay, alt: "Football helmet", category: "practice", caption: "Gear check before hitting the field", date: "Sep 24, 2025", location: "Equipment Room" },
  { id: 27, src: img.playerRunning, alt: "Athlete training", category: "practice", caption: "Off-season strength & conditioning", date: "Jul 15, 2025", location: "Community Center Gym" },
  { id: 28, src: img.gameSprint, alt: "Exercise training", category: "practice", caption: "Building strength through discipline", date: "Jul 15, 2025", location: "Community Center Gym" },
  { id: 29, src: img.gameAction, alt: "Football field", category: "practice", caption: "Cleats on grass - ready to work", date: "Sep 17, 2025", location: "Clark Park Field" },
  { id: 30, src: img.tacklePlay, alt: "Sports equipment", category: "practice", caption: "Equipment ready for practice", date: "Sep 10, 2025", location: "Equipment Room" },
  { id: 31, src: img.gameSprint, alt: "Football snap", category: "practice", caption: "Center-QB exchange drills", date: "Sep 10, 2025", location: "Clark Park Field" },
  { id: 32, src: img.gameAction, alt: "Football field goalpost sunset", category: "practice", caption: "Golden hour practice - putting in the work", date: "Sep 3, 2025", location: "Clark Park Field" },
  { id: 33, src: img.playerRunning, alt: "Speed training", category: "practice", caption: "Speed ladder drills for quick feet", date: "Sep 3, 2025", location: "Clark Park Field" },
  { id: 34, src: img.gameSprint, alt: "Tackling practice", category: "practice", caption: "Tackling form practice - heads up!", date: "Aug 27, 2025", location: "Clark Park Field" },
  { id: 35, src: img.playerPortrait, alt: "Water break", category: "practice", caption: "Hydration break - taking care of our athletes", date: "Aug 20, 2025", location: "Clark Park Field" },
  { id: 36, src: img.gameAction, alt: "Kids running", category: "practice", caption: "Conditioning laps to build endurance", date: "Aug 20, 2025", location: "Chandler Park Track" },
  { id: 37, src: img.tacklePlay, alt: "Football field markings", category: "practice", caption: "Fresh lines for the new season", date: "Aug 13, 2025", location: "Clark Park Field" },
  { id: 38, src: img.tacklePlay, alt: "Football close up", category: "practice", caption: "The pigskin - where champions are made", date: "Aug 13, 2025" },
  { id: 39, src: img.teamCelebration, alt: "Coach instruction", category: "practice", caption: "Coach Thompson breaking down technique", date: "Aug 6, 2025", location: "Clark Park Field" },
  { id: 40, src: img.playerRunning, alt: "Sprint training", category: "practice", caption: "Sprint training for game speed", date: "Jul 22, 2025", location: "Chandler Park Track" },

  // MENTORSHIP (15 photos)
  { id: 41, src: img.playerPortrait, alt: "Coach mentoring youth", category: "mentorship", caption: "One-on-one mentoring with Coach Williams", date: "Oct 10, 2025", location: "Community Center" },
  { id: 42, src: img.teamCelebration, alt: "Youth tutoring", category: "mentorship", caption: "After-practice study hall", date: "Oct 3, 2025", location: "Clark Park Library" },
  { id: 43, src: img.teamCelebration, alt: "Children studying", category: "mentorship", caption: "Books before ball - academics first", date: "Sep 26, 2025", location: "Tutoring Center" },
  { id: 44, src: img.playerPortrait, alt: "Youth leadership workshop", category: "mentorship", caption: "Leadership workshop - building future leaders", date: "Sep 19, 2025", location: "Community Center" },
  { id: 45, src: img.playerRunning, alt: "Student achievement", category: "mentorship", caption: "Alumni success: Jamal graduates with honors", date: "Jun 15, 2025", location: "Detroit Academy" },
  { id: 46, src: img.teamCelebration, alt: "Classroom learning", category: "mentorship", caption: "Tutoring sessions every Wednesday", date: "Oct 8, 2025", location: "Clark Park Library" },
  { id: 47, src: img.playerPortrait, alt: "Young athlete portrait", category: "mentorship", caption: "Player Spotlight: Marcus Williams, 8th grade", date: "Oct 2025" },
  { id: 48, src: img.playerPortrait, alt: "Volunteer mentoring", category: "mentorship", caption: "Volunteer mentors making a difference", date: "Sep 12, 2025", location: "Community Center" },
  { id: 49, src: img.playerPortrait, alt: "Athlete portrait", category: "mentorship", caption: "Building champions through character", date: "Aug 2025" },
  { id: 50, src: img.gameSprint, alt: "Youth sports", category: "mentorship", caption: "Multi-sport mentorship program", date: "Jul 2025", location: "Chandler Park" },
  { id: 51, src: img.teamCelebration, alt: "Award ceremony", category: "mentorship", caption: "Academic Achievement Awards ceremony", date: "Jun 2025", location: "Community Center" },
  { id: 52, src: img.teamCelebration, alt: "Youth awards ceremony", category: "mentorship", caption: "Annual Awards Night - celebrating excellence", date: "Nov 2024", location: "Detroit Event Center" },
  { id: 53, src: img.playerPortrait, alt: "Team hands together", category: "mentorship", caption: "2024 League Champions - on and off the field", date: "Nov 2024" },
  { id: 54, src: img.tacklePlay, alt: "Sports gear", category: "mentorship", caption: "Earning the jersey - commitment and character", date: "Aug 2025" },
  { id: 55, src: img.gameAction, alt: "Field at sunset", category: "mentorship", caption: "Reflection and gratitude", date: "Sep 2025" },

  // COMMUNITY (15 photos)
  { id: 56, src: img.teamCelebration, alt: "Community volunteer event", category: "community", caption: "Annual Community Clean-Up Day", date: "Apr 19, 2025", location: "East Side Detroit" },
  { id: 57, src: img.gameSprint, alt: "Kids celebration", category: "community", caption: "End-of-season celebration with families", date: "Nov 9, 2024", location: "Clark Park" },
  { id: 58, src: img.gameAction, alt: "Detroit skyline with Renaissance Center", category: "community", caption: "Our city. Our mission. Our future.", date: "2025", location: "Detroit, MI" },
  { id: 59, src: img.playerPortrait, alt: "Detroit neighborhood", category: "community", caption: "Serving the East Side community since 2018", date: "2025", location: "East Detroit" },
  { id: 60, src: img.teamCelebration, alt: "Community gathering", category: "community", caption: "Summer cookout at Clark Park", date: "Jul 4, 2025", location: "Clark Park" },
  { id: 61, src: img.playerPortrait, alt: "Teamwork hands together", category: "community", caption: "Together we are stronger", date: "Sep 2025" },
  { id: 62, src: img.tacklePlay, alt: "Urban mural", category: "community", caption: "Detroit art and culture - our inspiration", date: "2025", location: "Eastern Market" },
  { id: 63, src: img.gameAction, alt: "Team group photo", category: "community", caption: "2025 East Side Colts - full squad", date: "Aug 2025", location: "Clark Park Field" },
  { id: 64, src: img.gameSprint, alt: "Detroit cityscape", category: "community", caption: "Detroit - a city of resilience", date: "2025" },
  { id: 65, src: img.gameAction, alt: "Detroit downtown", category: "community", caption: "Our hometown pride", date: "2025", location: "Downtown Detroit" },
  { id: 66, src: img.playerRunning, alt: "Community center", category: "community", caption: "East Side Community Center - our home base", date: "2025", location: "East Detroit" },
  { id: 67, src: img.teamCelebration, alt: "Sports camp", category: "community", caption: "Summer Sports Camp 2025", date: "Jun 2025", location: "Clark Park" },
  { id: 68, src: img.teamCelebration, alt: "Youth community service", category: "community", caption: "Players giving back through community service", date: "Mar 2025", location: "East Side Detroit" },
  { id: 69, src: img.gameSprint, alt: "Kids playing", category: "community", caption: "The future of Detroit plays here", date: "2025" },
  { id: 70, src: img.playerPortrait, alt: "Team celebration", category: "community", caption: "Celebrating together as one family", date: "Oct 2025" },

  // EVENTS (10 photos)
  { id: 71, src: img.teamCelebration, alt: "Fundraiser event", category: "events", caption: "Annual Fundraiser Gala 2025", date: "Mar 15, 2025", location: "Detroit Marriott" },
  { id: 72, src: img.playerPortrait, alt: "Charity gala dinner", category: "events", caption: "Sponsors and donors at the Annual Gala", date: "Mar 15, 2025", location: "Detroit Marriott" },
  { id: 73, src: img.playerRunning, alt: "Team circle", category: "events", caption: "Season Opening Ceremony", date: "Aug 30, 2025", location: "Clark Park Field" },
  { id: 74, src: img.gameAction, alt: "Stadium crowd", category: "events", caption: "Packed stands for the homecoming game", date: "Oct 19, 2025", location: "Clark Park Field" },
  { id: 75, src: img.gameSprint, alt: "Community event", category: "events", caption: "Pre-game tailgate party", date: "Sep 28, 2025", location: "Clark Park" },
  { id: 76, src: img.teamCelebration, alt: "Community BBQ", category: "events", caption: "End-of-Season Family BBQ", date: "Nov 16, 2024", location: "Clark Park" },
  { id: 77, src: img.playerRunning, alt: "Sports run", category: "events", caption: "Colts 5K Charity Run", date: "May 10, 2025", location: "Belle Isle Park" },
  { id: 78, src: img.tacklePlay, alt: "Halftime show", category: "events", caption: "Halftime show - Homecoming 2025", date: "Oct 19, 2025", location: "Clark Park Field" },
  { id: 79, src: img.gameAction, alt: "Team travel", category: "events", caption: "Road trip to the regional championship", date: "Nov 2, 2025" },
  { id: 80, src: img.gameSprint, alt: "Game day", category: "events", caption: "Game day energy at Clark Park", date: "Oct 12, 2025", location: "Clark Park" },

  // FUNDRAISERS (10 photos)
  { id: 81, src: img.tacklePlay, alt: "Football field aerial", category: "fundraisers", caption: "Our field - where dreams begin", date: "2025", location: "Clark Park Field" },
  { id: 82, src: img.tacklePlay, alt: "Football equipment", category: "fundraisers", caption: "New equipment funded by community donations", date: "Aug 2025", location: "Clark Park" },
  { id: 83, src: img.gameAction, alt: "Field sunset", category: "fundraisers", caption: "Every dollar builds a future", date: "2025" },
  { id: 84, src: img.playerPortrait, alt: "Team unity hands", category: "fundraisers", caption: "United for our youth", date: "2025" },
  { id: 85, src: img.teamCelebration, alt: "Youth celebration", category: "fundraisers", caption: "Your donations make these smiles possible", date: "2025" },
  { id: 86, src: img.teamCelebration, alt: "Community event", category: "fundraisers", caption: "Community fundraiser cookout", date: "Jun 2025", location: "Clark Park" },
  { id: 87, src: img.playerPortrait, alt: "Coach and player", category: "fundraisers", caption: "Investing in mentorship", date: "2025" },
  { id: 88, src: img.gameSprint, alt: "Youth learning", category: "fundraisers", caption: "Funding academic support programs", date: "2025" },
  { id: 89, src: img.playerRunning, alt: "Students studying", category: "fundraisers", caption: "Scholarships change lives", date: "2025" },
  { id: 90, src: img.gameAction, alt: "Detroit skyline", category: "fundraisers", caption: "Building a better Detroit, one player at a time", date: "2025" },
];

export const heroPhotos = [
  photos[0],   // Team huddle
  photos[8],   // Stadium lights
  photos[19],  // Championship walk
  photos[40],  // Mentoring
  photos[57],  // Detroit skyline - Ren Cen
  photos[48],  // Athlete portrait
  photos[10],  // Night game
  photos[5],   // Touchdown
];

export const getPhotosByCategory = (category: Photo['category']) =>
  photos.filter(p => p.category === category);

export const categoryLabels: Record<Photo['category'], string> = {
  games: 'Games',
  practice: 'Practice',
  mentorship: 'Mentorship',
  community: 'Community',
  events: 'Events',
  fundraisers: 'Fundraisers',
};

export const categoryColors: Record<Photo['category'], string> = {
  games: 'bg-royal text-white',
  practice: 'bg-secondary text-foreground border border-border',
  mentorship: 'bg-royal-deep text-white',
  community: 'bg-royal/20 text-royal',
  events: 'bg-steel/20 text-soft-gray',
  fundraisers: 'bg-gold text-charcoal',
};
