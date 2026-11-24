import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-14 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{lede}</p>
      </Container>
    </header>
  );
}
