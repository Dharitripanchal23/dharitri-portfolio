import { cn } from "@/lib/utils";

/**
 * Static blueprint field — fine grid, corner registration marks,
 * one accent datum point. Structure instead of decoration.
 */
export function NetworkBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      <div className="grid-field absolute inset-0" />

      {/* Registration marks */}
      <span className="crosshair absolute left-[12%] top-[22%]" />
      <span className="crosshair absolute right-[18%] top-[38%]" />
      <span className="crosshair absolute left-[28%] bottom-[18%]" />
      <span className="crosshair absolute right-[10%] bottom-[30%]" />

      {/* Single accent datum */}
      <span className="absolute right-[18%] top-[38%] ml-[-1px] mt-[-1px] block h-[3px] w-[3px] bg-accent" />
    </div>
  );
}
