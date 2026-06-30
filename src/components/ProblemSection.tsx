import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

export default function ProblemSection() {
  return (
    <Section id="problem" bg="bg-bg-alt" align="left">
      <div className="reveal max-w-prose">
        <Eyebrow dot>II · The Pattern</Eyebrow>
        <Heading className="mt-5">
          Does this sound like your trading week?
        </Heading>
      </div>

      {/* Lede — full-width entry point */}
      <p className="reveal lead mt-8 measure-wide">
        You have a plan. A good one. You have done the analysis, identified the
        setup, know the entry and exit.
      </p>

      {/* Body + pull-quote sidebar */}
      <div className="reveal mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="body measure space-y-6">
          <p>
            Then the moment arrives and something shifts. You hesitate. You move
            the stop. You cut the winner early. You hold the loser longer than
            you said you would.
          </p>
          <p>
            Afterward you know exactly what you should have done. You always know
            afterward.
          </p>
          <p>
            You tell yourself: I just need more discipline. More screen time. A
            better system.
          </p>
        </div>

        {/* Pull quote — sidebar */}
        <figure className="self-start border-l-2 border-accent pl-6">
          <blockquote className="font-serif text-2xl italic leading-snug text-text">
            &ldquo;It shifted something within. It&rsquo;s something I&rsquo;m
            going to be reading over and over again.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-text-soft">
            — Oliver, Real Estate, Marbella
          </figcaption>
        </figure>
      </div>

      {/* The turn — emphasized closing statement */}
      <p className="reveal mt-12 measure-wide font-serif text-2xl leading-snug text-text sm:text-3xl">
        But you have screen time. You have a system. And the same pattern keeps
        appearing — not in your analysis, but in the moment of execution.
      </p>
    </Section>
  );
}
