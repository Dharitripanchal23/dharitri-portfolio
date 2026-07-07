import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site";

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, external: false },
  { label: "LinkedIn", value: "in/dharitripanchal", href: siteConfig.linkedin, external: true },
  { label: "GitHub", value: "Dharitripanchal23", href: siteConfig.github, external: true },
  { label: "Resume", value: "Dharitri_Panchal_IT_PM_Resume.pdf", href: siteConfig.resumeHref, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative border-t border-border" aria-label="Contact">
      <Container>
        <RevealOnScroll>
          <Eyebrow index="12">Contact</Eyebrow>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="display display-lg mt-8 text-text">
            Great software starts
            <br />
            with great{" "}
            <span className="underline decoration-accent decoration-[3px] underline-offset-[12px]">
              conversations
            </span>
            <span className="text-accent">.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Whether you&apos;re hiring for delivery leadership, building
            across borders, or exploring opportunities in Germany — I&apos;m
            one message away.
          </p>
        </RevealOnScroll>

        <div className="mt-12">
          <RevealOnScroll>
            <div className="tech-label border-b border-border pb-3 text-faint">Channels</div>
          </RevealOnScroll>
          {channels.map((channel, index) => (
            <RevealOnScroll key={channel.label} delay={index * 0.06}>
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-6 transition-colors hover:bg-surface"
              >
                <span className="col-span-1 font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-4 text-xl font-semibold tracking-tight text-text sm:text-2xl">
                  {channel.label}
                </span>
                <span className="col-span-5 hidden font-mono text-sm text-muted sm:block">
                  {channel.value}
                </span>
                <span className="col-span-2 flex justify-end sm:col-span-2">
                  <ArrowUpRight
                    className="h-5 w-5 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
