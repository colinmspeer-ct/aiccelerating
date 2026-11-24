import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { company } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "AICCELERATING LLC does not run trackers on this marketing site. Messages you email to Colin Speer are used to reply.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="What this site does with information."
        lede="AICCELERATING LLC publishes this marketing site. It does not run advertising trackers, and the contact form does not store your message on the website."
      />
      <Container className="max-w-3xl space-y-8 py-14 text-base leading-relaxed text-ink-soft md:py-16">
        <p className="text-sm text-ink">Last updated November 24, 2026.</p>
        <section>
          <h2 className="font-serif text-2xl text-ink">If you email us</h2>
          <p className="mt-3">
            The contact form opens an email to {company.email}. It does not
            post the form to a server we control. If you send that email, we
            receive what you put in it: your name, email address, company if
            you included one, and the message. We use it to reply and to
            follow up on the service, tool, or partner group you asked about.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">What we do not do</h2>
          <p className="mt-3">
            We do not sell personal information. We do not set analytics
            cookies on this site. We do not run an advertising pixel. We do
            not ask you to create an account here.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">The host</h2>
          <p className="mt-3">
            Whoever serves the site, for example Cloudflare or GitHub Pages,
            may keep ordinary connection logs, including IP address, as part
            of delivering the pages. That processing belongs to the host. We
            do not add a tracker on top of it.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Links</h2>
          <p className="mt-3">
            Product sites and Home Service School are separate sites with
            their own practices. This policy covers aiccelerating.com.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-ink">Ask us</h2>
          <p className="mt-3">
            To ask what we have from you, or to ask us to delete an email
            thread, write {company.email}.
          </p>
        </section>
      </Container>
    </>
  );
}
