const sidebarItems = ["Overview", "Orders", "Kitchen", "Inventory", "Billing", "Reservations", "Reports"];

const orderRows = [
  { table: "Table 04", item: "2× Margherita, 1× Iced Latte", status: "Preparing" },
  { table: "Table 12", item: "1× Ribeye, 1× Sparkling Water", status: "Ready" },
  { table: "Table 07", item: "3× Set Menu B", status: "Served" },
  { table: "Online #331", item: "1× Family Combo", status: "New" },
];

export function PosoraDashboardMockup() {
  return (
    <div className="overflow-hidden border border-border bg-surface">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          posora_os / dashboard
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" aria-hidden />
          Live
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] font-mono text-sm">
        {/* Sidebar */}
        <div className="hidden flex-col border-r border-border sm:flex">
          {sidebarItems.map((item, index) => (
            <div
              key={item}
              className={
                index === 1
                  ? "border-l-2 border-accent bg-surface-raised px-4 py-2.5 text-xs text-text"
                  : "border-l-2 border-transparent px-4 py-2.5 text-xs text-muted"
              }
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main pane */}
        <div className="flex flex-col gap-4 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-faint">Live orders</div>
              <div className="mt-1 text-base font-semibold text-text">4 active tickets</div>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-border border-y border-border">
            {orderRows.map((row) => (
              <div key={row.table} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <div className="text-xs text-text">{row.table}</div>
                  <div className="truncate text-[11px] text-muted">{row.item}</div>
                </div>
                <span className="shrink-0 border border-border-strong px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted">
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 divide-x divide-border border border-border">
            {[
              { label: "Revenue", value: "₹48,230" },
              { label: "Tables", value: "12 / 18" },
              { label: "Avg ticket", value: "8m 40s" },
            ].map((stat) => (
              <div key={stat.label} className="p-3">
                <div className="text-[10px] uppercase tracking-[0.14em] text-faint">{stat.label}</div>
                <div className="tabular mt-1 text-sm font-semibold text-text">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
