"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, CTA_HREF, CTA_LABEL } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-3 px-6 sm:h-20 sm:px-8">
        {/* Logo — brand-mark renders /newui/logo.png masked to --ink */}
        <Link
          href="#top"
          aria-label="AIMerge home"
          className="group inline-flex shrink-0 items-center"
        >
          <span className="brand-mark brand-mark-sm sm:!w-[140px]" aria-hidden />
        </Link>

        {/* Center nav — desktop, animated underline draw on hover */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group/nav relative text-[0.78rem] uppercase tracking-[0.22em] text-text-muted transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ink transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right — CTA (desktop) + hamburger (mobile) */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={CTA_HREF}
            className="s-btn hidden text-[0.7rem] lg:inline-flex"
          >
            {CTA_LABEL}
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-text-muted/30 text-text-muted transition-all duration-300 hover:border-ink hover:bg-text-muted/5 hover:text-ink lg:hidden"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden fill="none">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden fill="none">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-bg px-6 pb-6 pt-2 lg:hidden"
        >
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-[0.82rem] uppercase tracking-[0.22em] text-text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href={CTA_HREF}
            onClick={() => setOpen(false)}
            className="s-btn mt-5 w-full"
          >
            {CTA_LABEL}
          </Link>
        </div>
      )}
    </header>
  );
}
