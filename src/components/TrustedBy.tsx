import Image from "next/image";
import { Eyebrow, Heading } from "@/components/ui/primitives";

const TRUST_LOGOS = [
  { src: "/logos/microsoft.png", alt: "Microsoft" },
  { src: "/logos/ibm.png", alt: "IBM" },
  { src: "/logos/tmobile.png", alt: "T-Mobile" },
  { src: "/logos/pearson.png", alt: "Pearson" },
  { src: "/logos/un.png", alt: "United Nations" },
];

const CREDENTIALS = [
  { label: "Patents", value: "Four in human-AI decision systems" },
  { label: "Published", value: "Mensa Research Journal" },
];

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="bg-bg-alt px-6 py-24 text-text sm:px-8 sm:py-28">
      <div className="mx-auto grid w-full max-w-content gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="reveal">
          <Eyebrow dot>Trusted by</Eyebrow>
          <Heading className="mt-5">
            The work composed{" "}
            <span className="font-serif italic text-text-muted">
              behind the reading.
            </span>
          </Heading>
        </div>

        <div className="reveal">
          <ul className="flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between sm:gap-x-12">
            {TRUST_LOGOS.map((logo) => (
              <li
                key={logo.alt}
                className="relative h-9 w-24 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-28"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(min-width: 640px) 112px, 96px"
                  className="object-contain"
                />
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex items-baseline justify-between gap-4 border-t border-strong py-4"
              >
                <dt className="eyebrow shrink-0 text-text-muted/70">{c.label}</dt>
                <dd className="text-right font-medium text-text">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
