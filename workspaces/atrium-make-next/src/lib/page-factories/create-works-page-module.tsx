import { WorksPage } from "@/components/sections/radovi/WorksPage";
import { StructuredData } from "@/components/ui/StructuredData";
import { getWorksPageContent } from "@/content/locales";
import { Locale } from "@/content/types";
import { buildWebPageJsonLd } from "@/lib/seo/build-json-ld";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { resolveWorksFilterFromSearchParamValue } from "@/lib/routing/language-switch";

type WorksPageSearchParams = Promise<Record<string, string | string[] | undefined>>;

export function createWorksPageModule(locale: Locale) {
  const worksPageContent = getWorksPageContent(locale);
  const metadata = buildPageMetadata(locale, worksPageContent.meta);

  async function Page({ searchParams }: { searchParams?: WorksPageSearchParams }) {
    const resolvedSearchParams = (await searchParams) ?? {};
    const initialFilter = resolveWorksFilterFromSearchParamValue(resolvedSearchParams.filter);

    return (
      <>
        <StructuredData data={buildWebPageJsonLd(locale, worksPageContent.meta)} />
        <WorksPage content={worksPageContent} locale={locale} initialFilter={initialFilter} />
      </>
    );
  }

  return {
    metadata,
    Page
  };
}
