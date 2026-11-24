import { company, type Faq } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export const organizationId = `${company.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.legalName,
    url: company.url,
    email: company.email,
    description: company.description,
    founder: {
      "@type": "Person",
      name: company.owner,
      email: company.email,
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "Swyft Marketing",
        description:
          "Door-to-door agency. Uses D2D Job to recruit and hire reps.",
      },
      {
        "@type": "Organization",
        name: "Swyft International",
        description:
          "Places virtual assistants and offshore talent. Uses vaccelerating.",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.url}/#website`,
    name: company.name,
    url: company.url,
    description: company.description,
    publisher: { "@id": organizationId },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
