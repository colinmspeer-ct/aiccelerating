import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ToolCard } from "@/components/tool-card";
import { placeholderTools, tools } from "@/data/tools";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tools",
  description:
    "The AICCELERATING tool list. Each app is used in a business the company operates. Unnamed products are marked Name TBD. A preview address is temporary.",
  path: "/tools",
});

export default function ToolsPage() {
  const placeholders = placeholderTools().length;
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="The incubator, in one list."
        lede={`${tools.length} web apps. We use each one in a business we operate. ${tools.length - placeholders} have public names and domains. ${placeholders} are marked Name TBD until the name is ready.`}
      />
      <Container className="py-12 md:py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </ul>
      </Container>
    </>
  );
}
