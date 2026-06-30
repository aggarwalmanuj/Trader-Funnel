export type FAQItem = {
  question: string;
  answer: string;
};

// Sample Q&A from design.md (the Framer rebuild guide). These describe the
// build/process, not AI Merge marketing claims, so no source copy is invented.
export const FAQS: FAQItem[] = [
  {
    question: "How does the process begin?",
    answer:
      "It begins with a focused conversation around goals, context, constraints, and what success should feel like.",
  },
  {
    question: "Can the design be adapted later?",
    answer:
      "Yes. The design should be rebuilt as reusable components so future updates remain easy.",
  },
  {
    question: "Should the coded version match Framer exactly?",
    answer:
      "The coded version should preserve the visual system, responsive behavior, typography, and key section structure as closely as possible.",
  },
];
