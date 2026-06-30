import type { Metadata } from "next";
import { Inter, Fraunces, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

// Inter — clean modern sans for body copy (matches scorecard-funnel).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fraunces — variable serif for editorial display + italic emphasis.
// Loaded as a VARIABLE font (no explicit `weight`) with the optical-size
// (opsz) + SOFT axes so large display headlines get the thin, high-contrast
// display cut — matching the scorecard-funnel reference exactly.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const hand = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://traders.aimerge.live"),
  title: "AI Merge — Traders | You can read the market.",
  description:
    "The gap between your analysis and your execution is a story running underneath your decisions. AI Merge finds it and gives it back to you in your own voice. Get your free Belief Score.",
  openGraph: {
    title: "AI Merge — Traders",
    description:
      "Something keeps stopping you from trusting what you see. The answer has been in your own voice all along.",
    url: "https://traders.aimerge.live",
    siteName: "AI Merge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${hand.variable}`}
    >
      <body className="font-sans antialiased" data-palette="marine">
        {children}
      </body>
    </html>
  );
}
