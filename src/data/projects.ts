export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  teamSize?: string;
  responsibilities: string[];
  sourceUrl?: string;
  caseStudy: {
    problem: string;
    context: string;
    accountability: string;
    decision?: string;
    outcome?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "skriti",
    name: "Skriti",
    category: "Marketplace Platform · USA",
    description:
      "Led an AI-powered fashion marketplace for a Texas-based client across mobile and web — creating a shared buyer/seller experience with personalised discovery, seller tooling, payments, shipping, and tax automation.",
    role: "Technical Project Manager / Delivery Lead",
    teamSize: "8 members · 6 months",
    sourceUrl:
      "https://www.excellentwebworld.com/project/fashion-ecommerce-app-case-study/",
    responsibilities: [
      "AI-enabled buyer and seller workflows",
      "Stripe payment integration",
      "Sendle shipping integration",
      "Automated tax workflow",
      "Mobile and web delivery",
    ],
    caseStudy: {
      problem: "Build a fashion marketplace where people could buy and sell apparel, jewellery, shoes, and accessories without making the buyer/seller experience feel like two separate products.",
      context: "Texas-based client; an 8-person team; six-month mobile and web delivery.",
      accountability: "Led the end-to-end product and delivery decisions across buyer, seller, admin, payment, shipping, and tax workflows.",
      decision: "Chose a shared marketplace model with role-specific capabilities: buyers received personalised recommendations and visual search, while sellers managed product drafts, pricing, and inventory from the same platform.",
      outcome: "Delivered the marketplace with Stripe payments, Sendle shipping management, automated tax handling, and AI-enabled buyer, seller, and admin capabilities.",
    },
  },
  {
    slug: "mustadam",
    name: "Mustadam",
    category: "E-Commerce & Marketplace · Middle East",
    description:
      "Led a sustainable second-hand furniture marketplace for buyers, sellers, B2B vendors, and warehouse teams — combining verification, operational workflows, and CO₂ reporting across mobile and web.",
    role: "Delivery Manager / Technical Project Lead",
    teamSize: "9 members · 15 weeks",
    sourceUrl:
      "https://www.excellentwebworld.com/project/furniture-trading-platform/",
    responsibilities: [
      "KYC and listing-approval workflows",
      "Multi-role marketplace delivery",
      "CO₂ certificate workflow",
      "ZATCA and payment integrations",
      "GitLab CI/CD pipeline",
      "Logistics, warehouse, and reporting integrations",
    ],
    caseStudy: {
      problem: "Make second-hand furniture trading trustworthy and manageable across buyers, sellers, vendors, warehouse teams, and administrators.",
      context: "Saudi Arabia; nine-person team; 15-week delivery with mobile, web, backend, QA, and maintenance work.",
      accountability: "Led the product and delivery decisions across multi-role workflows, verification, operations, compliance, and integrations.",
      decision: "Made verification a core transaction workflow rather than an afterthought: vendor KYC and product approval gate listings before they reach buyers, while role-specific dashboards keep operations visible.",
      outcome: "Delivered a marketplace reporting a 60% reduction in order-processing time, with real-time shipment tracking, compliance documentation, and CO₂ certificates for completed sales.",
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
      outcome:
        "Delivered web and mobile commerce flows with PayPal, PayU, and CC Avenue payment integrations.",
    },
  },
  {
    slug: "remote-personnel",
    name: "Remote Personnel",
    category: "SaaS Staffing Platform · Australia",
    description:
      "Led a mobile-first staffing platform and brand website for FIFO operations, replacing manual phone and email coordination with a verified, on-demand workforce deployment system.",
    role: "Technical Project Lead",
    teamSize: "7 months · 3 phases",
    sourceUrl:
      "https://www.excellentwebworld.com/project/staffing-platform-for-fifo-operations/",
    responsibilities: [
      "Five-stage worker screening workflow",
      "Credential-expiry automation",
      "Real-time availability and assignment flow",
      "Offline-ready mobile delivery",
      "iOS, Android, and responsive web",
    ],
    caseStudy: {
      problem: "Resource-sector employers needed to find and deploy qualified FIFO workers quickly without compromising credential checks or field usability.",
      context: "Australia (Western Australia and Queensland); iOS, Android, and responsive web; 24/7 on-demand hiring.",
      accountability: "Led the product and delivery decisions for the verified workforce pool, screening and compliance workflows, real-time availability, and multi-platform rollout.",
      decision: "Prioritised a compliance-first, offline-ready workflow: workers are only available after all five screening stages are complete, and field actions queue and sync through unreliable connectivity.",
      outcome: "Delivered a connected platform with 24/7 hiring access, five screening stages, and 12+ supported workforce categories; the published case study reports 57% less hiring administration and 34% faster time-to-hire.",
    },
  },
];
