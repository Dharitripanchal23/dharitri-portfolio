import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site";

const fields = [
  "SaaS platforms",
  "Marketplace & e-commerce",
  "Agile / Scrum delivery",
  "International stakeholders",
  "Project governance",
  "Cross-functional leadership",
];

export function WhoIAm() {
  return (
    <section id="who-i-am" className="section-pad relative border-t border-border" aria-label="Who I am">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <RevealOnScroll>
                <Eyebrow index="02" rule={false}>
                  Who I Am
                </Eyebrow>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="display mt-6 text-3xl text-text sm:text-4xl">
                  Delivery is the job.
                </h2>
              </RevealOnScroll>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-6">
            <RevealOnScroll>
              <p className="text-xl font-medium leading-relaxed text-text sm:text-2xl">
                Some project managers manage tasks. I manage outcomes —
                coordinating cross-functional teams, aligning C-level
                stakeholders, and translating business objectives into
                engineering execution.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-base leading-relaxed text-muted">
                Over {siteConfig.yearsExperience} years I&apos;ve owned delivery
                across SaaS, marketplace, and e-commerce platforms for clients
                in the US and Middle East — while remaining technically fluent
                enough to make credible architecture and integration decisions.
                Currently relocating to Germany under the Chancenkarte programme.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-3">
            <RevealOnScroll delay={0.15}>
              <div className="tech-label mb-4 text-faint">
                Field record / {siteConfig.yearsExperience} yrs
              </div>
              <ul className="flex flex-col">
                {fields.map((field, index) => (
                  <li
                    key={field}
                    className="flex items-baseline gap-3 border-t border-border py-3 last:border-b"
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
