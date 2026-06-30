import { Section, Eyebrow, Heading, GhostButton } from "@/components/ui/primitives";
import { CTA_HREF } from "@/data/navigation";

export default function Teams() {
  return (
    <Section id="teams" bg="bg-bg-alt">
      <div className="reveal max-w-3xl">
        <Eyebrow dot>VIII · Prop Firms &amp; Teams</Eyebrow>
        <Heading tone="dark" className="mt-5">
          Also available for trading teams and prop firms
        </Heading>
        <p className="lead !text-text-light mt-7 measure-wide">
          When a trading team operates from invisible patterns — fear of missing
          out, need to prove, aversion to loss at the wrong moments — those
          patterns show up in collective execution. AI Merge works for trading
          teams and prop firms. Same mechanism. Collective application.
        </p>
        <p className="mt-6 font-serif text-lg italic text-text-light/60">
          Choose individual or team when you click below.
        </p>
        <div className="mt-10">
          <GhostButton href={CTA_HREF} tone="dark">
            Get Your Free Belief Score →
          </GhostButton>
        </div>
      </div>
    </Section>
  );
}
