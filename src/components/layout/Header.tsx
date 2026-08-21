import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm"
      >
        <div className="container-page relative flex h-14 items-center justify-between">
          <Link
            href="#hero"
            className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-text transition-colors hover:text-accent"
          >
            <span className="block h-2 w-2 bg-accent" aria-hidden />
            Dharitri Panchal
          </Link>

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

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="border border-border-strong px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s talk
            </Link>
            <details className="group md:hidden">
              <summary className="cursor-pointer border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted marker:content-none hover:border-accent hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Menu
              </summary>
              <nav
                className="absolute right-0 top-12 z-50 flex min-w-52 flex-col border border-border-strong bg-background p-2 shadow-2xl"
                aria-label="Mobile primary"
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:bg-surface hover:text-text focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  >
                    <span className="mr-2 text-faint">{String(index + 1).padStart(2, "0")}</span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </motion.header>

      <span className="sr-only">{siteConfig.name}</span>
    </>
  );
}
