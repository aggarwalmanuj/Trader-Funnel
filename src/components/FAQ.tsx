"use client";

import { useState } from "react";
import { Eyebrow, Heading } from "@/components/ui/primitives";
import { FAQS } from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-bg px-6 py-24 text-text sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-narrow">
        <div className="reveal text-center">
          <Eyebrow dot>XI · Questions</Eyebrow>
          <Heading className="mt-5">
            Questions, answered clearly.
          </Heading>
        </div>

        <div className="reveal mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={i}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-serif text-lg text-text sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-[var(--color-border-strong)] text-text transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq-panel"
                  data-open={isOpen}
                >
                  <div>
                    <p className="pb-6 text-lg leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
