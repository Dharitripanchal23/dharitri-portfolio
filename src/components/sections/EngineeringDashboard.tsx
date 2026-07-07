"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const stats = [
  { label: "Commits shipped", value: "4,800+" },
  { label: "Production incidents resolved", value: "120+" },
  { label: "Cups of coffee", value: "∞" },
  { label: "Late-night deploys", value: "37" },
  { label: "Systems kept alive", value: "100%" },
  { label: "Ideas turned into products", value: "1 → Posora" },
];

export function EngineeringDashboard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Engineering Dashboard"
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl border border-border-strong bg-surface"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-3">
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden />
                Hidden panel unlocked
              </span>
              <button
                onClick={onClose}
                className="p-1 text-muted transition-colors hover:text-text"
                aria-label="Close dashboard"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="display text-2xl text-text sm:text-3xl">
                Engineering Dashboard
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted">
                You found the secret panel. Here&apos;s what six years of
                building in production actually looks like.
              </p>

              <div className="mt-8 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 border-b border-r border-border p-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {String(index + 1).padStart(2, "0")} / {stat.label}
                    </span>
                    <span className="tabular font-mono text-xl font-semibold text-text">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
