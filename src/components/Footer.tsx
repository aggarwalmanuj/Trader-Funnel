import Link from "next/link";
import { FOOTER_GROUPS, CONTACT_EMAIL } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-bg-alt px-6 py-20 text-text sm:px-8">
      <div className="mx-auto w-full max-w-content">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* Brand + tagline */}
          <div>
            <Link
              href="#top"
              className="font-serif text-2xl tracking-tight text-text"
            >
              AI&nbsp;Merge
            </Link>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-text-muted">
              See yourself clearly. Believe yourself. Build from that belief.
            </p>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.95rem] text-text-muted transition-colors hover:text-text"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-2 border-t border-[var(--color-border)] pt-8 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-text"
            >
              {CONTACT_EMAIL}
            </Link>{" "}
            · traders.aimerge.live
          </p>
          <p className="leading-relaxed">
            © Manuj Aggarwal &amp; TetraNoodle Technologies · Mensa Research
            Journal, Vol. 56, No. 2, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
