export interface Sponsor {
  name: string;
  tier: 'championship' | 'elite' | 'gold' | 'silver' | 'community' | 'supporter';
  logo?: string;
}

export const sponsors: Sponsor[] = [
  { name: "Detroit Auto Works", tier: "championship" },
  { name: "Michigan First Credit Union", tier: "elite" },
  { name: "Motor City Electric", tier: "elite" },
  { name: "Great Lakes Insurance", tier: "gold" },
  { name: "East Side Medical Center", tier: "gold" },
  { name: "D-Town Construction", tier: "silver" },
  { name: "Riverside Market", tier: "community" },
  { name: "Community First Bank", tier: "community" },
  { name: "Detroit Fitness Co.", tier: "supporter" },
  { name: "Lakeside Dental", tier: "supporter" },
  { name: "Metro Equipment Supply", tier: "supporter" },
  { name: "United Sports Apparel", tier: "supporter" },
];

export interface SponsorTier {
  name: string;
  price: string;
  color: string;
  borderColor: string;
  benefits: string[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Team Supporter",
    price: "$250",
    color: "from-gray-500 to-gray-600",
    borderColor: "border-gray-500",
    benefits: [
      "Website recognition",
      "Certificate of partnership",
    ],
  },
  {
    name: "Community Sponsor",
    price: "$500",
    color: "from-amber-800 to-amber-900",
    borderColor: "border-amber-700",
    benefits: [
      "Everything in Team Supporter",
      "Name listing on program materials",
      "Thank-you mention at events",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$1,000",
    color: "from-gray-400 to-gray-500",
    borderColor: "border-gray-400",
    benefits: [
      "Everything in Community Sponsor",
      "Social media acknowledgment",
      "Certificate of sponsorship",
      "Name in season program",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$2,500",
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-500",
    benefits: [
      "Everything in Silver",
      "Logo placement on materials",
      "Printed recognition",
      "Game and event shoutouts",
      "Quarterly impact report",
    ],
  },
  {
    name: "Elite Sponsor",
    price: "$5,000",
    color: "from-[#1548CC] to-[#0F3599]",
    borderColor: "border-royal-deep",
    benefits: [
      "Everything in Gold",
      "Prominent logo placement",
      "Social media recognition campaign",
      "Sponsor spotlight at a major event",
      "Speaking opportunity at awards night",
      "4 tickets to annual gala",
    ],
  },
  {
    name: "Championship Sponsor",
    price: "$10,000+",
    color: "from-[#1E5BFF] to-[#1548CC]",
    borderColor: "border-royal",
    benefits: [
      "Everything in Elite",
      "Premier logo placement across all channels",
      "Event recognition and VIP access",
      "\"Presented By\" sponsorship of one initiative",
      "VIP table at annual gala (8 seats)",
      "Press release partnership announcement",
      "Direct mentorship program involvement",
      "Year-round brand visibility",
    ],
  },
];
