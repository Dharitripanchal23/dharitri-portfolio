import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site";
import { sections } from "@/data/sections";

const fields = [
  "I challenge estimates when the technical reality does not support them.",
  "I turn vague requirements into something engineers can actually build.",
  "I care about the decision behind a feature, not only whether its ticket closed.",
  "I treat compliance, integrations, dependencies, and operational risk as product delivery.",
];

export function WhoIAm() {
  return (
    <section id="who-i-am" className="section-pad relative border-t border-border" aria-label="Who I am">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <RevealOnScroll>
                <Eyebrow index={sections.identity.index} rule={false}>
                  {sections.identity.label}
                </Eyebrow>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="display mt-6 text-3xl text-text sm:text-4xl">
                  Judgment is the job.
                </h2>
              </RevealOnScroll>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-6">
            <RevealOnScroll>
              <p className="text-xl font-medium leading-relaxed text-text sm:text-2xl">
                I started in web development and moved into delivery leadership.
                That background helps me translate between the person asking for
                a feature and the engineers deciding how it can safely ship.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-base leading-relaxed text-muted">
                Over {siteConfig.yearsExperience}+ years, I&apos;ve worked across
                SaaS, marketplaces, regulated e-commerce, and client-facing
                products. I am comfortable where scope, architecture,
                integrations, compliance, and release risk meet.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-3">
            <RevealOnScroll delay={0.15}>
              <div className="tech-label mb-4 text-faint">
                What I actually do
              </div>
              <ul className="flex flex-col">
                {fields.map((field, index) => (
                  <li
                    key={field}
                    className="flex items-start gap-3 border-t border-border py-3 last:border-b"
                  >
                    <span className="font-mono text-[10px] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-text">{field}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
