import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Search,
  ClipboardList,
  Users,
  Code2,
  FlaskConical,
  Rocket,
  BarChart3,
} from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Compass,
    title: "Discovery",
    description: "Requirements gathering with stakeholders — defining business objectives, constraints, and success criteria before any sprint begins.",
  },
  {
    icon: Search,
    title: "Scoping & Estimation",
    description: "Effort breakdowns, budget forecasts, and risk identification to establish a credible delivery baseline.",
  },
  {
    icon: ClipboardList,
    title: "Sprint Planning",
    description: "Backlog grooming, velocity targets, and resource allocation across parallel workstreams.",
  },
  {
    icon: Users,
    title: "Agile Ceremonies",
    description: "Daily stand-ups, sprint reviews, and retrospectives — sustaining predictable delivery across multi-month engagements.",
  },
  {
    icon: Code2,
    title: "Cross-Functional Execution",
    description: "Coordinating backend, frontend, QA, and mobile teams with clear ownership and dependency tracking.",
  },
  {
    icon: FlaskConical,
    title: "Quality & Release Readiness",
    description: "Defect resolution, integration testing, and release governance before production deployment.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "CI/CD pipeline coordination, environment configuration, and production release schedules.",
  },
  {
    icon: BarChart3,
    title: "Executive Reporting",
    description: "Structured status updates, milestone reports, risk summaries, and delivery forecasts for stakeholder review.",
  },
];
