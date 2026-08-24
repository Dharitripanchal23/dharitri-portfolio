import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sections } from "@/data/sections";

export function Mission() {
  return (
    <section id="mission" className="section-pad relative" aria-label="Mission">
      <Container>
        <RevealOnScroll>
          <Eyebrow index={sections.mission.index}>{sections.mission.label}</Eyebrow>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-10">
            <p className="text-balance text-xl font-medium leading-[1.35] tracking-tight text-text sm:text-3xl">
              My job sits between &quot;the client wants X&quot; and &quot;the
              engineers can actually ship X by the date we promised.&quot;
              I close that gap with{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-8">
                clear scope, honest estimates, technical judgment
              </span>
              , and stakeholders who are never surprised at release.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
