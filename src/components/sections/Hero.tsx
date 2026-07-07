"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/effects/NetworkBackground";
import { siteConfig } from "@/data/site";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

const specs = [
  { label: "Experience", value: `${siteConfig.yearsExperience}+ yrs` },
  { label: "Discipline", value: "Delivery / Agile PM" },
  { label: "Currently", value: "Excellent Webworld" },
  { label: "Base", value: siteConfig.relocation },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border pt-14"
      aria-label="Introduction"
    >
      <NetworkBackground className="absolute inset-0" />

      <Container className="relative z-10 pb-10 pt-10 sm:pt-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3"
        >
          <span className="tech-label">
            IT Project Manager — Technical Delivery Manager — Agile PM
          </span>
          <span className="tech-label hidden items-center gap-2 sm:flex">
            <span className="block h-1.5 w-1.5 bg-accent" aria-hidden />
            Status: Open to Germany & EU roles
          </span>
        </motion.div>

        <h1 className="display display-xl">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="block text-text"
          >
            Delivering projects
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="block text-text"
          >
            on scope<span className="text-accent">.</span>
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="block text-muted sm:pl-[8vw]"
          >
            Leading teams
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
            className="block text-muted sm:pl-[8vw]"
          >
            that execute<span className="text-accent">.</span>
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.5}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.yearsExperience}+ years of end-to-end project ownership
            across SaaS, marketplace, and e-commerce — coordinating teams of
            8–12, managing international stakeholders, and driving Agile
            delivery from discovery to production release.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.6}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="#journey" icon={ArrowDown} size="lg">
              Explore Journey
            </Button>
            <Button
              href={siteConfig.resumeHref}
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 border-t border-border bg-surface/40"
      >
        <Container className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1 px-4 py-4 first:pl-0">
              <span className="tech-label text-faint">{spec.label}</span>
              <span className="font-mono text-sm text-text">{spec.value}</span>
            </div>
          ))}
        </Container>
      </motion.div>
    </section>
  );
}
