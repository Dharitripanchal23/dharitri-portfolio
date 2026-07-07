"use client";

import { useEffect, useRef, useState } from "react";
import { TerminalSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { runCommand, commandOrder } from "./commands";
import { MatrixRain } from "./MatrixRain";
import { PosoraDemoModal } from "@/components/sections/PosoraDemoModal";
import { siteConfig } from "@/data/site";

interface HistoryEntry {
  command: string;
  output: string[];
}

const WELCOME: string[] = [
  `Welcome to ${siteConfig.name}'s terminal.`,
  "Type 'help' to see available commands.",
];

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([{ command: "", output: WELCOME }]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState<number | null>(null);
  const [matrixActive, setMatrixActive] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const submitCommand = (raw: string) => {
    const trimmed = raw.trim();

    const context = {
      openDemo: () => setDemoOpen(true),
      toggleMatrix: () => setMatrixActive((prev) => !prev),
      fireConfetti: () => fireConfetti(),
      clear: () => setHistory([]),
      downloadResume: () => {
        const link = document.createElement("a");
        link.href = siteConfig.resumeHref;
        link.download = "Dharitri_Panchal_IT_PM_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
      },
    };

    const output = runCommand(trimmed, context);

    if (output !== null) {
      setHistory((prev) => [...prev, { command: trimmed, output }]);
    }

    if (trimmed) {
      setCommandLog((prev) => [...prev, trimmed]);
    }
    setLogIndex(null);
    setInput("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitCommand(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitCommand(input);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = logIndex === null ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (logIndex === null) return;
      const nextIndex = logIndex + 1;
      if (nextIndex >= commandLog.length) {
        setLogIndex(null);
        setInput("");
      } else {
        setLogIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const match = commandOrder.find((cmd) => cmd.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <section id="terminal" className="section-pad relative border-t border-border" aria-label="Interactive terminal">
      <MatrixRain active={matrixActive} />
      <Container>
        <SectionHeading
          index="13"
          eyebrow="Try It Yourself"
          title={
            <>
              A résumé is
              <br />
              one-directional.
            </>
          }
          description="This isn't. Type 'help' to explore — or try something unexpected."
          className="mb-16"
        />

        <div
          className="mx-auto max-w-3xl overflow-hidden border border-border bg-surface"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <TerminalSquare className="h-3.5 w-3.5" aria-hidden />
              guest@portfolio: ~
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              tty_01
            </span>
          </div>

          <div
            ref={scrollRef}
            className="h-[380px] overflow-y-auto p-5 font-mono text-sm leading-relaxed sm:p-6"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-3">
                {entry.command !== "" && (
                  <div className="flex gap-2 text-text">
                    <span className="text-accent">❯</span>
                    <span className="text-faint">~</span>
                    <span>{entry.command}</span>
                  </div>
                )}
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-muted">
                    {line || "\u00A0"}
                  </div>
                ))}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-accent">❯</span>
              <span className="text-faint">~</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal command input"
                className="flex-1 bg-transparent text-text outline-none placeholder:text-muted/50"
                placeholder="type a command..."
              />
            </form>
          </div>
        </div>
      </Container>

      <PosoraDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}

async function fireConfetti() {
  const confetti = (await import("canvas-confetti")).default;
  const colors = ["#FF4400", "#F4F4F0", "#8F8F88"];

  confetti({
    particleCount: 140,
    spread: 90,
    origin: { y: 0.6 },
    colors,
  });

  setTimeout(() => {
    confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0 }, colors });
    confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1 }, colors });
  }, 250);
}
