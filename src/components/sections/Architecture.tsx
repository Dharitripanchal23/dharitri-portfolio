import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { architecturePrinciples, architectureLayers } from "@/data/architecture";

export function Architecture() {
  return (
    <section id="architecture" className="section-pad relative border-t border-border" aria-label="Delivery thinking">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Delivery Thinking"
          title={
            <>
              Governance,
              <br />
              by design.
            </>
          }
          description="Every project I lead starts with stakeholder alignment and risk visibility — engineering execution follows deliberate delivery decisions."
          className="mb-20"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* System stack diagram — flat, technical */}
          <RevealOnScroll className="lg:col-span-5">
            <div className="border border-border">
              <div className="tech-label border-b border-border bg-surface px-5 py-3 text-faint">
                fig. 01 — delivery layers
              </div>
              <div className="flex flex-col p-5">
                {architectureLayers.map((layer, index) => (
                  <div key={layer.label}>
                    <div className="flex items-center justify-between gap-4 border border-border-strong px-4 py-3.5 transition-colors hover:border-accent">
                      <div>
                        <div className="text-sm font-medium text-text">{layer.label}</div>
                        <div className="font-mono text-[11px] text-muted">{layer.detail}</div>
                      </div>
                      <span className="font-mono text-[11px] text-faint">
                        L{index}
                      </span>
                    </div>
                    {index < architectureLayers.length - 1 && (
                      <div className="mx-auto h-4 w-px bg-border-strong" aria-hidden />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Principles — numbered documentation rows */}
          <div className="lg:col-span-7">
            <div className="tech-label mb-0 border-b border-border pb-3 text-faint">
              Operating principles
            </div>
            {architecturePrinciples.map((principle, index) => (
              <RevealOnScroll key={principle.title} delay={index * 0.05}>
                <div className="group grid grid-cols-12 gap-4 border-b border-border py-6 transition-colors hover:bg-surface">
                  <span className="col-span-2 font-mono text-sm text-faint transition-colors group-hover:text-accent sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="col-span-10 text-base font-semibold text-text sm:col-span-4">
                    {principle.title}
                  </h3>
                  <p className="col-span-10 col-start-3 text-sm leading-relaxed text-muted sm:col-span-7 sm:col-start-auto">
                    {principle.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
