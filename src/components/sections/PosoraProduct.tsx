import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { posoraDetails } from "@/data/posora";
import { PosoraDashboardMockup } from "./PosoraDashboardMockup";
import { ArrowUpRight } from "lucide-react";

export function PosoraProduct() {
  const productDecision = posoraDetails.evidence.find(
    (item) => item.label === "Product decision"
  );
  const technicalDecision = posoraDetails.evidence.find(
    (item) => item.label === "Technical decision"
  );

  return (
    <section className="relative pb-28 sm:pb-40" aria-label="Posora product details">
      <Container>
        <RevealOnScroll>
          <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col gap-1 py-4 sm:pr-6">
              <span className="tech-label text-faint">Status</span>
              <span className="flex items-center gap-2 font-mono text-sm text-text">
                <span className="h-1.5 w-1.5 bg-success" aria-hidden />
                {posoraDetails.status}
              </span>
            </div>
            <div className="flex flex-col gap-1 py-4 sm:px-6">
              <span className="tech-label text-faint">Vision</span>
              <span className="font-mono text-sm text-text">{posoraDetails.vision}</span>
            </div>
            <div className="flex flex-col gap-1 py-4 sm:pl-6">
              <span className="tech-label text-faint">Architecture</span>
              <span className="font-mono text-sm text-text">Multi-tenant / Cloud-native</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <div className="border-t border-border pt-6">
                <div className="tech-label text-accent">What I own</div>
                <p className="mt-4 text-xl font-medium leading-relaxed text-text">
                  Product definition, system architecture, UX decisions, and
                  the end-to-end build—from core operational workflows to
                  AI-assisted features and automation.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Posora is evidence of ownership beyond client delivery: the
                  problem, product boundaries, technical trade-offs, and build
                  decisions are mine.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={posoraDetails.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-text bg-text px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-background transition-colors hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    See Posora live <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                  <a
                    href={posoraDetails.aiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border-strong px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-text transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    See the AI suite <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.15} className="lg:col-span-7">
            <PosoraDashboardMockup />
            <p className="tech-label mt-4 text-faint">
              fig. 02 — product interface / illustrative operational data
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-24 border-y border-border py-8 sm:mt-32">
            <div className="tech-label text-accent">Posora AI / decision layer</div>
            <h3 className="display display-lg mt-5 text-text">
              Then we made the system smart.
            </h3>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
              Operational data flows into Posora AI, which turns it into a
              decision an owner can act on—not another dashboard to inspect.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="border border-border px-3 py-2 text-muted">Operational data</span>
              <span className="text-accent" aria-hidden>→</span>
              <span className="border border-accent px-3 py-2 text-text">Posora AI</span>
              <span className="text-accent" aria-hidden>→</span>
              <span className="border border-border px-3 py-2 text-muted">Owner decision</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
          {posoraDetails.aiModules.map((module, index) => (
            <RevealOnScroll
              key={module.title}
              delay={(index % 2) * 0.08}
              className="border-b border-r border-border"
            >
              <article className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-faint">
                    AI_{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tech-label text-accent">Live</span>
                </div>
                <h4 className="mt-8 text-xl font-semibold text-text">{module.title}</h4>
                <p className="mt-3 font-mono text-xs leading-relaxed text-accent">
                  {module.signal}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted">{module.description}</p>
                <p className="mt-auto border-t border-border pt-6 text-sm font-medium leading-relaxed text-text">
                  {module.principle}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[productDecision, technicalDecision].map(
            (decision) =>
              decision && (
                <RevealOnScroll key={decision.label}>
                  <article className="h-full border border-border bg-surface p-6 sm:p-8">
                    <div className="tech-label text-accent">{decision.label}</div>
                    <p className="mt-6 text-lg font-medium leading-relaxed text-text">
                      {decision.value}
                    </p>
                  </article>
                </RevealOnScroll>
              )
          )}
        </div>

        <RevealOnScroll>
          <div className="mt-16">
            <div className="tech-label mb-4 text-faint">Technology spec</div>
            <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
              {posoraDetails.technology.map((tech) => (
                <div
                  key={tech}
                  className="border-b border-r border-border px-4 py-3 font-mono text-xs text-text/90"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
