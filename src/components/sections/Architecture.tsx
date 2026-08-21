"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { architectureLayers } from "@/data/architecture";
import { sections } from "@/data/sections";

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState(0);
  const layer = architectureLayers[activeLayer];

  return (
    <section id="architecture" className="section-pad relative border-t border-border" aria-label="Delivery thinking">
      <Container>
        <SectionHeading
          index={sections.layers.index}
          eyebrow={sections.layers.label}
          title={
            <>
              The work around
              <br />
              the work.
            </>
          }
          description="Delivery is a system. Select a layer to inspect where I contribute, what I own, and how technical context affects the plan."
          className="mb-20"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* System stack diagram — flat, technical */}
          <RevealOnScroll className="lg:col-span-5">
            <div className="border border-border">
              <div className="tech-label border-b border-border bg-surface px-5 py-3 text-faint">
                fig. 01 — delivery layers
              </div>
              <div className="flex flex-col p-5">
                {architectureLayers.map((item, index) => (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setActiveLayer(index)}
                      aria-pressed={activeLayer === index}
                      className={`flex w-full items-center justify-between gap-4 border px-4 py-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        activeLayer === index
                          ? "border-accent bg-surface-raised"
                          : "border-border-strong hover:border-accent"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-medium text-text">{item.label}</div>
                        <div className="font-mono text-[11px] text-muted">{item.detail}</div>
                      </div>
                      <span className="font-mono text-[11px] text-faint">
                        L{index}
                      </span>
                    </button>
                    {index < architectureLayers.length - 1 && (
                      <div className="mx-auto h-4 w-px bg-border-strong" aria-hidden />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="min-h-72 border border-border bg-surface p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="tech-label text-faint">layer.inspect</span>
                  <span className="font-mono text-xs text-accent">L{activeLayer}</span>
                </div>
                <h3 className="display display-md mt-10 text-text">{layer.label}</h3>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {layer.responsibility}
                </p>
                <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                  Select another layer to inspect the operating system.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
