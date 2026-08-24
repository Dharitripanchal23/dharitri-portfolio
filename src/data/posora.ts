export const posoraStory = [
  "Restaurants struggle because their operations become fragmented.",
  "Orders. Kitchen. Inventory. Billing.",
  "Customers. Reports. Staff. Reservations.",
  "Everything lives in different systems.",
];

export const posoraStatement =
  "Posora brings everything together into one cloud-native restaurant operating system.";

export const posoraDetails = {
  status: "Publicly live · actively building",
  vision: "One source of operational truth.",
  liveUrl: "https://posora.co/",
  aiUrl: "https://posora.co/#ai",
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
        "We chose to make AI operate on Posora's operational data rather than build a generic restaurant chatbot. The product should not merely answer questions; it should understand the restaurant's actual numbers and help the owner make a decision.",
    },
    {
      label: "Technical decision",
      value:
        "Orders, recipes, inventory, margins, and demand history remain authoritative. AI is the reasoning and interface layer over that business data—not the source of truth.",
    },
    {
      label: "Current status",
      value:
        "Publicly live and actively building. Core restaurant operations and the AI suite are available while reliability, usability, and real-world workflows continue to be refined.",
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
  aiModules: [
    {
      title: "Owner Copilot",
      signal: "What should I focus on today?",
      description:
        "Daily briefings, prioritized actions, and conversational analysis grounded in the restaurant's own revenue, stock, margins, orders, and operating data.",
      principle: "Not a generic chatbot. Answers start with the restaurant's actual numbers.",
    },
    {
      title: "Demand & Staffing Forecast",
      signal: "Prepare on Tuesday. Do not react on Friday.",
      description:
        "A 14-day prediction of covers, revenue, and staffing risk using POS, QR, and delivery history.",
      principle: "Turns demand history into a forward staffing and preparation decision.",
    },
    {
      title: "Food Cost AI",
      signal: "A same-day signal, not another monthly report.",
      description:
        "Monitors food-cost and margin movement, then surfaces recommendations around pricing, recipes, and bundles.",
      principle: "Connects a margin change to an action while it can still affect the day.",
    },
    {
      title: "AI Inventory Predictions",
      signal: "Predicted demand × recipes = purchasing requirement.",
      description:
        "Predicts tomorrow's dish-level demand and translates it into an operational purchase list.",
      principle: "Prediction is only useful when it changes what the restaurant buys or prepares.",
    },
  ],
};
