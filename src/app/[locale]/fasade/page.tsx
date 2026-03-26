import { redirect } from "next/navigation";

type ServicePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FasadePage({ params }: ServicePageProps) {
  const { locale } = await params;
  redirect(`/${locale}#fasade`);
}
