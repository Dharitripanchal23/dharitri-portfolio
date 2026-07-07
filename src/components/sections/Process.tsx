import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="section-pad relative border-t border-border" aria-label="Delivery process">
      <Container>
        <SectionHeading
          index="09"
          eyebrow="Delivery Process"
          title={
            <>
              How a requirement becomes
              <br />
              production software.
            </>
          }
          description="The same Agile delivery framework, every engagement — because consistency is what makes outcomes predictable."
          className="mb-20"
        />

        <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={(index % 3) * 0.06}>
              <div className="group flex h-full flex-col gap-10 border-b border-r border-border p-8 transition-colors hover:bg-surface">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-medium text-faint transition-colors group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < processSteps.length - 1 && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint" aria-hidden>
                      → {String(index + 2).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
