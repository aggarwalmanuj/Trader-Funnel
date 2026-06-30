import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // design.md breakpoints, added alongside the defaults (sm/md/lg still work).
      screens: {
        phone: "390px",
        tablet: "810px",
        desktop: "1440px",
      },
      // MARINE palette (ported from scorecard-funnel). Token names kept so
      // existing utility classes (bg-bg, text-text-muted, …) still resolve.
      colors: {
        bg: "#0F2C3B",
        "bg-alt": "#163A4D",
        surface: "#194254",
        "surface-card": "#163A4D",
        "dark-bg": "#0F2C3B",
        "dark-card": "#163A4D",
        "dark-alt": "#163A4D",
        "dark-panel": "#163A4D",
        "dark-deep": "#0A212C",
        text: "#EAF0F4",
        "text-muted": "#A8C4D0",
        "text-soft": "#95B5C4",
        "text-light": "#EAF0F4",
        accent: "#2A6B85",
        ink: "#EAF0F4",
        signal: "#5FC5D4",
      },
      borderColor: {
        DEFAULT: "#245A73",
        strong: "rgba(168, 196, 208, 0.32)",
        "light-soft": "rgba(168, 196, 208, 0.18)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      maxWidth: {
        wide: "1280px",
        content: "1120px",
        narrow: "820px",
        prose: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
