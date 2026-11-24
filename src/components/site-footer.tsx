import Link from "next/link";
import { Container } from "@/components/container";
import { company, nav } from "@/data/site";
import { tools, toolHeading } from "@/data/tools";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="grid gap-10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-tight">{company.legalName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/75">
            An incubator for AI tools we use in our own companies. Pest control
            and home services first. Owned by {company.owner}.
          </p>
          <p className="mt-4 text-sm">
            <a
              className="underline decoration-paper/30 underline-offset-4 hover:decoration-signal"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/50 uppercase">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-signal" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-signal" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-signal" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-signal" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/50 uppercase">
            Tools
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link className="hover:text-signal" href={`/tools/${tool.slug}`}>
                  {toolHeading(tool)}
                  {tool.nameTbd ? (
                    <span className="text-paper/50"> · Name TBD</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <p>No invented stats. No invented customers.</p>
        </Container>
      </div>
    </footer>
  );
}
