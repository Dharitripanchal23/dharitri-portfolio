import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { leadershipCards } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="section-pad relative border-t border-border" aria-label="Leadership">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Leadership"
          title={
            <>
              Leadership isn&apos;t a title.
              <br />
              It&apos;s decisions, made daily.
            </>
          }
          description="Great delivery leaders operate at the intersection of people, process, and business outcomes — here's what that looks like day to day."
          className="mb-12"
        />

        <div className="grid grid-cols-1 border-t border-border md:grid-cols-3 md:divide-x md:divide-border">
          {leadershipCards.map((card, cardIndex) => (
            <RevealOnScroll
              key={card.title}
              delay={cardIndex * 0.08}
              className="flex flex-col border-b border-border py-10 md:border-b-0 md:px-10 md:first:pl-0 md:last:pr-0"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                {String(cardIndex + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-text">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
              <ul className="mt-8 flex flex-col">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-t border-border py-2.5 text-sm text-text/90"
                  >
                    <span className="font-mono text-[10px] text-faint">
                      {String(cardIndex + 1)}.{itemIndex + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
