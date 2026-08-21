export const posoraStory = [
  "Restaurants struggle because their operations become fragmented.",
  "Orders. Kitchen. Inventory. Billing.",
  "Customers. Reports. Staff. Reservations.",
  "Everything lives in different systems.",
];

export const posoraStatement =
  "Posora brings everything together into one cloud-native restaurant operating system.";

export const posoraDetails = {
  status: "Currently Building",
  vision: "Making restaurant operations effortless.",
  evidence: [
    {
      label: "Why",
      value:
        "Restaurant operations are fragmented across orders, kitchen workflows, inventory, billing, customers, staff, reservations, and reporting. Posora connects those workflows in one operating system instead of forcing teams across separate tools.",
    },
    {
      label: "What I own",
      value:
        "Product definition, system architecture, UX decisions, and the end-to-end build of a cloud-native restaurant operating system—from core workflows to AI-assisted features and automation.",
    },
    {
      label: "Product decision",
      value:
        "Designed for the complete restaurant workflow, not another POS that only records transactions. Ordering, kitchen operations, inventory, billing, customers, staff, reservations, and insights share useful operational context. AI-assisted workflows reduce manual work and make data actionable instead of acting as a standalone chatbot.",
    },
    {
      label: "Technical decision",
      value:
        "Built as a cloud-native, modular system so restaurant workflows can evolve independently while sharing a common data layer. The architecture is AI-ready: structured operational data and workflows give intelligent assistance, automated insights, and workflow support real business context—not isolated prompts.",
    },
    {
      label: "Current status",
      value:
        "Currently building and iterating. Core restaurant workflows are implemented; the focus is validating real-world workflows, improving reliability and usability, and integrating new AI-powered capabilities into a production-ready platform.",
    },
  ],
  technology: [
    "React 19",
    "TanStack Start",
    "Hono API",
    "TypeScript",
    "PostgreSQL",
    "Drizzle ORM",
    "Socket.io",
    "Multi-tenant Architecture",
  ],
  modules: [
    {
      title: "Orders",
      description: "Real-time order flow from table to kitchen to till, without a single missed ticket.",
    },
    {
      title: "Kitchen Display",
      description: "Live kitchen queues that keep every station in sync, automatically.",
    },
    {
      title: "Inventory",
      description: "Stock levels that update themselves as orders move, not after someone remembers to check.",
    },
    {
      title: "Billing & Payments",
      description: "Split bills, multiple payment modes, and reconciliation that just works.",
    },
    {
      title: "Reservations",
      description: "Table management and bookings that respect real-world restaurant chaos.",
    },
    {
      title: "Reports & Insights",
      description: "Ownership-level visibility into revenue, staff performance, and inventory trends.",
    },
  ],
};
