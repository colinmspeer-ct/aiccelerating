import Link from "next/link";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Stamp } from "@/components/stamp";
import { ToolCard } from "@/components/tool-card";
import {
  agencies,
  company,
  homeFaqs,
  partners,
  reliabilityPoints,
  services,
} from "@/data/site";
import { toolHeading, tools } from "@/data/tools";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="bg-ink text-paper">
        <Container className="grid min-w-0 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-paper/60 uppercase">
              {company.legalName} · Owned by {company.owner}
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[2.7rem] leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              AI tools we <em className="text-signal italic">actually</em> run.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              AICCELERATING incubates software for pest control and home
              services. These are AI-produced web apps, and we use every one of
              them in our own companies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href={services[0].href} variant="signal" className="w-full sm:w-auto">
                Finish your vibe-coded app
              </CtaLink>
              <CtaLink href={services[1].href} variant="ghost-light" className="w-full sm:w-auto">
                AI consulting
              </CtaLink>
            </div>
            <p className="mt-5 text-sm text-paper/70">
              <Link href="#tools" className="underline decoration-paper/30 underline-offset-4 hover:decoration-signal">
                See the tools
              </Link>
              <span> · some named, some still marked Name TBD</span>
            </p>
          </div>
          <aside className="min-w-0 lg:col-span-5" aria-label="Tools in the incubator">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-paper/50 uppercase">
              In the incubator
            </p>
            <ol className="min-w-0 border border-white/15">
              {tools.map((tool, index) => (
                <li key={tool.slug} className="border-b border-white/10 last:border-b-0">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="flex min-w-0 items-baseline justify-between gap-3 px-4 py-3 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signal"
                  >
                    <span className="flex min-w-0 flex-1 items-baseline gap-3">
                      <span className="w-6 shrink-0 text-xs text-paper/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-paper">
                          {tool.nameTbd ? "Name TBD" : tool.name}
                        </span>
                        <span className="block truncate text-sm text-paper/55">
                          {tool.workingTitle}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 text-[11px] tracking-[0.12em] text-paper/45 uppercase">
                      {tool.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="services-heading">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            Two ways to hire us.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            AICCELERATING does two kinds of paid work beside the incubator. We
            finish apps you already built with AI coding tools, and we consult
            for operating companies, especially in home services and pest
            control.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} className="flex flex-col border border-line bg-cream p-6 md:p-8">
                <h3 className="font-serif text-3xl tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {service.summary}
                </p>
                <div className="mt-6">
                  <CtaLink href={`/contact?topic=${service.contactTopic}`}>
                    {service.id === "finish-your-app" ? "Send the app" : "Talk about the work"}
                  </CtaLink>
                </div>
                <Link
                  href={service.href}
                  className="mt-4 text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4"
                >
                  Read what this includes
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="tools" className="scroll-mt-24 border-b border-line">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            The tools
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Eight apps. All used here.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Each card is a product we run inside a business we operate. Named
            products link to a real domain. Cards marked Name TBD are in use,
            and the public name is not final.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line bg-cream" aria-labelledby="tested-heading">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Built and battle-tested
          </p>
          <h2
            id="tested-heading"
            className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            We use every tool in our own companies.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            “Used internally” means a company we operate depends on it. Swyft is
            the agency arm that commercializes two of them. The rest run in our
            own pest control and home service work. This is not a customer logo
            wall.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {agencies.map((agency) => {
              const tool = tools.find((item) => item.slug === agency.toolSlug);
              return (
                <article key={agency.name} className="border border-line bg-paper p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                    {agency.role}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-ink">{agency.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{agency.detail}</p>
                  {tool ? (
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="mt-4 inline-block text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4"
                    >
                      {toolHeading(tool)}
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {tools
              .filter((tool) => !tool.operator.featured)
              .map((tool) => (
                <li key={tool.slug} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="font-medium text-ink underline decoration-line underline-offset-4 sm:col-span-4"
                  >
                    {toolHeading(tool)}
                    {tool.nameTbd ? <span className="text-copper"> · Name TBD</span> : null}
                  </Link>
                  <p className="text-ink-soft sm:col-span-8">{tool.usedInternally}</p>
                </li>
              ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="promise-heading">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Reliability
          </p>
          <h2
            id="promise-heading"
            className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            It has to survive a Monday.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A tool that dies in the field is not a tool. We do not publish an
            uptime percentage. We have not measured one we would put on a
            homepage. The promise is the way we work.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {reliabilityPoints.map((point, index) => (
              <li key={point.title} className="border-t border-line pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-medium text-ink">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{point.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="partners-heading">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Partner access
          </p>
          <h2
            id="partners-heading"
            className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl"
          >
            Member companies get the tools.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Pest Control School and Home Service School are the groups. Companies
            in those groups can use the software we run ourselves. Access is
            arranged with us. There is no checkout on this site.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {partners.map((partner) => (
              <article key={partner.id} className="border border-line p-6">
                <Stamp tone="copper">{partner.who}</Stamp>
                <h3 className="mt-4 font-serif text-3xl text-ink">{partner.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{partner.handle}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{partner.detail}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <Link
                    href={`/contact?topic=${partner.id}`}
                    className="font-medium text-moss underline decoration-moss/30 underline-offset-4"
                  >
                    Apply for access
                  </Link>
                  {partner.url ? (
                    <a
                      href={partner.url}
                      className="text-ink-soft underline decoration-line underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {partner.handle}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/partners" className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4">
              How partner access works
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="faq-heading">
        <Container className="py-16 md:py-24">
          <h2 id="faq-heading" className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Questions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Straight answers about the company, the tools, and the work we will take.
          </p>
          <div className="mt-8">
            <FaqList items={homeFaqs} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <h2 className="max-w-2xl font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Bring the app, or bring the workflow.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Colin reads {company.email}. Tell us which service you need, or which group you are in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/contact?topic=finish-app" className="w-full sm:w-auto">
              Finish your vibe-coded app
            </CtaLink>
            <CtaLink href="/contact?topic=consulting" variant="outline" className="w-full sm:w-auto">
              AI consulting
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
