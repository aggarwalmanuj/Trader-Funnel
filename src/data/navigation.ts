export const CTA_HREF =
  "https://www.aimerge.live/challenge/audience?utm_source=traders&utm_medium=organic&utm_campaign=traders-doorway";

export const CTA_LABEL = "Get Your Free Belief Score";

// Compact label for tight spots (navbar) where the full label overflows.
export const CTA_LABEL_SHORT = "Free Belief Score";

export const NAV_LINKS = [
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
] as const;

export const CONTACT_EMAIL = "feedback@tetranoodle.com";

export const FOOTER_GROUPS = [
  {
    title: "Overview",
    links: [
      { label: "What AI Merge does", href: "#about" },
      { label: "Stories", href: "#stories" },
      { label: "Is this for you?", href: "#fit" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Get Your Free Belief Score", href: CTA_HREF },
      { label: "Teams & prop firms", href: "#teams" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
  },
] as const;
