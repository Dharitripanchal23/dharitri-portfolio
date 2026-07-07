export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
  isNumeric: boolean;
  displayValue?: string;
}

export const impactStats: ImpactStat[] = [
  { value: 7, suffix: "+", label: "Years Experience", isNumeric: true },
  { value: 12, suffix: "", label: "Team Members Led", isNumeric: true },
  { value: 3000, suffix: "+", label: "Users at Launch", isNumeric: true },
  { value: 0, suffix: "", label: "Client Regions", isNumeric: false, displayValue: "US & Middle East" },
  { value: 0, suffix: "", label: "Critical Incidents", isNumeric: false, displayValue: "Zero post-launch" },
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
