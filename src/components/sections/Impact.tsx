import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { impactStats } from "@/data/impact";
import { sections } from "@/data/sections";

function StatItem({ stat, index }: { stat: (typeof impactStats)[number]; index: number }) {
  return (
    <div className="group flex min-h-52 flex-col justify-between gap-6 border-b border-r border-border p-6 transition-colors hover:bg-surface sm:p-8">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        m_{String(index + 1).padStart(2, "0")}
      </span>
      <div className="tabular font-mono text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        {stat.value}
      </div>
      <div>
        <div className="tech-label text-muted">{stat.label}</div>
        <p className="mt-1 text-sm text-muted">{stat.context}</p>
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="signal" className="section-pad relative border-t border-border" aria-label="Evidence at a glance">
      <Container>
        <SectionHeading
          index={sections.signal.index}
          eyebrow={sections.signal.label}
          title="Evidence, not decoration."
          description="A short readout of the delivery scope behind the title. Every number has a job."
          className="mb-16"
        />

        <RevealOnScroll>
          <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
