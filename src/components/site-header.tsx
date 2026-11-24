"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { company, nav } from "@/data/site";
import { cn } from "cn";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-40">
      <div className="h-1 bg-signal" />
      <header className="border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link href="/" className="min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss">
            <span className="block font-serif text-xl leading-none tracking-tight text-ink">
              {company.name}
            </span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
              LLC
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const path = item.href.split("#")[0] || "/";
              const active =
                path !== "/services" &&
                (pathname === path || pathname.startsWith(`${path}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium text-ink-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss",
                    active && "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={close}
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
            >
              Contact
            </Link>
          </nav>

          <Button
            variant="outline"
            size="icon"
            className="size-11 lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>

        {open ? (
          <nav
            id="site-menu"
            aria-label="Mobile"
            className="border-t border-line px-5 py-4 lg:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-3 text-lg text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={close}
                  className="mt-2 block bg-moss px-4 py-3 text-center text-base font-medium text-paper"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
