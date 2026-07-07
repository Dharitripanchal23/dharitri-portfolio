import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { currentFocusItems } from "@/data/impact";

export function CurrentFocus() {
  return (
    <section id="current-focus" className="section-pad relative border-t border-border" aria-label="Current focus">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealOnScroll>
              <Eyebrow index="11" rule={false}>
                Right Now
              </Eyebrow>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="display display-lg mt-6 text-text">
                Current
                <br />
                focus<span className="text-accent">.</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-8">
            <RevealOnScroll delay={0.15}>
              <div className="tech-label mb-0 border-b border-border pb-3 text-faint">
                Active threads / {new Date().getFullYear()}
              </div>
              <ul className="flex flex-col">
                {currentFocusItems.map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:bg-surface"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium text-text sm:text-lg">{item}</span>
                    </span>
                    <span className="tech-label hidden text-faint sm:block">active</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 font-mono text-[11px] text-faint">
                <span className="animate-blink text-accent" aria-hidden>
                  ▍
                </span>{" "}
                register updates as priorities shift
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
