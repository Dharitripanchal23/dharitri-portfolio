"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyMilestones } from "@/data/journey";

export function Journey() {
  return (
    <section id="journey" className="section-pad relative border-t border-border" aria-label="Career journey">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Career Journey"
          title={
            <>
              Seven years.
              <br />
              One consistent thread.
            </>
          }
          description="From web development contributor to delivery manager for international clients — every step compounded into the next. Read it like a changelog."
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
              <p className="max-w-xl text-sm leading-relaxed text-muted md:col-span-6">
                {milestone.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
