export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  decision?: string;
  result?: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2018",
    title: "Web Developer, Emphatic Technology",
    description:
      "Started by shipping modules and REST APIs in client web applications. The lasting lesson: a feature is not finished when code is written; it is finished when it survives release.",
  },
  {
    year: "2019",
    title: "Delivery contributor",
    description:
      "Moved from individual modules into sprint delivery across concurrent projects, working with QA and senior engineers on defects and production readiness.",
  },
  {
    year: "2020",
    title: "Module ownership & diploma",
    description:
      "Completed a Diploma in Computer Engineering at Gujarat Technological University while taking more ownership of application modules and joining client requirement discussions.",
  },
  {
    year: "2021",
    title: "IT Project Manager, Excellent Webworld",
    description:
      "Made the transition from building software to leading its delivery: owned the path from requirements and estimation through release for SaaS, marketplace, and e-commerce clients.",
    decision:
      "Moved from individual implementation into end-to-end delivery ownership so requirements, estimates, dependencies, and release decisions had one accountable lead.",
  },
  {
    year: "2022",
    title: "Cross-functional team leadership",
    description:
      "Took responsibility for teams of 8–12 across backend, frontend, QA, and mobile, balancing capacity and dependencies across parallel workstreams.",
  },
  {
    year: "2023",
    title: "International client delivery",
    description:
      "Became the primary liaison for US- and Middle East-based clients: translating requirements into delivery work, surfacing scope changes, and reporting to senior stakeholders.",
    decision:
      "Made scope changes explicit before they entered delivery, so client priorities and engineering capacity could be discussed as a trade-off rather than discovered at release.",
  },
  {
    year: "2024",
    title: "Project governance at scale",
    description:
      "Added release governance, risk registers, CI/CD coordination, and estimation to the remit—work that matters when a regulated, multi-channel release cannot be treated as a single sprint.",
    decision:
      "Treated compliance and verification as delivery workstreams with their own dependencies and acceptance conditions, not a final pre-launch check.",
  },
  {
    year: "2025",
    title: "Product building",
    description:
      "Started building Posora alongside delivery leadership, moving from guiding product delivery to owning the product definition, architecture, UX, and build directly.",
    decision:
      "Built one shared operational data layer before adding AI, so the system—not the language model—remains the source of truth.",
    result:
      "Posora is publicly live and actively being developed across its core restaurant operations and AI suite.",
  },
];
