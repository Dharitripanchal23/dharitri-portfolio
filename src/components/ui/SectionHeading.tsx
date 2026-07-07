import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <RevealOnScroll className="w-full">
          <Eyebrow index={index} rule={align !== "center"}>
            {eyebrow}
          </Eyebrow>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.08}>
        <h2
          className={cn(
            "display display-lg text-balance text-text",
            align === "center" && "mx-auto max-w-4xl"
          )}
        >
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll delay={0.16}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
