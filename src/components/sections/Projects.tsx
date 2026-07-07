import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative border-t border-border" aria-label="Featured projects">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Featured Work"
          title={
            <>
              Projects delivered.
              <br />
              Outcomes measured.
            </>
          }
          description="Platforms where I owned the delivery, the governance, and the stakeholder relationship — from discovery through production release."
          className="mb-12"
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <RevealOnScroll key={project.slug} y={36}>
                <article className="relative">
                  {/* Giant background index numeral */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-10 select-none font-mono text-[clamp(4rem,12vw,8rem)] font-semibold leading-none text-surface-raised sm:-top-12",
                      reversed ? "right-0" : "left-0"
                    )}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={cn(
                      "relative grid grid-cols-1 gap-12 pt-10 lg:grid-cols-12",
                      reversed && "lg:text-left"
                    )}
                  >
                    {/* Title block */}
                    <div
                      className={cn(
                        "flex flex-col gap-6 lg:col-span-7",
                        reversed && "lg:order-2 lg:col-start-6"
                      )}
                    >
                      <div className="tech-label text-accent">{project.category}</div>
                      <h3 className="display display-md text-text">
                        {project.name}
                      </h3>
                      <p className="max-w-lg text-base leading-relaxed text-muted">
                        {project.description}
                      </p>
                    </div>

                    {/* Spec table */}
                    <div
                      className={cn(
                        "lg:col-span-5",
                        reversed && "lg:order-1 lg:col-start-1"
                      )}
                    >
                      <div className="border-t border-border">
                        <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                          <span className="tech-label text-faint">Role</span>
                          <span className="font-mono text-sm text-text">{project.role}</span>
                        </div>
                        {project.teamSize && (
                          <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                            <span className="tech-label text-faint">Team</span>
                            <span className="font-mono text-sm text-text">{project.teamSize}</span>
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                          <span className="tech-label text-faint">Scope</span>
                          <div className="flex flex-col gap-1.5">
                            {project.responsibilities.map((item) => (
                              <span key={item} className="font-mono text-sm text-text/90">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
