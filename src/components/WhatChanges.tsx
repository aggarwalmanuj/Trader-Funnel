import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

// Split each report into its key phrase + supporting clause so the eye
// catches the lead first. Full text remains verbatim from the MD.
const CHANGES = [
  { lead: "Calmer during live trading", rest: "the emotional noise quiets" },
  { lead: "More consistent execution", rest: "following the plan becomes easier" },
  {
    lead: "Less focus on P&L, more focus on process",
    rest: "which paradoxically improves results",
  },
  {
    lead: "The patterns that used to trigger them stop having the same grip",
    rest: null,
  },
  { lead: "Decisions in trading and in life feel cleaner", rest: null },
];

export default function WhatChanges() {
  return (
    <Section id="changes" bg="bg-bg-alt">
      <div className="reveal max-w-prose">
        <Eyebrow dot>VI · The Shift</Eyebrow>
        <Heading className="mt-5">
          What changes
        </Heading>
      </div>

      <p className="reveal lead mt-8 measure">
        We do not promise specific trading outcomes. Markets are markets.
      </p>
      <p className="reveal mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-text-soft">
        What traders consistently report
      </p>

      <ol className="reveal mt-8 max-w-3xl divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {CHANGES.map((c, i) => (
          <li key={i} className="row-interactive flex items-baseline gap-5 py-6">
            <span className="row-num font-serif-italic text-2xl text-text-muted/40 tabular-nums sm:text-3xl">
              0{i + 1}
            </span>
            <span className="text-lg leading-relaxed text-text sm:text-xl">
              {c.lead}
              {c.rest && (
                <span className="text-text-muted"> — {c.rest}</span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
