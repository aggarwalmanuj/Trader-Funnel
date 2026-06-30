import Link from "next/link";
import { Section, Heading } from "@/components/ui/primitives";
import { CONTACT_EMAIL } from "@/data/navigation";

export default function DataPrivacy() {
  return (
    <Section id="privacy" bg="bg-bg">
      <div className="reveal mx-auto max-w-2xl text-center">
        <Heading className="">
          Your data is safe
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Your information passes through our private systems. Selected team
          members may review your narratives for quality assurance. Your data is
          never shared or sold. Anonymised option available on request.
        </p>
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-block font-semibold text-accent transition-colors hover:text-text"
        >
          {CONTACT_EMAIL}
        </Link>
      </div>
    </Section>
  );
}
