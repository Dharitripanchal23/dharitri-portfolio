export interface ToolboxCategory {
  label: string;
  comment: string;
  items: string[];
}

export const toolboxCategories: ToolboxCategory[] = [
  {
    label: "backend",
    comment: "// Server-side & APIs",
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "TypeScript",
      "AdonisJS",
      "CodeIgniter",
      "REST APIs",
      "Third-Party Integrations",
      "Payment Gateways",
    ],
  },
  {
    label: "database",
    comment: "// Data layer",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "cloud",
    comment: "// Infrastructure & deployment",
    items: [
      "AWS",
      "Alibaba Cloud",
      "Git",
      "GitLab CI/CD",
      "CI/CD Pipelines",
      "Mobile Coordination (iOS/Android)",
    ],
  },
  {
    label: "ai-tools",
    comment: "// AI-augmented delivery",
    items: [
      "Cursor AI",
      "GitHub Copilot",
      "ChatGPT / OpenAI",
      "Claude (Anthropic)",
      "Lovable AI",
      "Prompt Engineering",
    ],
  },
];
