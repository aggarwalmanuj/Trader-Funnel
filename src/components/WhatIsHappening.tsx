import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

export default function WhatIsHappening() {
  return (
    <Section id="the-gap" bg="bg-bg" tone="dark" align="left">
      <div className="reveal max-w-prose">
        <Eyebrow dot>III · The Gap</Eyebrow>
        <Heading tone="dark" className="mt-5">
          What is actually happening
        </Heading>
      </div>

      <div className="reveal mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
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

        {/* Isolated key line */}
        <div className="flex items-center self-stretch rounded-3xl border border-light-soft bg-dark-card p-8 lg:p-10">
          <p className="font-serif text-2xl italic leading-snug text-text-light sm:text-3xl">
            It is a story running underneath your decisions.
          </p>
        </div>
      </div>

      {/* The turn — emphasized closing statement */}
      <p className="reveal mt-12 measure-wide font-serif text-3xl italic leading-snug text-text-light sm:text-4xl">
        Until you see that story clearly — it keeps winning.
      </p>
    </Section>
  );
}
