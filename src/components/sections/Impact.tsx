"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { impactStats } from "@/data/impact";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ stat, index }: { stat: (typeof impactStats)[number]; index: number }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="group flex flex-col gap-6 border-b border-r border-border p-8 transition-colors hover:bg-surface">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        m_{String(index + 1).padStart(2, "0")}
      </span>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="tabular font-mono text-4xl font-semibold tracking-tight text-text sm:text-5xl"
      >
        {stat.isNumeric ? (
          <>
            {value}
            <span className="text-accent">{stat.suffix}</span>
          </>
        ) : (
          <span className="uppercase">{stat.displayValue}</span>
        )}
      </div>
      <div className="tech-label text-muted">{stat.label}</div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="achievements" className="section-pad relative border-t border-border" aria-label="Achievements">
      <Container>
        <SectionHeading
          index="10"
          eyebrow="Telemetry"
          title="Impact, measured."
          className="mb-16"
        />

        <RevealOnScroll>
          <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
