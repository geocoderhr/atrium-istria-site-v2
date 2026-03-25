import { redirect } from "next/navigation";

import { defaultLocale } from "@/lib/routing/locales";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
