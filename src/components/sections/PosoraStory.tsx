import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";

const fragments = [
  "Orders",
  "Kitchen",
  "Inventory",
  "Billing",
  "Customers",
  "Reports",
  "Staff",
  "Reservations",
];

export function PosoraStory() {
  return (
    <section
      id="posora"
      className="section-pad relative border-t border-border"
      aria-label="Posora introduction"
    >
      <Container>
        <RevealOnScroll>
          <Eyebrow index="06">Flagship — Posora</Eyebrow>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-8 max-w-3xl text-xl font-medium leading-snug tracking-tight text-text sm:text-2xl">
            Restaurants struggle because their operations become fragmented.
          </p>
        </RevealOnScroll>

        {/* Fragmented systems — scattered mono labels */}
        <div className="mt-10 grid grid-cols-2 border-t border-l border-border sm:grid-cols-4">
          {fragments.map((fragment, index) => (
            <RevealOnScroll
              key={fragment}
              delay={0.1 + index * 0.06}
              className="border-b border-r border-border"
            >
              <div className="flex items-baseline justify-between px-5 py-6">
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-muted">
                  {fragment}
                </span>
                <span className="font-mono text-[10px] text-faint" aria-hidden>
                  sys_{String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Eight systems. Zero shared state.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="display display-lg mt-12 max-w-4xl text-text">
            Posora brings everything together into one cloud-native restaurant
            operating system<span className="text-accent">.</span>
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
