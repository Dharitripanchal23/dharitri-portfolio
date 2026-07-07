import { siteConfig } from "@/data/site";
import { journeyMilestones } from "@/data/journey";
import { projects } from "@/data/projects";
import { toolboxCategories } from "@/data/toolbox";
import { leadershipCards } from "@/data/leadership";
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
  "projects",
  "skills",
  "timeline",
  "resume",
  "contact",
  "leadership",
  "posora",
  "stack",
  "experience",
  "hire",
];

const descriptions: Record<string, string> = {
  help: "show available commands",
  about: "a short introduction",
  projects: "selected work & case studies",
  skills: "technical skill set",
  timeline: "engineering journey",
  resume: "download the resume",
  contact: "ways to reach me",
  leadership: "how I lead delivery teams",
  posora: "the product I'm building",
  stack: "the technology stack",
  experience: "years & scope of experience",
  hire: "thinking about working together?",
};

export const commands: Record<string, CommandHandler> = {
  help: () => [
    "Available commands:",
    "",
    ...commandOrder.map((cmd) => `  ${cmd.padEnd(12)} — ${descriptions[cmd]}`),
    "",
    "Tip: try something unexpected. Not everything is in this list.",
  ],

  about: () => [
    `${siteConfig.name} — ${siteConfig.role}`,
    "",
    "IT Project Manager and Delivery Manager with 7+ years of end-to-end",
    "project ownership across SaaS, marketplace, and e-commerce.",
    "",
    `Based in ${siteConfig.location}. ${siteConfig.relocation}.`,
    "Coordinating teams of 8–12, managing US & Middle East clients,",
    "and driving Agile delivery from discovery to production release.",
  ],

  projects: () =>
    projects.flatMap((project) => [
      `${project.name} — ${project.category}`,
      `  role: ${project.role}`,
      `  focus: ${project.responsibilities.join(", ")}`,
      "",
    ]),

  skills: () =>
    toolboxCategories.flatMap((cat) => [`${cat.label}:`, `  ${cat.items.join(", ")}`, ""]),

  timeline: () =>
    journeyMilestones.map((m) => `${m.year}  ${m.title}`),

  resume: (_args, ctx) => {
    ctx.downloadResume();
    return ["Downloading resume...", "If nothing happens, check your browser's download bar."];
  },

  contact: () => [
    "Let's talk:",
    `  email     ${siteConfig.email}`,
    `  phone     ${siteConfig.phone}`,
    `  linkedin  ${siteConfig.linkedin}`,
    `  github    ${siteConfig.github}`,
  ],

  leadership: () =>
    leadershipCards.flatMap((card) => [`${card.title}:`, `  ${card.items.join(", ")}`, ""]),

  posora: (args, ctx) => {
    if (args[0] === "--demo") {
      ctx.openDemo();
      return ["Opening Posora product preview..."];
    }
    return [
      "Posora — Cloud-native restaurant operating system",
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

  experience: () => [
    `${siteConfig.yearsExperience}+ years of delivery & project management`,
    "Teams of 8–12 across backend, frontend, QA, and mobile",
    "International clients across the US and Middle East",
    "Currently: IT Project Manager / Technical Lead at Excellent Webworld",
    `Relocation: ${siteConfig.relocation}`,
  ],

  hire: () => ["Great choice.", "Let's build something amazing together.", "Type 'contact' to reach out."],

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
