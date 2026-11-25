import Image from "next/image";
import Link from "next/link";
import { Stamp } from "@/components/stamp";
import { toolHeading, type Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <li>
      <Link
        href={`/tools/${tool.slug}`}
        className="group flex h-full flex-col overflow-hidden border border-line bg-cream transition-colors hover:border-moss/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
      >
        {tool.image ? (
          <Image
            src={tool.image}
            alt={tool.imageAlt ?? ""}
            width={1440}
            height={900}
            className="aspect-[16/10] w-full border-b border-line object-cover object-top"
          />
        ) : null}
        <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            {tool.category}
          </span>
          {tool.nameTbd ? <Stamp tone="copper">Name TBD</Stamp> : null}
          {tool.domainTbd ? <Stamp tone="copper">Domain TBD</Stamp> : null}
          {tool.previewUrl ? <Stamp tone="copper">Preview</Stamp> : null}
          <Stamp>Used internally</Stamp>
        </div>
        <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink group-hover:text-moss md:text-3xl">
          {toolHeading(tool)}
        </h2>
        {tool.nameTbd ? null : (
          <p className="mt-1 text-sm text-ink-soft">{tool.workingTitle}</p>
        )}
        <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
          {tool.summary}
        </p>
        <p className="mt-5 text-sm text-ink">
          {tool.nameTbd
            ? "Public name not final"
            : tool.domainTbd
              ? "Domain TBD"
              : tool.domain}
        </p>
        </div>
      </Link>
    </li>
  );
}
