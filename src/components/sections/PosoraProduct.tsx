import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { posoraDetails } from "@/data/posora";
import { PosoraDashboardMockup } from "./PosoraDashboardMockup";

export function PosoraProduct() {
  return (
    <section className="relative pb-28 sm:pb-40" aria-label="Posora product details">
      <Container>
        {/* Status strip */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col gap-1 py-4 sm:pr-6">
              <span className="tech-label text-faint">Status</span>
              <span className="flex items-center gap-2 font-mono text-sm text-text">
                <span className="h-1.5 w-1.5 animate-pulse bg-accent" aria-hidden />
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

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left — spec + modules */}
          <div className="flex flex-col gap-14 lg:col-span-5">
            <RevealOnScroll>
              <div>
                <div className="tech-label mb-4 text-faint">Technology spec</div>
                <div className="grid grid-cols-2 border-t border-l border-border">
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

            <RevealOnScroll delay={0.1}>
              <div>
                <div className="tech-label mb-1 text-faint">Modules</div>
                {posoraDetails.modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="group grid grid-cols-12 gap-3 border-b border-border py-4 transition-colors hover:bg-surface"
                  >
                    <span className="col-span-1 font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-11 text-sm font-medium text-text sm:col-span-4">
                      {module.title}
                    </span>
                    <span className="col-span-11 col-start-2 text-sm leading-relaxed text-muted sm:col-span-7 sm:col-start-auto">
                      {module.description}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — OS mockup */}
          <RevealOnScroll delay={0.15} className="lg:sticky lg:top-28 lg:col-span-7">
            <PosoraDashboardMockup />
            <p className="tech-label mt-4 text-faint">
              fig. 02 — live order flow, kitchen to till
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
