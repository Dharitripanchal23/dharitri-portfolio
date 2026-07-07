import type { LucideIcon } from "lucide-react";
import { ClipboardList, Users, Blocks } from "lucide-react";

export interface LeadershipCard {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const leadershipCards: LeadershipCard[] = [
  {
    icon: ClipboardList,
    title: "Delivery & Project Management",
    description:
      "End-to-end ownership from discovery through production release — predictable, on-scope, and accountable.",
    items: [
      "Agile / Scrum Delivery",
      "Sprint Planning & Velocity",
      "Roadmap & Release Management",
      "Risk & Scope Management",
      "Budget Estimation & Tracking",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Stakeholders",
    description:
      "Bridging engineering teams and executive stakeholders across cultures, time zones, and business objectives.",
    items: [
      "Teams of 8–12 Engineers",
      "C-Level Client Management",
      "Requirements Gathering",
      "Cross-Functional Coordination",
      "Mentoring & Team Development",
    ],
  },
  {
    icon: Blocks,
    title: "Technical Expertise",
    description:
      "Technically fluent enough to translate business objectives into engineering execution — and back again.",
    items: [
      "Web Application Architecture",
      "REST APIs & Integrations",
      "AWS & Alibaba Cloud",
      "CI/CD & GitLab Pipelines",
      "AI-Augmented Delivery",
    ],
  },
];

export const philosophyTraits = [
  "Predictable",
  "On-scope",
  "Accountable",
  "Stakeholder-aligned",
  "Business-focused",
];
