import type { Metadata } from "next";

export function buildPlaceholderMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    robots: {
      index: false,
      follow: true
    }
  };
}
