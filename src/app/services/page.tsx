import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { company, serviceFaqs, services } from "@/data/site";
import { faqSchema, organizationId } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AICCELERATING finishes vibe-coded apps and consults on AI for operating companies, especially home services and pest control. We do not invent results.",
  path: "/services",
});

const bring = [
  "The app you already started, usually in Lovable, Replit, Bolt, Cursor, or a tool like them",
  "A URL, a login, or a repo we can actually open",
  "One sentence on what “working” means for your business",
];

const finish = [
  {
    title: "Fix the bugs",
    detail:
      "We reproduce what breaks when someone other than the builder uses it, then we fix that.",
  },
  {
    title: "Connect a real backend",
    detail:
      "Where the prototype faked the data, we connect the database, the accounts, and the records the business actually needs.",
  },
  {
    title: "Connect payments",
    detail:
      "If the product has to charge, we wire that up. If it does not charge, we do not add a checkout to make the project look bigger.",
  },
  {
    title: "Harden the daily paths",
    detail:
      "Sign-in, permissions, empty states, errors, and the two or three flows that run every day. Those are the parts a demo skips and a customer hits.",
  },
  {
    title: "Deploy it",
    detail:
      "We put it somewhere you can hand to a customer, with a path to change it later. A file on a laptop is not deployed.",
  },
];

const consult = [
  {
    title: "Walk the workflow",
    detail:
      "Calls, routes, estimates, hiring, reviews, cancellations. We learn it from the people who do it.",
  },
  {
    title: "Separate the work",
    detail:
      "Some tasks a model can hold. Some should stay with a person. We say which is which, including when the answer is to leave it alone.",
  },
  {
    title: "Point at something real",
    detail:
      "Often that is a tool we already run, such as PestWize, InboundRep, or OutboundRep. Sometimes it is a small build. Sometimes it is neither.",
  },
  {
    title: "Stay through first use",
    detail:
      "The useful part is the first week the office actually uses it, not the meeting where everyone agrees it sounds promising.",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: absoluteUrl(service.href),
        provider: { "@id": organizationId },
      },
    })),
  };

  return (
    <>
      <JsonLd data={[schema, faqSchema(serviceFaqs)]} />
      <PageHeader
        eyebrow="Services"
        title="We finish the app. We also tell you where AI belongs."
        lede="AICCELERATING does two kinds of paid work beside the incubator. We take over a half-working app you already vibe-coded, and we consult for operating companies, especially in home services and pest control."
      />

      <section id="finish-your-app" className="scroll-mt-24 border-b border-line">
        <Container className="py-14 md:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            01
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl">
            We finish your vibe-coded app
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
            You bring the half-working app. We make that app functional.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Lovable, Replit, Bolt, Cursor, and the tools around them are good at
            a first version. They are less good at the week after, when a real
            customer hits a bug, a payment fails, or the data was never real.
            We start from the version you have. We do not throw it out and
            begin from an empty repository.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-ink">What you bring</h3>
              <ul className="mt-4 space-y-3">
                {bring.map((item) => (
                  <li key={item} className="border-t border-line pt-3 text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-ink">What we do</h3>
              <ul className="mt-4 space-y-4">
                {finish.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-ink-soft">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 max-w-2xl border border-line bg-cream p-5">
            <h3 className="font-medium text-ink">A project that is only an idea</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              If there is no app to open, this service is the wrong one. That
              conversation is consulting, or it is not a fit yet. We scope a
              finishing job after we see the app. We do not quote a duration on
              this page.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/contact?topic=finish-app">Send the app</CtaLink>
          </div>
        </Container>
      </section>

      <section id="consulting" className="scroll-mt-24 border-b border-line">
        <Container className="py-14 md:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            02
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-5xl">
            AI consulting for operating companies
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
            We help you decide where AI belongs in the work, then help you put it there.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Most of that experience is pest control and home services: the
            phone, the route, the estimate, the review, the cancellation. We
            will talk to other businesses. We will also say when we are the
            wrong people. We do not sell a slide deck and call it a strategy.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {consult.map((item) => (
              <li key={item.title} className="border border-line p-5">
                <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-2xl">
            <h3 className="text-lg font-medium text-ink">What we will not put in a proposal</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              A predicted revenue number, a headcount cut, or a claim that AI
              replaces technicians or the office. If we do not have the figure,
              it does not go in the document.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/contact?topic=consulting">Talk about the work</CtaLink>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Questions</h2>
          <div className="mt-8">
            <FaqList items={serviceFaqs} />
          </div>
          <p className="mt-8 text-ink-soft">
            Both services start the same way. Write {company.email}, or use the form and pick the service.
          </p>
        </Container>
      </section>
    </>
  );
}
