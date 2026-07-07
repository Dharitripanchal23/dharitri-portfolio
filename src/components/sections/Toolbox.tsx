"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { toolboxCategories } from "@/data/toolbox";
import { cn } from "@/lib/utils";

export function Toolbox() {
  const [active, setActive] = useState(0);
  const category = toolboxCategories[active];

  return (
    <section id="toolbox" className="section-pad relative border-t border-border" aria-label="Engineering toolbox">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="Engineering Toolbox"
          title="The stack behind the systems."
          description="Tools chosen for reliability, not trend — each one earning its place through production use."
          className="mb-16"
        />

        <RevealOnScroll>
          <div className="overflow-hidden border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                stack.config.ts
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                read-only
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
              <div
                className="flex flex-row overflow-x-auto border-b border-border sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-r"
                role="tablist"
                aria-label="Stack categories"
              >
                {toolboxCategories.map((item, index) => (
                  <button
                    key={item.label}
                    role="tab"
                    aria-selected={active === index}
                    onClick={() => setActive(index)}
                    className={cn(
                      "shrink-0 border-l-2 px-4 py-3 text-left font-mono text-xs transition-colors sm:shrink",
                      active === index
                        ? "border-accent bg-surface-raised text-text"
                        : "border-transparent text-muted hover:text-text"
                    )}
                  >
                    {item.label}.ts
                  </button>
                ))}
              </div>

              <div className="p-6 font-mono text-sm sm:p-8">
                <div className="mb-4 text-faint">{category.comment}</div>
                <div className="text-muted">
                  export const <span className="text-accent">{category.label}</span> = [
                </div>
                <div className="flex flex-col gap-1.5 py-3 pl-5">
                  {category.items.map((item, idx) => (
                    <div key={item} className="flex items-baseline gap-4 text-text">
                      <span className="text-[10px] text-faint" aria-hidden>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      &quot;{item}&quot;
                      <span className="text-faint">{idx < category.items.length - 1 ? "," : ""}</span>
                    </div>
                  ))}
                </div>
                <div className="text-muted">];</div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
