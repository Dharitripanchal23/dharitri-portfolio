import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sections } from "@/data/sections";

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
          <Eyebrow index={sections.posora.index}>{sections.posora.label}</Eyebrow>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-8 max-w-4xl">
            <h2 className="display display-lg text-text">
              A cloud-native restaurant operating system built around one
              source of operational truth<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              Restaurant work is fragmented across orders, kitchen, inventory,
              billing, customers, staff, reservations, and reporting. The
              harder problem is that each area creates data the others cannot
              easily act on.
            </p>
          </div>
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
          <div className="mt-6 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.18em] sm:flex-row sm:items-center">
            <span className="text-muted">Eight systems. Zero shared state.</span>
            <span className="text-accent" aria-hidden>→</span>
            <span className="text-text">One connected operational layer.</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12 border-l-2 border-accent pl-6">
            <p className="text-xl font-medium leading-relaxed text-text sm:text-2xl">
              We started by connecting the operational workflows. Then we built
              intelligence on top of that data.
            </p>
            <p className="display display-md mt-5 text-accent">
              That&apos;s what Posora AI is for.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
