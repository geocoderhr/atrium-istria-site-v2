import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { createContactPageModule } from "@/lib/page-factories/create-contact-page-module";
import { createHomePageModule } from "@/lib/page-factories/create-home-page-module";
import { createPrivacyPageModule } from "@/lib/page-factories/create-privacy-page-module";
import { createServicePageModule } from "@/lib/page-factories/create-service-page-module";
import { createWorksPageModule } from "@/lib/page-factories/create-works-page-module";
import {
  getStaticPublicRouteParams,
  resolvePublicRouteFromSegments
} from "@/lib/routing/public-routes";

type RoutePageProps = {
  params: Promise<{ segments?: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getPageModule(routeSegments: string[] | undefined) {
  const routeMatch = resolvePublicRouteFromSegments(routeSegments);

  if (!routeMatch) {
    return null;
  }

  switch (routeMatch.routeKind) {
    case "home":
      return createHomePageModule(routeMatch.locale);
    case "service":
      return createServicePageModule(routeMatch.locale, routeMatch.slug);
    case "works":
      return createWorksPageModule(routeMatch.locale);
    case "contact":
      return createContactPageModule(routeMatch.locale);
    case "privacy":
      return createPrivacyPageModule(routeMatch.locale);
    default:
      return null;
  }
}

export function generateStaticParams() {
  return getStaticPublicRouteParams();
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return getPageModule(resolvedParams.segments)?.metadata ?? {};
}

export default async function MarketingPage({ params, searchParams }: RoutePageProps) {
  const resolvedParams = await params;
  const pageModule = getPageModule(resolvedParams.segments);

  if (!pageModule) {
    notFound();
  }

  const Page = pageModule.Page;
  return <Page searchParams={searchParams} />;
}
