"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>("mustadam");
  const orderedProjects = [...projects].sort(
    (a, b) =>
      ["mustadam", "skriti", "remote-personnel", "flowers-cakes-online"].indexOf(a.slug) -
      ["mustadam", "skriti", "remote-personnel", "flowers-cakes-online"].indexOf(b.slug)
  );

  return (
    <section id="projects" className="section-pad relative border-t border-border" aria-label="Featured projects">
      <Container>
        <SectionHeading
          index={sections.work.index}
          eyebrow={sections.work.label}
          title={
            <>
              Projects with
              <br />
              an audit trail.
            </>
          }
          description="Selected client work, structured around what I owned, the difficult part, the decision, and the outcome. Posora follows as the deeper product case study."
          className="mb-12"
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {orderedProjects.map((project, index) => {
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
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          Published case study
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      )}
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
                      <button
                        type="button"
                        aria-expanded={expandedProject === project.slug}
                        aria-controls={`${project.slug}-case-study`}
                        onClick={() =>
                          setExpandedProject((current) =>
                            current === project.slug ? null : project.slug
                          )
                        }
                        className="mt-5 w-full border border-border-strong px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.14em] text-text transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {expandedProject === project.slug ? "Close case study ↑" : "View case study →"}
                      </button>
                      </div>
                    </div>
                  </div>
                {expandedProject === project.slug && (
                  <div
                    id={`${project.slug}-case-study`}
                    className="relative mt-8 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2"
                  >
                    {[
                      ["The difficult part", project.caseStudy.problem],
                      ["Context", project.caseStudy.context],
                      ["What I owned", project.caseStudy.accountability],
                      ["Decision", project.caseStudy.decision],
                      ["Outcome", project.caseStudy.outcome],
                    ].filter((entry): entry is [string, string] => Boolean(entry[1])).map(([label, content]) => (
                      <div key={label} className="border-b border-r border-border p-5">
                        <h4 className="tech-label text-faint">{label}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{content}</p>
                      </div>
                    ))}
                  </div>
                )}
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
