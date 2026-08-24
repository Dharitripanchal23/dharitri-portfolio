"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMilestones } from "@/data/journey";
import { sections } from "@/data/sections";

export function Journey() {
  return (
    <section id="journey" className="section-pad relative border-t border-border" aria-label="Career journey">
      <Container>
        <SectionHeading
          index={sections.journey.index}
          eyebrow={sections.journey.label}
          title={
            <>
              From writing
              <br />
              software to owning delivery.
            </>
          }
          description="Read it like a changelog: each version added a different kind of responsibility, from modules and APIs to delivery systems and product work."
          className="mb-20"
        />

        {/* Changelog table */}
        <div className="tech-label mb-0 hidden grid-cols-12 gap-6 border-b border-border pb-3 text-faint md:grid">
          <span className="col-span-2">Version</span>
          <span className="col-span-4">Milestone</span>
          <span className="col-span-6">Notes</span>
        </div>

        <ol>
          {journeyMilestones.map((milestone, index) => (
            <motion.li
              key={milestone.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 gap-2 border-b border-border py-7 transition-colors hover:bg-surface md:grid-cols-12 md:gap-6"
            >
              <div className="flex items-baseline gap-3 md:col-span-2">
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                  v{milestone.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text sm:text-xl md:col-span-4">
                {milestone.title}
              </h3>
              <div className="max-w-2xl text-sm leading-relaxed text-muted md:col-span-6">
                <p>{milestone.description}</p>
                {milestone.decision && (
                  <p className="mt-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                      Decision
                    </span>{" "}
                    {milestone.decision}
                  </p>
                )}
                {milestone.result && (
                  <p className="mt-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-success">
                      Result
                    </span>{" "}
                    {milestone.result}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
