import { Section, Eyebrow, Heading } from "@/components/ui/primitives";

const YES = [
  "You have the knowledge and the systems but execution keeps breaking down",
  "You are willing to look honestly at what is running underneath your decisions",
  "You understand that the psychological edge is the last real edge in trading",
];

const NO = [
  "You believe your trading problems are purely technical",
  "You want a quick fix",
  "You are not ready to see something true about yourself",
];

export default function IsThisForYou() {
  return (
    <Section id="fit" bg="bg-bg-alt">
      <div className="reveal text-center">
        <Eyebrow dot>IX · Fit</Eyebrow>
        <Heading className="mt-5">
          Is this for you?
        </Heading>
      </div>

      <div className="reveal mt-14 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[var(--color-border-strong)]">
        <div className="md:pr-12">
          <h3 className="font-serif text-2xl text-text">Yes, if:</h3>
          <ul className="mt-6 space-y-5">
            {YES.map((y, i) => (
              <li key={i} className="flex gap-3 text-lg leading-relaxed text-text-muted">
                <span aria-hidden className="mt-1 font-semibold text-accent">
                  +
                </span>
                <span>{y}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-12">
          <h3 className="font-serif text-2xl text-text-soft">
            Not for you if:
          </h3>
          <ul className="mt-6 space-y-5">
            {NO.map((n, i) => (
              <li key={i} className="flex gap-3 text-lg leading-relaxed text-text-muted">
                <span aria-hidden className="mt-1 font-semibold text-text-soft">
                  −
                </span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
