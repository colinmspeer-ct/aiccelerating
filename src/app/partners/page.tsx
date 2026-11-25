import Link from "next/link";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { company, partnerFaqs, partners } from "@/data/site";
import { placeholderTools, toolHeading, tools } from "@/data/tools";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partner access",
  description:
    "Companies in Pest Control School and Home Services School can use AICCELERATING’s tools. Access is arranged with Colin Speer. There is no public checkout.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={faqSchema(partnerFaqs)} />
      <PageHeader
        eyebrow="Partner access"
        title="Member companies get the tools."
        lede="Companies in Pest Control School and Home Services School can use the software we run ourselves. Access is arranged with us. This page is not a checkout and it does not list a price."
      />
      <section className="border-b border-line">
        <Container className="grid gap-4 py-14 md:grid-cols-2 md:py-20">
          {partners.map((partner) => (
            <article key={partner.id} className="border border-line bg-cream p-6 md:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                {partner.who}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">{partner.name}</h2>
              <p className="mt-2 text-sm text-ink-soft">{partner.handle}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{partner.detail}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaLink href={`/contact?topic=${partner.id}`}>Apply</CtaLink>
                <Link
                  href={`/tools/${partner.toolSlug}`}
                  className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4"
                >
                  The product
                </Link>
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft underline decoration-line underline-offset-4"
                  >
                    {partner.url.replace("https://", "")}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            What members can ask for
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            The same tools we use. That includes named products and the{" "}
            {placeholderTools().length} still marked Name TBD. Asking does not
            guarantee a seat. Colin replies from {company.email}.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="flex items-baseline justify-between gap-3 border border-line px-4 py-3 hover:border-moss/50"
                >
                  <span className="font-medium text-ink">{toolHeading(tool)}</span>
                  <span className="shrink-0 text-xs tracking-[0.12em] text-ink-soft uppercase">
                    {tool.nameTbd ? "Name TBD" : tool.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section>
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Questions</h2>
          <div className="mt-8">
            <FaqList items={partnerFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
