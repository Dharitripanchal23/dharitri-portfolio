import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Mission() {
  return (
    <section id="mission" className="section-pad relative" aria-label="Mission">
      <Container>
        <RevealOnScroll>
          <Eyebrow index="01">Mission</Eyebrow>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-9">
            <p className="text-balance text-xl font-medium leading-[1.3] tracking-tight text-text sm:text-3xl md:text-4xl">
              Turn ambiguous business requirements into{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-8">
                delivery plans that hold
              </span>
              , teams that ship with confidence, and products that{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-8">
                launch on schedule
              </span>
              .
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="flex items-end lg:col-span-3">
            <p className="border-l border-border pl-5 text-sm leading-relaxed text-muted sm:text-base">
              Not by adding more process — by making better decisions earlier,
              with governance, stakeholder alignment, and business outcomes
              always in view.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
