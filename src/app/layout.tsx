import type { Metadata } from "next";

import "@/styles/tokens.css";
import "@/styles/globals.css";
import { baseMetadata } from "@/lib/seo/site-metadata";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
