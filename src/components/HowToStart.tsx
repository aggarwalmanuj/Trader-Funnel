import { Section, Eyebrow, Heading, PrimaryButton } from "@/components/ui/primitives";
import { CTA_LABEL } from "@/data/navigation";

export default function HowToStart() {
  return (
    <Section id="start" bg="bg-bg-alt">
      <div className="reveal mx-auto max-w-2xl text-center">
        <Eyebrow dot>VII · Start Here</Eyebrow>
        <Heading className="mt-5">
          Get your free Belief Score
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Five questions. Under ten minutes. Your score appears instantly — free.
          No credit card.
        </p>
        <div className="mt-10">
          <PrimaryButton>{CTA_LABEL}</PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
