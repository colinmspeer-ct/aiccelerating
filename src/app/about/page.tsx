import Link from "next/link";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { aboutFaqs, agencies, company } from "@/data/site";
import { toolHeading, tools } from "@/data/tools";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "AICCELERATING LLC, owned by Colin Speer, incubates AI tools for pest control and home services and uses them in its own companies. Swyft is the agency arm.",
  path: "/about",
});

const steps = [
  {
    title: "The job already exists",
    detail:
      "Hiring reps, placing assistants, answering the phone, selling pest accounts, running a route. We build for work we already do.",
  },
  {
    title: "We use the app",
    detail:
      "The tool goes into that operation. If it breaks, we find out on our own Monday, and it is not done.",
  },
  {
    title: "Partners can use it",
    detail:
      "Swyft commercializes the agency work. Companies in Pest Control School and Home Service School can ask for the tools, including ones still marked Name TBD.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqSchema(aboutFaqs)} />
      <PageHeader
        eyebrow="The incubator"
        title="Built for industries we operate in."
        lede="AICCELERATING LLC, owned by Colin Speer, builds AI tools for industry and proves them in companies it operates. Pest control and home services come first."
      />
      <section className="border-b border-line">
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            How a tool gets here
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-copper">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Colin Speer
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Colin Speer owns AICCELERATING LLC. He is the public contact for
              the incubator, for finishing a vibe-coded app, for AI consulting,
              and for partner access.
            </p>
            <p className="mt-4">
              <a
                className="font-medium text-moss underline decoration-moss/30 underline-offset-4"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              This page does not invent a biography, a headcount, or a list of
              awards. The work is the tools and the companies that use them.
            </p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink">Swyft</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Swyft is the agency arm. It commercializes the tools that have an
              operating practice attached: door-to-door through Swyft Marketing,
              and virtual assistants and offshore talent through Swyft
              International.
            </p>
            <div className="mt-6 grid gap-4">
              {agencies.map((agency) => {
                const tool = tools.find((item) => item.slug === agency.toolSlug);
                return (
                  <article key={agency.name} className="border border-line p-5">
                    <h3 className="font-serif text-2xl text-ink">{agency.name}</h3>
                    <p className="mt-1 text-sm text-copper">{agency.role}</p>
                    <p className="mt-3 text-ink-soft">{agency.detail}</p>
                    {tool ? (
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="mt-3 inline-block text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4"
                      >
                        {toolHeading(tool)}
                      </Link>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Questions</h2>
          <div className="mt-8">
            <FaqList items={aboutFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
