export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  teamSize?: string;
  responsibilities: string[];
  caseStudy: {
    problem: string;
    context: string;
    accountability: string;
    decision: string;
    outcome: string;
  };
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
      "Integration and release coordination",
    ],
    caseStudy: {
      problem: "Launch a marketplace that could connect end users, brand partners, and multi-party transaction flows.",
      context: "US-based C-level client; 3,000+ end users and 100+ brand partners referenced at launch.",
      accountability: "Owned end-to-end delivery, stakeholder communication, sprint planning, and coordination around Stripe, AWS, and Firebase integrations.",
      decision: "[ADD REAL SKRITI DELIVERY OR TECHNICAL DECISION]",
      outcome: "Marketplace launched with 3,000+ end users and 100+ brand partners.",
    },
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
    caseStudy: {
      problem: "Deliver a regulated multi-seller, multi-warehouse commerce platform while meeting ZATCA e-invoicing requirements.",
      context: "Four parallel development streams; six phased releases; web and mobile delivery; eight third-party integrations.",
      accountability: "Led delivery governance, release coordination, scope and risk management, and cross-functional communication.",
      decision: "[ADD THE REAL MUSTADAM DELIVERY DECISION]",
      outcome: "Delivery was structured across six phased releases under the regulatory and integration constraints.",
    },
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
    caseStudy: {
      problem: "Ship web and mobile commerce experiences with several payment gateway integrations without allowing feature requests to blur release scope.",
      context: "Payment integrations included PayPal, PayU, and CC Avenue.",
      accountability: "Coordinated releases and facilitated client feature-prioritisation workshops.",
      decision: "[ADD REAL FLOWERS CAKES PRIORITISATION OR INTEGRATION DECISION]",
      outcome: "[ADD REAL METRIC OR DELIVERY OUTCOME]",
    },
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
    caseStudy: {
      problem: "Coordinate web, mobile, backend, and analytics work for a travel product where real-time data mattered to the roadmap.",
      context: "Time-sensitive delivery across backend, mobile, and analytics teams using Firebase, Google Analytics, and AWS.",
      accountability: "Directed cross-team delivery and milestone accountability.",
      decision: "[ADD REAL BERBE DELIVERY OR TECHNICAL DECISION]",
      outcome: "[ADD REAL METRIC OR DELIVERY OUTCOME]",
    },
  },
];
