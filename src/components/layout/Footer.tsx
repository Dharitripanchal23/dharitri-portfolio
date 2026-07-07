import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-8" aria-label="Footer">
      <Container className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
        <div className="hidden items-center gap-2 sm:flex" aria-hidden>
          <span className="block h-1.5 w-1.5 bg-accent" />
          <span>{siteConfig.location} / {siteConfig.relocation}</span>
        </div>
        <div>Built with passion. Designed with product thinking.</div>
      </Container>
    </footer>
  );
}
