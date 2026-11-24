import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

type CtaVariant = "default" | "outline" | "signal" | "ghost-light";

const extra: Record<CtaVariant, string> = {
  default: "h-12 px-5 text-[15px]",
  outline: "h-12 bg-transparent px-5 text-[15px]",
  signal: "h-12 bg-signal px-5 text-[15px] text-ink hover:bg-signal/80",
  "ghost-light":
    "h-12 border-paper/40 bg-transparent px-5 text-[15px] text-paper hover:bg-white/10 hover:text-paper",
};

export function CtaLink({
  href,
  children,
  variant = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  className?: string;
}) {
  const buttonVariant =
    variant === "signal" ? "default" : variant === "ghost-light" ? "outline" : variant;
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: buttonVariant, size: "lg" }),
        extra[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
