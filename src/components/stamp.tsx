import { cn } from "cn";

export function Stamp({
  children,
  tone = "moss",
}: {
  children: React.ReactNode;
  tone?: "moss" | "copper" | "paper";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
        tone === "moss" && "border-moss/30 text-moss",
        tone === "copper" && "border-copper/40 text-copper",
        tone === "paper" && "border-paper/30 text-paper",
      )}
    >
      <span className="size-1.5 bg-current" aria-hidden />
      {children}
    </span>
  );
}
