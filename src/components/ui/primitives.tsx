import Link from "next/link";
import { CTA_HREF } from "@/data/navigation";

type Tone = "dark" | "light";

/* Full-bleed section with a centered max-width container. `bg` is a Tailwind
   bg-* class; `tone` flips default text color for dark bands. */
export function Section({
  id,
  bg,
  tone = "light",
  align = "center",
  className = "",
  children,
}: {
  id?: string;
  bg: string;
  tone?: Tone;
  align?: "center" | "left";
  className?: string;
  children: React.ReactNode;
}) {
  const inner =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";
  return (
    <section
      id={id}
      className={`${bg} ${tone === "dark" ? "text-text-light" : "text-text"} px-6 py-24 sm:px-8 sm:py-28 ${className}`}
    >
      <div className={`mx-auto flex w-full max-w-content flex-col ${inner}`}>
        {children}
      </div>
    </section>
  );
}

/* Tracked-uppercase chapter mark / eyebrow. `dot` adds the living signal
   dot from the reference; pair with a roman-numeral chapter label. */
export function Eyebrow({
  tone = "light",
  dot = false,
  className = "",
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`eyebrow text-text-muted/70 ${className}`}>
      {dot && <span className="pulse-dot mr-2.5" aria-hidden />}
      {children}
    </p>
  );
}

export function Heading({
  as: Tag = "h2",
  tone = "light",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3";
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={`t-h2 ${tone === "dark" ? "text-text-light" : "text-text"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* Primary CTA — dark pill by default; `variant` lets sections override fill. */
export function PrimaryButton({
  href = CTA_HREF,
  variant = "dark",
  className = "",
  children,
}: {
  href?: string;
  variant?: "dark" | "accent";
  className?: string;
  children: React.ReactNode;
}) {
  // Ported s-btn pill (uppercase tracked, ink fill, ghost-on-hover). The
  // `variant` is retained for API compatibility; both render the s-btn pill.
  void variant;
  return (
    <Link href={href} className={`s-btn sm:whitespace-nowrap ${className}`}>
      {children}
    </Link>
  );
}

/* Ghost / outline button — ported s-btn-ghost (outline, fills on hover). */
export function GhostButton({
  href,
  tone = "light",
  className = "",
  children,
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  void tone;
  return (
    <Link href={href} className={`s-btn-ghost sm:whitespace-nowrap ${className}`}>
      {children}
    </Link>
  );
}
