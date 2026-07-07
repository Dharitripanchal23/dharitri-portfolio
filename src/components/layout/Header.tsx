"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { EngineeringDashboard } from "@/components/sections/EngineeringDashboard";

export function Header() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);

    if (clickCount.current >= 5) {
      setDashboardOpen(true);
      clickCount.current = 0;
      return;
    }

    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 8000);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm"
      >
        <div className="container-page flex h-14 items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="flex select-none items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-text transition-colors hover:text-accent"
            aria-label="Dharitri Panchal — click the logo 5 times for a surprise"
          >
            <span className="block h-2 w-2 bg-accent" aria-hidden />
            Dharitri Panchal
          </button>

          <nav className="hidden items-center md:flex" aria-label="Primary">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-text"
              >
                <span className="mr-1.5 text-faint transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="border border-border-strong px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s talk
          </Link>
        </div>
      </motion.header>

      <EngineeringDashboard open={dashboardOpen} onClose={() => setDashboardOpen(false)} />

      <span className="sr-only">{siteConfig.name}</span>
    </>
  );
}
