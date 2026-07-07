import { cn } from "@/lib/utils";

/**
 * Flat industrial panel — 1px graphite border, sharp corners,
 * hover shifts the border, nothing glows.
 */
export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-border bg-surface p-8 transition-colors duration-300 hover:border-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
}
