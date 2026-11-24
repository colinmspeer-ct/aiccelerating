import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "AICCELERATING — AI tools we actually run",
    template: "%s · AICCELERATING",
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.owner, url: company.url }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "software",
  alternates: { canonical: company.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: company.url,
    siteName: company.legalName,
    title: "AICCELERATING — AI tools we actually run",
    description: company.description,
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
    title: "AICCELERATING — AI tools we actually run",
    description: company.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3efe4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
