"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "init portfolio",
  "loading experience",
  "mounting sections",
  "ready.",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const timeout = setTimeout(onDone, 600);
    return () => clearTimeout(timeout);
  }, [exiting, onDone]);

  const visibleLines = Math.min(
    bootLines.length,
    Math.floor((progress / 100) * bootLines.length) + 1
  );

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-sm px-6 font-mono text-xs">
            <div className="mb-8 flex items-center justify-between text-muted">
              <span className="flex items-center gap-2 uppercase tracking-[0.22em]">
                <span className="block h-1.5 w-1.5 bg-accent" aria-hidden />
                Dharitri Panchal
              </span>
              <span className="tabular">{String(progress).padStart(3, "0")}%</span>
            </div>

            <div className="flex min-h-[6.5rem] flex-col gap-2 text-muted">
              {bootLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-faint">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className={index === bootLines.length - 1 ? "text-text" : undefined}>
                    {line}
                  </span>
                  {index === visibleLines - 1 && progress < 100 && (
                    <span className="animate-blink text-accent" aria-hidden>
                      _
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 h-px w-full bg-border">
              <div
                className="h-px bg-accent transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
