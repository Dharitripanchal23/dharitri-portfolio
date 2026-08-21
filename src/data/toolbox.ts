export interface ToolboxCategory {
  label: string;
  comment: string;
  items: string[];
  relationship: string;
}

export const toolboxCategories: ToolboxCategory[] = [
  {
    label: "built-with",
    comment: "// Technologies I have built with",
    relationship: "Built with",
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
    label: "data",
    comment: "// Data stores used in software delivery",
    relationship: "Worked with",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "delivery-systems",
    comment: "// Systems I lead and oversee in delivery",
    relationship: "Led / oversaw",
    items: [
      "AWS",
      "Alibaba Cloud",
      "Git",
      "GitLab CI/CD",
      "CI/CD Pipelines",
      "Mobile delivery coordination",
    ],
  },
  {
    label: "ai-assisted",
    comment: "// Tools explored in delivery workflows",
    relationship: "Worked with",
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
