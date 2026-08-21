import { siteConfig } from "@/data/site";
import { journeyMilestones } from "@/data/journey";
import { projects } from "@/data/projects";
import { toolboxCategories } from "@/data/toolbox";
import { posoraDetails } from "@/data/posora";

export interface CommandContext {
  openDemo: () => void;
  toggleMatrix: () => void;
  fireConfetti: () => void;
  clear: () => void;
  downloadResume: () => void;
}

export type CommandHandler = (args: string[], ctx: CommandContext) => string[] | null;

export const commandOrder = [
  "help",
  "about",
  "experience",
  "work",
  "posora",
  "stack",
  "leadership",
  "delivery",
  "contact",
];

const descriptions: Record<string, string> = {
  help: "show available commands",
  about: "a short introduction",
  experience: "career progression",
  work: "selected delivery work",
  contact: "ways to reach me",
  leadership: "how I lead delivery teams",
  posora: "the product I'm building",
  stack: "the technology stack",
  delivery: "delivery layers and practice",
};

export const commands: Record<string, CommandHandler> = {
  help: () => [
    "Available commands:",
    "",
    ...commandOrder.map((cmd) => `  ${cmd.padEnd(12)} — ${descriptions[cmd]}`),
    "",
    "Choose a command button below, or type one here.",
  ],

  about: () => [
    `${siteConfig.name} — Technical delivery / product / engineering`,
    "",
    "Technically fluent delivery leader with 7+ years across SaaS,",
    "marketplace, and e-commerce software.",
    "",
    `Based in ${siteConfig.location}. Open to Germany / EU opportunities.`,
    "Started in web development; now leads teams of 8–12 from ambiguous",
    "requirements through estimation, engineering, release, and production.",
  ],

  work: () =>
    projects.flatMap((project) => [
      `${project.name} — ${project.category}`,
      `  role:    ${project.role}`,
      `  problem: ${project.caseStudy.problem}`,
      `  outcome: ${project.caseStudy.outcome}`,
      "",
    ]),

  experience: () =>
    journeyMilestones.map((m) => `${m.year}  ${m.title}`),

  contact: () => [
    "Let's talk:",
    `  email     ${siteConfig.email}`,
    `  phone     ${siteConfig.phone}`,
    `  linkedin  ${siteConfig.linkedin}`,
    `  github    ${siteConfig.github}`,
  ],

  leadership: () => [
    "I lead the work between roadmap and production:",
    "  clarify scope → map dependencies → surface trade-offs → coordinate release",
  ],

  posora: (args, ctx) => {
    if (args[0] === "--demo") {
      ctx.openDemo();
      return ["Opening Posora product preview..."];
    }
    return [
      "Posora — restaurant operating system",
      "",
      `status: ${posoraDetails.status}`,
      `vision: ${posoraDetails.vision}`,
      `stack:  ${posoraDetails.technology.join(", ")}`,
      "",
      "Try: posora --demo",
    ];
  },

  stack: () => [
    "Technology stack:",
    "",
    ...toolboxCategories.map((cat) => `  ${cat.label.padEnd(14)} ${cat.items.slice(0, 4).join(", ")}...`),
  ],

  delivery: () => [
    "stakeholder     requests, priorities, constraints",
    "governance      risks, scope, roadmap, reporting",
    "delivery        estimates, sequencing, releases",
    "engineering     web, mobile, backend, QA",
    "infrastructure  cloud, CI/CD, deployments",
  ],

  clear: (_args, ctx) => {
    ctx.clear();
    return null;
  },

  coffee: () => ["Current caffeine level: Optimal ☕"],

  matrix: (_args, ctx) => {
    ctx.toggleMatrix();
    return ["Wake up, Neo...", "(type 'matrix' again to exit)"];
  },

  whoami: () => ["guest@portfolio — but you already knew that."],

  sudo: (args, ctx) => {
    const joined = args.join(" ").toLowerCase();
    if (joined === "hire dharitri") {
      ctx.fireConfetti();
      return ["Permission granted.", "Great choice — let's build something amazing together. 🎉"];
    }
    return ["Nice try. This terminal doesn't need sudo — just good ideas."];
  },
};

export function runCommand(input: string, ctx: CommandContext): string[] | null {
  const trimmed = input.trim();
  if (!trimmed) return [];

  const [cmd, ...args] = trimmed.split(/\s+/);
  const handler = commands[cmd.toLowerCase()];

  if (!handler) {
    return [`command not found: ${cmd}`, "Type 'help' to see available commands."];
  }

  return handler(args, ctx);
}
