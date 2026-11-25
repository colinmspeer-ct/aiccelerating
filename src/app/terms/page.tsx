import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { company } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for the AICCELERATING LLC website. Product pages describe tools we use. They are not a contract, a price list, or a service-level agreement.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="How to read this website."
        lede="This site is published by AICCELERATING LLC. It describes the incubator, the tools we use, and two services. It is not a contract by itself."
      />
      <Container className="max-w-3xl space-y-8 py-14 text-base leading-relaxed text-ink-soft md:py-16">
        <p className="text-sm text-ink">Last updated November 24, 2026.</p>
        <section>
          <h2 className="font-serif text-2xl text-ink">The company</h2>
          <p className="mt-3">
            AICCELERATING LLC owns this website. {company.owner} is the owner
            and the contact at {company.email}. We have not published a street
            address on this site.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Product pages</h2>
          <p className="mt-3">
            Tool pages say what a product is for and that we use it
            internally. That is not a warranty, a service-level agreement, or
            a promise that a partner company will get a particular business
            result. Names marked Name TBD are placeholders. Domains belong to
            the products named on those pages.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Partner access</h2>
          <p className="mt-3">
            Nothing on this site is an offer to sell a license at a published
            price. Access for Pest Control School and Home Services School is
            arranged separately, in writing, if we agree to it.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Services</h2>
          <p className="mt-3">
            Finishing a vibe-coded app and AI consulting are scoped in writing
            before work starts. A conversation or an email does not start a
            project. The finishing service starts from an app you already
            have. We do not begin that service from a blank repository.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">The site itself</h2>
          <p className="mt-3">
            We try to keep the pages accurate. The site is provided as
            available. Questions about these terms go to {company.email}.
          </p>
        </section>
      </Container>
    </>
  );
}
