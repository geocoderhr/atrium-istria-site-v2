import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";

export const googleVerificationToken = "DzhUcTDCmzP2t4HJb054cacHl4oaEOGgCwbc3ezZY4A";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Atrium Istria",
    template: "%s | Atrium Istria"
  },
  description:
    "Građevinski radovi u Puli i Istri: adaptacije, kupaonice, fasade, rekonstrukcije i hidroizolacija s jasnim procesom i preglednom komunikacijom.",
  verification: {
    google: googleVerificationToken
  }
};
