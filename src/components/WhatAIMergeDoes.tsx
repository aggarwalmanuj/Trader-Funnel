import Image from "next/image";
import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

export default function WhatAIMergeDoes() {
  return (
    <Section id="about" bg="bg-bg" align="left">
      <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        {/* Left — the method copy */}
        <div>
          <div className="reveal max-w-prose">
            <Eyebrow dot>IV · The Method</Eyebrow>
            <Heading className="mt-5">
              What AI Merge does
            </Heading>
          </div>

          <div className="reveal mt-10 measure-wide space-y-6 text-lg leading-relaxed text-text-muted">
            <p className="lead">
              Not coaching. Not therapy. Not a trading psychology course.
            </p>
            <p>
              AI Merge finds the story running underneath your patterns. Not your
              trading patterns specifically — the deeper patterns that show up in
              trading because trading makes everything visible.
            </p>
            <p>
              We find that story. We give it back to you in the most powerful sound
              in the universe for any human being.
            </p>
          </div>

          {/* Isolated line with thin rules above/below — left-aligned focal moment */}
          <div className="reveal my-14">
            <div className="h-px w-24 bg-accent" />
            <p className="my-7 font-serif-italic text-4xl italic text-text sm:text-5xl">
              Your own voice.
            </p>
            <div className="h-px w-24 bg-accent" />
          </div>

          <div className="reveal measure-wide space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              What happens after you receive your story is something we reveal only
              once you begin. What we can tell you: the traders who have gone through
              this process describe a quality of calm during live trading that they
              had never experienced before.
            </p>
            <p className="text-base text-text-soft">
              AI Merge uses artificial intelligence as a precision instrument — not
              as a replacement for human judgment. Every narrative is reviewed by a
              trained practitioner before it reaches you.
            </p>
          </div>
        </div>

        {/* Right — calm portrait, vertically centered alongside the copy */}
        <div className="reveal">
          <div className="img-hover-zoom relative mx-auto overflow-hidden rounded-sm">
            <Image
              src="/voice.jpg"
              alt="A moment of calm — eyes closed, listening inward"
              width={1333}
              height={2000}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-80 w-full object-cover sm:h-[34rem] lg:h-[42rem]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
