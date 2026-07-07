import { cn } from "@/lib/utils";

/**
 * Mono engineering-index marker: `01 / MISSION ————————`
 * Replaces the old pill badge with a documentation-style label.
 */
export function Eyebrow({
  index,
  children,
  className,
  rule = true,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  rule?: boolean;
}) {
  return (
    <div className={cn("flex w-full items-center gap-4", className)}>
      <span className="tech-label flex shrink-0 items-center gap-2 whitespace-nowrap">
        {index && <span className="text-accent">{index}</span>}
        {index && <span aria-hidden>/</span>}
        <span>{children}</span>
      </span>
      {rule && <span className="rule flex-1" aria-hidden />}
    </div>
  );
}
