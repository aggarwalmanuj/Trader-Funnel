import { Eyebrow, Heading } from "@/components/ui/primitives";
import { TIERS, ELEVATED, type Tier } from "@/data/pricing";

const ALL_TIERS: Tier[] = [...TIERS, ELEVATED];

function Check({ dark }: { dark: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-1 flex-none ${dark ? "text-text-light/80" : "text-accent"}`}
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceCard({ tier }: { tier: Tier }) {
  // The "Most chosen" tier gets the dark, elevated treatment.
  const dark = tier.featured;
  return (
    <article
      className={`reveal group flex h-full flex-col rounded-2xl border p-8 text-left transition-all duration-300 ease-out hover:-translate-y-2 ${
        dark
          ? "border-white/10 bg-gradient-to-b from-[#1f4c61] to-[#173A4B] text-text-light shadow-[0_10px_34px_-2px_rgba(0,0,0,0.14),0_2.3px_7.8px_-1.3px_rgba(0,0,0,0.11),inset_0_-1px_0_0_rgba(26,25,25,0.12)] hover:border-signal/40 hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.32)] lg:-translate-y-3 lg:hover:-translate-y-5"
          : "border-[var(--color-border)] bg-[#173A4B] text-text shadow-[0_5.1px_9.2px_-3.75px_rgba(0,0,0,0.03),0_16px_28.8px_-5px_rgba(0,0,0,0.02),inset_0_-1px_0_0_rgba(10,10,10,0.06)] hover:border-signal/40 hover:shadow-[0_20px_44px_-10px_rgba(0,0,0,0.28)]"
      }`}
    >
      {dark && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-text-light">
          Most chosen
        </span>
      )}
      <h3 className={`font-serif text-lg ${dark ? "text-text-light" : "text-text"}`}>
        {tier.name}
      </h3>
      <p
        className={`mt-2 font-serif text-5xl tracking-tight ${
          dark ? "text-text-light" : "text-text"
        }`}
      >
        {tier.price}
      </p>

      <div
        className={`mt-7 border-t border-dashed ${
          dark ? "border-white/15" : "border-[var(--color-border-strong)]"
        }`}
      />
      <p
        className={`mt-5 text-sm font-medium uppercase tracking-[0.14em] ${
          dark ? "text-text-light/55" : "text-text-soft"
        }`}
      >
        Includes
      </p>
      <ul className="mt-4 flex flex-1 flex-col gap-3">
        <li className="flex gap-3">
          <Check dark={dark} />
          <span
            className={`text-[0.95rem] leading-relaxed ${
              dark ? "text-text-light/80" : "text-text-muted"
            }`}
          >
            {tier.body}
          </span>
        </li>
        {tier.note && (
          <li className="flex gap-3">
            <Check dark={dark} />
            <span
              className={`text-[0.95rem] italic leading-relaxed ${
                dark ? "text-text-light/70" : "text-text-soft"
              }`}
            >
              {tier.note}
            </span>
          </li>
        )}
      </ul>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg px-6 py-24 text-text sm:px-8 sm:py-28">
      {/* Framer container: centered flex column, max-width 1180px, gap 64px */}
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-0 phone:px-10">
        <div className="reveal text-center">
          <Eyebrow dot>X · What You Receive</Eyebrow>
          <Heading className="mt-5">
            What you receive at each level
          </Heading>
        </div>

        {/* Top row: first three tiers */}
        <div className="grid w-full gap-6 lg:grid-cols-3 lg:items-stretch">
          {ALL_TIERS.slice(0, 3).map((t) => (
            <PriceCard key={t.name} tier={t} />
          ))}
        </div>

        {/* Bottom row: Protocol (dark / Most chosen) + Elevated */}
        <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
          {ALL_TIERS.slice(3).map((t) => (
            <PriceCard key={t.name} tier={t} />
          ))}
        </div>

        <p className="reveal max-w-3xl text-center text-sm leading-relaxed text-text-soft">
          Money-back guarantee: complete the intake, engage for 14 days, submit
          your midpoint reflection — if nothing has shifted, full refund.
        </p>
      </div>
    </section>
  );
}
