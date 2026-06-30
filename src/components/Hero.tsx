"use client";

import Image from "next/image";
import { PrimaryButton, GhostButton } from "@/components/ui/primitives";
import { CTA_LABEL } from "@/data/navigation";
import {
  CursorHalo,
  LetterReveal,
  ParallaxImage,
  Reveal,
  WordReveal,
} from "@/components/ui/motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] items-center"
      id="top"
    >
      <div className="mx-auto w-full max-w-wide px-6 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-14 lg:px-16 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 text-text-muted/70 sm:mb-8">
              <span className="pulse-dot mr-2.5" aria-hidden />
              <LetterReveal text="I · AI Merge for Traders" />
            </p>

            {/* Massive serif headline — word-by-word reveal, italic emphasis. */}
            <h1 className="hero-headline [overflow-wrap:break-word]">
              <WordReveal
                segments={[
                  { kind: "text", text: "You can read the" },
                  { kind: "italic", text: "market." },
                  { kind: "br" },
                  {
                    kind: "text",
                    text: "Something stops you trusting what you see.",
                  },
                ]}
              />
            </h1>

            <Reveal
              as="div"
              delay={300}
              className="mt-7 max-w-xl space-y-4 text-[15.5px] leading-[1.7] text-text-muted/90 sm:mt-10 sm:space-y-5 sm:text-[1.05rem] sm:leading-[1.75]"
            >
              <p>
                The gap between your analysis and your execution isn&rsquo;t a
                knowledge gap. The answer has been in your own voice all along
                &mdash; you just haven&rsquo;t heard it clearly yet.
              </p>
            </Reveal>

            <Reveal
              as="div"
              delay={500}
              className="mt-9 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row"
            >
              <PrimaryButton>{CTA_LABEL}</PrimaryButton>
              <GhostButton href="#about" tone="dark">
                See how it works
              </GhostButton>
            </Reveal>

            {/* Free / no-card reassurance — grouped tight under the CTA */}
            <Reveal
              as="p"
              delay={600}
              className="mt-5 text-[0.74rem] leading-snug tracking-wide text-text-muted/70 sm:mt-6 sm:text-[0.78rem]"
            >
              <span className="font-serif text-[15px] text-ink sm:text-base">
                Absolutely free.
              </span>
              <span className="mx-2 text-text-muted/40">·</span>
              No credit card required
            </Reveal>

            <Reveal
              as="div"
              delay={700}
              className="mt-14 flex items-center gap-4 sm:mt-16 sm:gap-6"
            >
              <span className="hairline-anim block h-px w-10 bg-text-muted/40 sm:w-12" />
              <p className="text-[0.74rem] leading-snug tracking-wide text-text-muted/70 sm:text-[0.78rem]">
                <span className="font-serif text-[15px] text-ink underline-draw sm:text-base">
                  Peer-reviewed.
                </span>
                <span className="mx-2 text-text-muted/40">·</span>
                Mensa Research Journal · Manuj Aggarwal
              </p>
            </Reveal>
          </div>

          {/* Right — atmospheric image with halo + cursor-follow + parallax */}
          <Reveal as="div" delay={200} className="lg:col-span-5 lg:mt-16">
            <CursorHalo>
              <div className="signal-halo relative">
                <ParallaxImage amount={28}>
                  <div className="img-hover-zoom relative overflow-hidden rounded-sm">
                    <Image
                      src="/trading1.jpg"
                      alt="The market, read clearly — the calm a reading is meant to compose"
                      width={1500}
                      height={2000}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="h-72 w-full animate-ken-burns object-cover sm:h-[30rem] lg:h-[42rem]"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </ParallaxImage>
              </div>
            </CursorHalo>

            <div className="mt-5 flex items-start justify-end gap-4 sm:mt-6 sm:gap-6">
              <p className="max-w-56 text-right font-serif-italic text-[13px] leading-snug text-text-muted/80 sm:text-sm">
                &ldquo;The reading doesn&rsquo;t give you new information. It
                gives you the language for what you already knew.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
