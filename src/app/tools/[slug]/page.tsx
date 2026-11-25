import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { ExternalLink } from "@/components/external-link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Stamp } from "@/components/stamp";
import { company } from "@/data/site";
import {
  productUrl,
  relatedTools,
  toolBySlug,
  toolHeading,
  tools,
  type Tool,
} from "@/data/tools";
import { breadcrumbSchema, faqSchema, organizationId } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolBySlug(slug);
  if (!tool) return {};
  const title = tool.nameTbd ? `${tool.workingTitle} (Name TBD)` : tool.name;
  return pageMetadata({
    title,
    description: tool.summary,
    path: `/tools/${tool.slug}`,
  });
}

function softwareSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolHeading(tool),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: tool.summary,
    url: absoluteUrl(`/tools/${tool.slug}`),
    provider: { "@id": organizationId },
    ...(tool.nameTbd ? { alternateName: "Name TBD" } : {}),
    ...(productUrl(tool) ? { sameAs: productUrl(tool) } : {}),
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolBySlug(slug);
  if (!tool) notFound();
  const url = productUrl(tool);
  const related = relatedTools(tool);

  return (
    <>
      <JsonLd
        data={[
          softwareSchema(tool),
          faqSchema(tool.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: toolHeading(tool), path: `/tools/${tool.slug}` },
          ]),
        ]}
      />
      <article>
        <header className="border-b border-line">
          <Container className="py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
              <Link href="/" className="underline decoration-line underline-offset-4">
                Home
              </Link>
              <span aria-hidden> / </span>
              <Link href="/tools" className="underline decoration-line underline-offset-4">
                Tools
              </Link>
              <span aria-hidden> / </span>
              <span className="text-ink">{toolHeading(tool)}</span>
            </nav>
            <div className="mt-6 flex flex-wrap gap-2">
              <Stamp>{tool.category}</Stamp>
              <Stamp>Used internally</Stamp>
              {tool.nameTbd ? <Stamp tone="copper">Name TBD</Stamp> : null}
              {tool.domainTbd ? <Stamp tone="copper">Domain TBD</Stamp> : null}
              {tool.previewUrl ? <Stamp tone="copper">Preview</Stamp> : null}
            </div>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              {toolHeading(tool)}
            </h1>
            {tool.nameTbd ? null : (
              <p className="mt-3 text-lg text-ink-soft">{tool.workingTitle}</p>
            )}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">{tool.summary}</p>
            {tool.nameTbd ? (
              <p className="mt-4 max-w-2xl text-base text-ink-soft">
                The public product name is not final. The tool is listed because we already use it.
              </p>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 text-base">
              {url ? (
                <p>
                  <ExternalLink href={url}>{tool.domain}</ExternalLink>
                </p>
              ) : null}
              {tool.redirectsFrom && tool.redirectsFrom.length > 0 ? (
                <p className="text-ink-soft">
                  {tool.redirectsFrom.join(" and ")} redirects to {tool.domain}.
                </p>
              ) : null}
              {tool.domainTbd ? (
                <p className="max-w-2xl text-ink-soft">
                  The public domain is not final.
                  {tool.domainCandidates && tool.domainCandidates.length > 0
                    ? ` The hostnames still in the running are ${tool.domainCandidates.join(" and ")}.`
                    : ""}
                </p>
              ) : null}
              {tool.previewUrl ? (
                <p>
                  <ExternalLink href={tool.previewUrl}>Preview</ExternalLink>
                  <span className="text-ink-soft"> · temporary address</span>
                </p>
              ) : null}
            </div>
            {tool.image ? (
              <Image
                src={tool.image}
                alt={tool.imageAlt ?? `${toolHeading(tool)} homepage`}
                width={1440}
                height={900}
                className="mt-8 aspect-[16/9] w-full border border-line object-cover object-top"
              />
            ) : null}
          </Container>
        </header>

        <Container className="grid gap-12 py-14 md:py-16 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {tool.description.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="h-fit border border-line bg-cream p-6 lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Where it runs
            </p>
            <p className="mt-3 font-serif text-2xl text-ink">{tool.operator.name}</p>
            <p className="mt-2 leading-relaxed text-ink-soft">{tool.operator.detail}</p>
            <p className="mt-4 text-sm text-ink">{tool.usedInternally}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">Who it is for. </span>
              {tool.audience}
            </p>
          </aside>
        </Container>

        <section className="border-t border-line" aria-labelledby="capabilities-heading">
          <Container className="py-14 md:py-16">
            <h2 id="capabilities-heading" className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              What it is for
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {tool.capabilities.map((item) => (
                <li key={item.title} className="border border-line p-5">
                  <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl border-l-2 border-signal pl-4 text-ink-soft">
              {tool.limit}
            </p>
          </Container>
        </section>

        <section className="border-t border-line" aria-labelledby="tool-faq-heading">
          <Container className="py-14 md:py-16">
            <h2 id="tool-faq-heading" className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Questions
            </h2>
            <div className="mt-8">
              <FaqList items={tool.faqs} />
            </div>
          </Container>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-line" aria-labelledby="related-heading">
            <Container className="py-14 md:py-16">
              <h2 id="related-heading" className="font-serif text-3xl tracking-tight text-ink">
                Related tools
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/tools/${item.slug}`}
                      className="block h-full border border-line p-4 hover:border-moss/50"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                        {item.category}
                        {item.nameTbd ? " · Name TBD" : ""}
                      </span>
                      <span className="mt-2 block font-serif text-2xl text-ink">
                        {toolHeading(item)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        <section className="border-t border-line">
          <Container className="py-14 md:py-16">
            <h2 className="max-w-xl font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Ask about {toolHeading(tool)}.
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Partner access and product questions go to {company.email}.
            </p>
            <div className="mt-6">
              <CtaLink href={`/contact?topic=tool&tool=${tool.slug}`}>
                Contact about this tool
              </CtaLink>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
