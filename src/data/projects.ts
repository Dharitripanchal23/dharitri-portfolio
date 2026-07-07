export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  teamSize?: string;
  responsibilities: string[];
}

export const projects: Project[] = [
  {
    slug: "skriti",
    name: "Skriti",
    category: "Marketplace Platform · USA",
    description:
      "Delivered a marketplace platform from zero infrastructure — connecting 3,000+ end users with 100+ brand partners across complex multi-party transaction flows, with sole accountability to a US-based C-level client.",
    role: "Technical Project Manager / Delivery Lead",
    teamSize: "Cross-functional delivery team",
    responsibilities: [
      "Full project lifecycle",
      "Sprint planning & resource coordination",
      "Stripe, AWS & Firebase integrations",
      "Client communication & escalations",
      "Architecture decisions",
      "Zero critical incidents post-launch",
    ],
  },
  {
    slug: "mustadam",
    name: "Mustadam",
    category: "E-Commerce & Marketplace · Middle East",
    description:
      "Government-regulated multi-seller, multi-warehouse e-commerce initiative requiring ZATCA e-invoicing compliance, simultaneous web and mobile delivery, and 8 third-party integrations under strict regulatory timelines.",
    role: "Delivery Manager / Technical Project Lead",
    teamSize: "10+ cross-functional",
    responsibilities: [
      "4 parallel development streams",
      "6 phased releases",
      "ZATCA compliance governance",
      "Alibaba Cloud infrastructure",
      "GitLab CI/CD pipeline",
      "Scope & risk management",
    ],
  },
  {
    slug: "flowers-cakes-online",
    name: "Flowers Cakes Online",
    category: "E-Commerce Platform",
    description:
      "Web and mobile e-commerce delivery with multiple payment gateway integrations — managing release cycles and facilitating client feature prioritisation workshops to maintain scope control.",
    role: "Project Coordinator / Technical Lead",
    responsibilities: [
      "Payment integrations",
      "PayPal, PayU & CC Avenue",
      "Release cycle coordination",
      "Client prioritisation workshops",
      "Scope control",
    ],
  },
  {
    slug: "berbe",
    name: "Berbe",
    category: "Real-Time Travel Platform",
    description:
      "Directed delivery of web and mobile applications with real-time data requirements — coordinating backend, mobile, and analytics teams against a time-sensitive product roadmap.",
    role: "Technical Lead / Delivery Coordinator",
    responsibilities: [
      "Real-time data delivery",
      "Backend & mobile coordination",
      "Firebase & Google Analytics",
      "Milestone accountability",
      "AWS infrastructure",
    ],
  },
];
