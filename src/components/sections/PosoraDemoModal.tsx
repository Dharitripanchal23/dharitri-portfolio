"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { PosoraDashboardMockup } from "./PosoraDashboardMockup";
import { posoraDetails } from "@/data/posora";

export function PosoraDemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-background/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Posora product preview"
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  posora --demo
                </div>
                <h3 className="mt-1 text-xl font-semibold text-text">{posoraDetails.vision}</h3>
              </div>
              <button
                onClick={onClose}
                className="border border-border-strong p-2 text-muted transition-colors hover:border-text hover:text-text"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <PosoraDashboardMockup />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
