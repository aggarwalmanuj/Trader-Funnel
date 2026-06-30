export type Tier = {
  name: string;
  price: string;
  body: string;
  note: string | null;
  featured: boolean;
};

// Verbatim from AI_Merge_Traders_Landing_Page_V2.md — "What you receive at each level".
// First four render in a row; Elevated renders full-width on the dark band below.
export const TIERS: Tier[] = [
  {
    name: "Belief Score",
    price: "Free",
    body: "Five questions. Your score across four dimensions appears instantly. The pattern that has been running your results — named clearly for the first time.",
    note: null,
    featured: false,
  },
  {
    name: "Full Report",
    price: "USD $47",
    body: "Your exact answers reflected back with the mechanism underneath them visible. Concrete next moves specific to you.",
    note: null,
    featured: false,
  },
  {
    name: "Your Purpose Story",
    price: "USD $497",
    body: "Your first personalised narrative built from your life. Yours permanently. What you do with it is revealed when you begin.",
    note: "Credited in full toward the Protocol if you upgrade within 30 days.",
    featured: false,
  },
  {
    name: "Four-Week Protocol",
    price: "USD $1,997",
    body: "Four personalised narratives — one per week. Purpose, Past, Future, Integration. Weekly check-ins. 28-day Signal Wall. Money-back guarantee: complete the intake, engage for 14 days, submit your midpoint reflection — if nothing has shifted, full refund.",
    note: null,
    featured: true,
  },
];

export const ELEVATED: Tier = {
  name: "Elevated",
  price: "USD $4,997",
  body: "Everything in the Protocol — extended to eight weeks, professionally produced audio with carefully designed soundscapes, direct practitioner access throughout.",
  note: null,
  featured: false,
};

export const GUARANTEE_NOTE =
  "Money-back guarantee: complete the intake, engage for 14 days, submit your midpoint reflection — if nothing has shifted, full refund.";
