import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION } from "@/features/cases/jsonld";
import { env } from "@/lib/server/env";
import { isIndexable } from "@/lib/site";
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
  description: SITE_DESCRIPTION,
  openGraph: { siteName: "Coldspot", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: isIndexable(env.NEXT_PUBLIC_SITE_URL) ? undefined : { index: false, follow: false },
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
