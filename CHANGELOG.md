# Changelog

All notable changes to the Trader-Funnel landing page.

## [Unreleased]

### 2026-06-17 — Initial build

- Scaffolded Next.js 14 (App Router) + Tailwind CSS v3 + TypeScript directly in the `Trader-Funnel` root.
  - `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `.gitignore`.
- `app/globals.css`: light theme base (#FFFFFF / #F0F7FF), Georgia serif headings, system-ui body, pure-CSS `.reveal` scroll fade-in (respects `prefers-reduced-motion`).
- `app/layout.tsx`: metadata for traders.aimerge.live (title, description, OpenGraph).
- `app/page.tsx`: full single-page landing page with every word from `AI_Merge_Traders_Landing_Page_V2.md`, in order:
  1. Nav (logo + CTA), 2. Hero, 3. Trading week + Oliver quote, 4. What is actually happening,
  5. What AI Merge does (bold "Your own voice."), 6. Testimonials (4-quote grid),
  7. What changes (bullet list), 8. How to start, 9. Pricing (5 tiers, Protocol featured),
  10. Teams & prop firms, 11. Is this for you (Yes/No two-column), 12. Data & privacy, 13. Footer (final CTA + copyright).
- IntersectionObserver-driven fade-in reveal; numbered section eyebrows (I · … X ·); accent-blue (#1A55A0) CTAs.

### 2026-06-17 — taste-skill design pass

Applied the taste-skill (Leonxlnx/taste-skill) anti-slop rules where they did not conflict with the explicit brief (centered editorial layout, serif headings, and the fixed blue palette remain authoritative; em-dashes are kept because page copy is verbatim from the source MD):

- CTA buttons: added tinted diffusion shadow + tactile `:active` feedback (`translate-y-px`, shadow collapse) instead of a flat color-only hover.
- Testimonials: replaced the uniform 4-card grid (an "equal cards" AI tell) with an editorial alternating-offset layout — `divide-y` separators, large serif quote marks, left/right alternating alignment.
- Verified: clean production build (5.75 kB route, static prerender) and dev server returns HTTP 200 with content intact.

### 2026-06-17 — DM Sans display font + two-column hero

- Display typeface switched from Georgia serif to **DM Sans** (self-hosted via `next/font/google`, weights 400/500/600/700, `--font-dm-sans` variable on `<html>`). All `font-serif` usages replaced with `font-display`.
- Headings retuned to the requested spec: weight **500** (`font-medium`), near-black **#0A0A0A** (`text-display` token), tight line height. Hero H1 scales to **72px / 1.0 line-height** at `lg`.
- Hero rebuilt as a **two-column layout**: copy left-aligned on the left, a hero visual on the right. Visual is a CSS-composed "Belief Score" panel (4 dimension bars + score) — no broken image links; documented swap point for a real `<Image>` asset.
- Fixed earlier `.next` cache corruption by clearing the directory before building (production + dev must not share `.next`).
- Verified: clean production build (6.24 kB route) and dev server HTTP 200.

### 2026-06-17 — Hero alignment + full-viewport (avikto.com reference)

- Matched avikto.com's center-first alignment philosophy: hero reverted from the two-column split to a **single centered column** (eyebrow, H1, subline, CTA, then the visual centered below). Section headings already centered with constrained `max-w-3xl` columns; detailed body paragraphs stay left-aligned (matching avikto's "center headings, left-align detailed content" mixed strategy).
- Hero now **fills the viewport**: `min-h-[100dvh]` with flex centering (`items-center justify-center`), using `dvh` (not `h-screen`) to avoid iOS Safari layout jump. Decorative glow recentered behind the hero.
- Verified: clean build (6.23 kB) and dev server HTTP 200.

### 2026-06-17 — Hero pill + dual buttons + 3+2 pricing (avikto reference image)

- Removed the `traders.aimerge.live` eyebrow from the hero.
- Hero restructured to match the avikto reference image: a rounded **pill badge** ("The psychological edge is the last real edge in trading") above the headline, then headline → subline → **two side-by-side buttons** (primary "Get Your Free Belief Score →" + secondary outline "See how it works") → fine print → visual below.
- Pricing changed to a **3 + 2 layout**: first three tiers in the top row, the remaining two centered beneath them (bottom row constrained to 2/3 width and `mx-auto` at `lg`). Card markup extracted into a reusable `PriceCard` component.
- Verified: clean build (6.4 kB) and dev server HTTP 200.

### 2026-06-17 — Proper three-part navbar (avikto reference)

- Nav rebuilt to the avikto structure: **logo left** (now with a small "A" mark badge), **centered section links** (How it works → #what-it-is, Results → #results, Pricing → #pricing, Who it's for → #fit), **right actions** (Contact mailto link + CTA button).
- Added `id="fit"` to the "Is this for you" section so the nav link resolves; container widened to `max-w-6xl` to match the hero. Centered links use absolute positioning so logo and actions stay edge-aligned.
- Responsive: center links hide below `md`, Contact hides below `sm`, and the CTA label shortens to "Free Belief Score" on mobile.
- Verified: clean build and dev server HTTP 200.

### 2026-06-17 — Full rebuild: warm-earth palette, STIX/Inter/handwritten fonts, component architecture

Complete redesign per the new spec (Framer reference https://gray-clarity-275289.framer.app + Auditio/talent-network screenshots). `design.md` was referenced but does not exist in the repo, so the explicit rules in the prompt were treated as the design system.

- **File structure** moved from root `app/` to `src/`:
  - `src/app/` (layout, page, globals.css), `src/components/` (14 section components + `ui/` primitives + Reveal), `src/data/` (navigation, testimonials, pricing). Old root `app/` removed. `tsconfig` paths → `@/* → ./src/*`.
- **Palette** replaced blue theme with the warm taupe / dark-earth tokens (CSS vars in globals.css + Tailwind theme): bg #E1E0DC, bg-alt #CBC9C4, dark bands #161514 / #33322D / #3A3223 / #261D0E, accent #5D4F41.
- **Fonts** via `next/font/google`: STIX Two Text (serif headings, incl. italic), Inter (body/UI), Nothing You Could Do (handwritten accent), exposed as `--font-stix` / `--font-inter` / `--font-hand`.
- **14 sections** built to spec with dark/light alternation: Header (sticky + mobile hamburger menu), Hero (90vh, eyebrow, serif H1, dual buttons, two CSS-gradient dark cards, trust bar), Problem (#CBC9C4 + Oliver pull-quote card + 3 feature cards), What Is Happening (#161514 dark + isolated key-line card), What AI Merge Does (#E1E0DC + "Your own voice." between accent rules), Testimonials (#33322D, 2×2 grid), What Changes (5 accent-border list items), How To Start (centered CTA), Pricing (4 cards in a row + featured Protocol + full-width dark Elevated band + guarantee note), Teams (#261D0E dark, outline CTA), Is This For You (2-col with vertical divider, no cards), Data & Privacy (centered narrow), Final CTA (#161514, accent button), Footer (#261D0E, logo/nav/email + copyright).
- **Interactions**: pure-CSS scroll fade-up via a single IntersectionObserver (`Reveal`), button hover translateY(-1px) + darken, mobile menu toggle, all gated behind `prefers-reduced-motion`. (FAQ accordion CSS scaffolding added in globals.css but no FAQ section rendered — the source MD has no Q&A content, and the spec's section list does not include one; flagged rather than inventing copy.)
- All MD copy used verbatim. Verified: clean production build (8.24 kB route, all 3 fonts bundled, static prerender) and dev server HTTP 200 with all key content present.

### 2026-06-17 — design.md alignment (Framer design system) + FAQ accordion

The real `design.md` from Framer was provided and saved to the project root. Audited the build against it and aligned the design-system mechanics WITHOUT changing any AI Merge content (warm-earth palette from the brief continues to override design.md's generic starter palette, as the doc itself allows). Scope chosen: design-system only — did not invent template sections (Logos/Talent/Tabs/Compare/Contact) that have no AI Merge source content.

- **Breakpoints**: added design.md's `phone: 390px / tablet: 810px / desktop: 1440px` via `extend.screens` (kept Tailwind defaults so existing `sm/md/lg` utilities still work).
- **Container system**: `maxWidth` tokens now match design.md exactly — `wide: 1280px`, `content: 1120px`, `narrow: 820px`, `prose: 720px`.
- **Typography**: added `.hero-title` (clamp 3.5–8rem, lh 0.95, -0.04em) and `.section-title` (clamp 2.25–5rem, lh 1, -0.035em) editorial utilities; eyebrow retuned to design.md spec (0.75rem / 0.12em). Hero H1 now uses `.hero-title` clamp scale.
- **Accessibility**: global `:focus-visible { outline: 2px solid currentColor; outline-offset: 4px }`; reduced-motion hardened to the doc's global `*` belt-and-suspenders rule.
- **FAQ accordion** added (the one named design.md component with usable, non-fabricated copy): `src/components/FAQ.tsx` + `src/data/faq.ts` (the doc's own sample Q&A about the build process). Keyboard-accessible, `aria-expanded`/`aria-controls`, smooth grid-rows height transition, rotate-on-open icon. Placed after "Is this for you?", added "FAQ" to nav.
- Verified: clean build (9.15 kB route), dev server HTTP 200, FAQ + accordion a11y attributes present, all container tokens resolve.

### 2026-06-17 — Hero heading matched to exact Framer CSS

- Replaced the `.hero-title` clamp scale with the exact values from the Framer original: STIX Two Text, font-weight 400, font-size 4.6rem, line-height 1.1, letter-spacing -0.02em, color #1c1c1b, text-align center, font-feature-settings normal. Phone (<=809px) scales font-size to `clamp(2.5rem, 11vw, 4.6rem)` to avoid overflow.
- H1 wrapper max-width set to 860px (was max-w-5xl) to match the Framer `max-width: 860px`.
- Verified: clean build, dev server HTTP 200.

### 2026-06-17 — Pricing restyled to Framer 3-card pattern

- Reworked the pricing section to match the Framer reference (Starter / Growth-dark / Scale): the first three tiers render as a three-card row with the **centre card dark and elevated** (raised + scaled), a large serif price, a full-width "Start For Free"-style CTA per card, and an "Includes" checkmark list beneath. The two premium tiers (Four-Week Protocol — keeps its "Most chosen" badge — and Elevated) sit in a two-card row below; guarantee note centered at the end.
- Applied the Framer container spec: centered flex column, `max-width: 1180px`, `gap: 64px` (gap-16), `padding-inline: 40px` on phone.
- Content unchanged: tier names/prices/descriptions/notes verbatim from the MD; the "Includes" list shows each tier's existing description + note (no invented feature bullets). A briefly-added intro line was removed to keep copy strictly to source.
- Verified: clean build (9.15 kB), dev server HTTP 200, "Includes" card structure present.

### 2026-06-17 — Pricing: featured tier is the dark card; per-card buttons removed

- The dark/elevated treatment now follows the **featured tier (Four-Week Protocol)** — it carries the "Most chosen" badge and the dark card styling. Other tiers are light bordered cards. Layout: top row of three tiers, bottom row with the dark Protocol + Elevated.
- Removed the per-card CTA buttons entirely (redundant — the free Belief Score CTA already appears in nav, hero, How to start, and final CTA). Pricing is now informational: name → price → "Includes" checkmark list. Refactored to a single DRY `PriceCard` component driven by `tier.featured`.
- Verified: clean build (9.15 kB), dev server HTTP 200, "Most chosen" badge present, zero buttons/links in Pricing.

### 2026-06-17 — Footer rebuilt (light, multi-column) + section color rhythm fixed

- **Footer** rebuilt to the Framer reference: now on a **light** surface (`bg-alt`, was dark `dark-deep`), with brand + tagline on the left and three labeled link-group columns on the right (Overview / Get started / Contact), plus a bottom bar (email · domain / copyright). Footer links restructured into `FOOTER_GROUPS` data (replaces flat `FOOTER_LINKS`); no social URLs invented — Contact column uses the real email.
- **Color sequence fixed.** Two boundaries had no contrast (IsThisForYou `bg` → FAQ `bg`, and FinalCTA dark → Footer dark). New deliberate rhythm with contrast at every boundary: FAQ → `bg-alt`, DataPrivacy → `bg`, Footer → `bg-alt`. Full order: bg · bg-alt · DARK(gap) · bg · DARK(stories) · bg · bg-alt · bg(pricing) · DARK(teams) · bg · bg-alt · bg · DARK(final CTA) · bg-alt(footer). Dark bands now land only on the four key beats (the gap reveal, social proof, teams, final CTA).
- Verified: clean build (9.15 kB), dev server HTTP 200, footer groups render, no two identical adjacent section backgrounds.

### 2026-06-17 — Dark sections use black (not brown); dark cards lighter; "What AI Merge does" alignment fixed

- **Dark section backgrounds** all switched to the near-black `dark-bg #161514` (was brown earth tones): Testimonials (`dark-alt`→`dark-bg`), Teams (`dark-deep`→`dark-bg`). WhatIsHappening and FinalCTA were already `dark-bg`.
- **Cards on dark** now lift off the background: added a neutral `dark-card #252422` token (lighter than #161514, no brown). Testimonial cards (`dark-panel`→`dark-card`) and the WhatIsHappening key-line card (`dark-alt`→`dark-card`) use it.
- **"What AI Merge does" alignment fixed**: the heading was left-aligned (`max-w-prose`, no auto-margin) while the body blocks were `mx-auto` (centered) — so they didn't share a left edge. Removed `mx-auto` from all body blocks and the "Your own voice." accent so the whole section aligns to one consistent left-edge prose column (the accent rules are now left-aligned too, not centered).
- Verified: clean build (9.15 kB), HTTP 200; confirmed no brown section backgrounds remain.

### 2026-06-17 — Quick hierarchy fixes (deep research cancelled)

Deep-research workflow was started then stopped at the user's request (limit constraints). Applied targeted, low-cost hierarchy improvements instead of a full overhaul:
- Added a `.lead` utility (larger clamp 1.25–1.5rem, weight 500, full-contrast text) and applied it to the opening paragraph of Problem, What Is Happening (light override on dark), and What AI Merge Does — giving each prose block a clear entry point instead of an equal-weight stack.
- Removed the redundant 3 "feature cards" from the Problem section — they duplicated sentences already present in that section's own paragraphs.
- Verified: clean build (9.15 kB).

### 2026-06-18 — Editorial hierarchy redesign (one light research pass)

One quick source check (Butterick's Practical Typography) confirmed the targets: measure 45–90 chars, body 15–25px, line-height 1.3–1.65. Applied per-section hierarchy so prose stops reading as equal-weight stacks:
- **Type system**: added `.measure` (~38rem / ~65ch) and `.measure-wide` (~46rem) editorial line-length caps, a `.body` supporting-text style (de-emphasized, 1.65 lh), and tuned `.lead` (clamp 1.3–1.6rem, weight 500, tighter tracking).
- **Problem**: now four distinct levels — heading → full-width lede → body + pull-quote sidebar → the "But you have screen time…" turn pulled out as an emphasized serif statement.
- **What Is Happening**: payoff line "Until you see that story clearly — it keeps winning" extracted from the body into a large italic closing statement; supporting paragraphs de-emphasized under the lede.
- **What Changes**: flat identical rows replaced with a numbered stepped list (01–05); each item's key phrase leads, the dash-clause continuation is de-emphasized; intro became a lede + uppercase label.
- **What AI Merge Does / Teams**: prose constrained to editorial measure; Teams paragraph promoted to `.lead`.
- Content unchanged (verbatim). Verified: clean build (9.15 kB).
