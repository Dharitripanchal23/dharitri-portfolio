export interface ImpactStat {
  value: string;
  label: string;
  context: string;
}

export const impactStats: ImpactStat[] = [
  { value: "7+", label: "years", context: "leading software delivery" },
  { value: "8–12", label: "people", context: "across delivery teams" },
  {
    value: "US · ME · AU",
    label: "client regions",
    context: "across marketplace, SaaS, and regulated commerce products",
  },
];

export const currentFocusItems = [
  "Agile Delivery Leadership",
  "Germany Relocation (Chancenkarte)",
  "International Stakeholder Management",
  "AI-Augmented Delivery Workflows",
  "Project Governance & Reporting",
  "Risk & Scope Management",
  "Cross-Functional Team Coordination",
];
