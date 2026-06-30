import { Section, Eyebrow, Heading } from "@/components/ui/primitives";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="stories" bg="bg-bg" tone="dark">
      <div className="reveal text-center">
        <Eyebrow dot>V · Voices</Eyebrow>
        <Heading tone="dark" className="mt-5">
          What people experienced
        </Heading>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="reveal flex h-full flex-col justify-between rounded-3xl border border-light-soft bg-dark-card p-8"
          >
            <blockquote className="font-serif text-xl italic leading-relaxed text-text-light">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-text-light/60">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
