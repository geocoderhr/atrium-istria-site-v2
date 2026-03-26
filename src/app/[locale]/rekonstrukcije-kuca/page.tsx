import { redirect } from "next/navigation";

type ServicePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function RekonstrukcijeKucaPage({ params }: ServicePageProps) {
  const { locale } = await params;
  redirect(`/${locale}#rekonstrukcije-kuca`);
}
