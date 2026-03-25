import type { Metadata } from "next";

import "@/styles/tokens.css";
import "@/styles/globals.css";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { StructuredData } from "@/components/seo/StructuredData";
import { baseMetadata } from "@/lib/seo/site-metadata";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>
        <AnalyticsNoScript />
        <StructuredData />
        <AnalyticsScripts />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
