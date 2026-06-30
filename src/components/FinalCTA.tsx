import Image from "next/image";
import { Heading, PrimaryButton } from "@/components/ui/primitives";
import { CTA_LABEL } from "@/data/navigation";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden px-6 py-24 text-text-light sm:px-8 sm:py-28"
    >
      {/* Atmospheric background image + teal overlay for readability */}
      <Image
        src="/cta-bg.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,45,61,0.82) 0%, rgba(16,45,61,0.92) 100%)",
        }}
      />

      <div className="reveal relative mx-auto max-w-3xl text-center">
        <Heading tone="dark" className="!text-[4.6rem] !leading-[1.094]">
          See yourself clearly.
          <span className="mt-2 block italic text-text-light/80">
            Believe yourself. Build from that belief.
          </span>
        </Heading>

        <div className="mt-10">
          <PrimaryButton variant="accent">{CTA_LABEL} →</PrimaryButton>
        </div>

        <p className="mt-6 text-sm text-text-light/55">
          Free · Under 10 minutes · No credit card required
        </p>

        <p className="mt-10 font-serif text-base italic text-text-light/45">
          Want the full picture?{" "}
          <span className="text-text-light/70">
            Read the complete AI Merge Overview →
          </span>
        </p>
      </div>
    </section>
  );
}
