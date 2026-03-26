import { redirect } from "next/navigation";

type RadoviPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function RadoviPage({ params }: RadoviPageProps) {
  const { locale } = await params;
  redirect(`/${locale}#works`);
}
