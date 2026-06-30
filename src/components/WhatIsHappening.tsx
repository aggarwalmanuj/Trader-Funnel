import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

export default function WhatIsHappening() {
  return (
    <Section id="the-gap" bg="bg-bg-alt" tone="dark" align="left">
      <div className="reveal max-w-prose">
        <Eyebrow dot>III · The Gap</Eyebrow>
        <Heading tone="dark" className="mt-5">
          What is actually happening
        </Heading>
      </div>

      <div className="reveal mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
        <div className="space-y-6 text-text-light/70">
          <p className="lead !text-text-light">
            Trading is not primarily a technical problem. Every trader who has
            been in the market long enough knows this — but most cannot say it
            out loud because it sounds like an excuse.
          </p>
          <p className="text-lg leading-relaxed">
            The gap between your analysis and your execution is not a knowledge
            gap. It is not a discipline gap.
          </p>
          <p className="text-lg leading-relaxed">
            It is a story running underneath your decisions. One that was there
            long before you ever placed a trade. One that activates at exactly
            the moment the stakes are real.
          </p>
        </div>

        {/* Isolated key line — pull-quote with oversized quote mark + accent rule */}
        <figure className="relative overflow-hidden rounded-3xl border border-light-soft bg-dark-card px-8 py-10 lg:px-10 lg:py-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-4 left-6 font-serif text-[7rem] leading-none text-accent/30 select-none"
          >
            &ldquo;
          </span>
          <blockquote className="relative mt-6 font-serif text-2xl italic leading-snug text-text-light sm:text-3xl">
            It is a story running underneath your decisions.
          </blockquote>
          <div className="mt-6 h-px w-16 bg-accent" />
        </figure>
      </div>

      {/* The turn — emphasized closing statement */}
      <p className="reveal mt-12 measure-wide font-serif text-3xl italic leading-snug text-text-light sm:text-4xl">
        Until you see that story clearly — it keeps winning.
      </p>
    </Section>
  );
}
