import { Suspense } from "react";
import { Container } from "@/components/container";
import { ContactForm, ContactFormGate } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { company, services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Colin Speer at AICCELERATING about finishing a vibe-coded app, AI consulting, partner access, or a specific tool.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell Colin what you need."
        lede="The form opens an email to Colin Speer. It does not post to a server, and this site does not store the message. Pick the service, partner group, or tool so the note lands in the right place."
      />
      <Container className="grid gap-12 py-14 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Suspense fallback={<ContactForm />}>
            <ContactFormGate />
          </Suspense>
        </div>
        <aside className="h-fit border border-line bg-cream p-6 lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Direct
          </p>
          <p className="mt-3 font-serif text-2xl text-ink">{company.owner}</p>
          <p className="mt-1 text-sm text-ink-soft">{company.legalName}</p>
          <p className="mt-4">
            <a
              className="font-medium text-moss underline decoration-moss/30 underline-offset-4"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
            {services.map((service) => (
              <li key={service.id}>
                <span className="font-medium text-ink">{service.title}. </span>
                {service.lede}
              </li>
            ))}
            <li>
              <span className="font-medium text-ink">Partner access. </span>
              Say Pest Control School or Home Services School, and whether you are already a member.
            </li>
          </ul>
        </aside>
      </Container>
    </>
  );
}
