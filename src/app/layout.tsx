import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import { env } from "@/lib/server/env";
import "./globals.css";

// Self-hosted at build time: no request to Google from the visitor's browser, and no layout shift.
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: { default: "Coldspot", template: "%s · Coldspot" },
  description:
    "Something happened here. Famous unexplained cases and people's own strange encounters on one globe. Drag the map and whatever reaches the ring tunes in.",
  openGraph: { siteName: "Coldspot", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#110E18",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
