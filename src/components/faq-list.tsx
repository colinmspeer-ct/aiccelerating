import type { Faq } from "@/data/site";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <article
          key={item.question}
          className="grid gap-3 py-6 md:grid-cols-12 md:gap-10 md:py-8"
        >
          <h3 className="text-lg leading-snug font-medium text-ink md:col-span-5">
            {item.question}
          </h3>
          <p className="text-base leading-relaxed text-ink-soft md:col-span-7">
            {item.answer}
          </p>
        </article>
      ))}
    </div>
  );
}
