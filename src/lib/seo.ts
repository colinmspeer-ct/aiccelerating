import type { Metadata } from "next";
import { company } from "@/data/site";

export function absoluteUrl(path = "/"): string {
  const [pathname = "/", hash] = path.split("#");
  const normalized =
    pathname === "" || pathname === "/"
      ? "/"
      : pathname.endsWith("/")
        ? pathname
        : `${pathname}/`;
  const url = new URL(normalized, `${company.url}/`);
  if (hash) url.hash = hash;
  return url.toString();
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title} · ${company.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: company.legalName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "AICCELERATING LLC — AI tools we actually run",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.png"],
    },
  };
}
