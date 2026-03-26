import { redirect } from "next/navigation";

type KontaktPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ opis?: string }>;
};

export default async function KontaktPage({ params, searchParams }: KontaktPageProps) {
  const { locale } = await params;
  const { opis } = await searchParams;
  const query = opis ? `?opis=${encodeURIComponent(opis)}` : "";
  redirect(`/${locale}${query}#contact`);
}
