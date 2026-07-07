import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { philosophyTraits } from "@/data/leadership";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-pad relative border-t border-border"
      aria-label="Engineering philosophy"
    >
      <Container>
        <RevealOnScroll>
          <p className="display display-lg text-text">
            Good delivery isn&apos;t
            <br />
            measured by ceremonies.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="display display-lg mt-4 text-muted sm:mt-6 sm:text-right">
            It&apos;s measured by
            <br />
            outcomes delivered<span className="text-accent">.</span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-border py-4 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:mt-12">
            {philosophyTraits.map((trait, index) => (
              <span key={trait} className="flex items-center gap-4">
                {index > 0 && (
                  <span className="text-faint" aria-hidden>
                    /
                  </span>
                )}
                <span>{trait}</span>
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
