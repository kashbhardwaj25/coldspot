import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION } from "@/features/cases/jsonld";
import { env } from "@/lib/server/env";
import { isIndexable } from "@/lib/site";
import { PALETTE } from "@/lib/tokens";
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
  title: { default: "Uncanny Map", template: "%s · Uncanny Map" },
  description: SITE_DESCRIPTION,
  openGraph: { siteName: "Uncanny Map", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: isIndexable(env.NEXT_PUBLIC_SITE_URL) ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: PALETTE.night,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>
        {children}
        {/* Cloudflare Web Analytics: page counts without cookies. Only when a token is set. */}
        {env.CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: env.CF_ANALYTICS_TOKEN })}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
