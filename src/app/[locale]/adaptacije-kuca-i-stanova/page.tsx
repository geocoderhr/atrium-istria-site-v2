import { redirect } from "next/navigation";

type ServicePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdaptacijeKucaIStanovaPage({ params }: ServicePageProps) {
  const { locale } = await params;
  redirect(`/${locale}#adaptacije-kuca-i-stanova`);
}
