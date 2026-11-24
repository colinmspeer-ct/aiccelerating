import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <Container className="py-20 md:py-28">
      <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-3 max-w-xl font-serif text-4xl tracking-tight text-ink md:text-6xl">
        That page is not on this site.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">
        The tools, the services, and the contact form are linked below.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CtaLink href="/">Home</CtaLink>
        <CtaLink href="/tools" variant="outline">
          Tools
        </CtaLink>
        <CtaLink href="/contact" variant="outline">
          Contact
        </CtaLink>
      </div>
    </Container>
  );
}
