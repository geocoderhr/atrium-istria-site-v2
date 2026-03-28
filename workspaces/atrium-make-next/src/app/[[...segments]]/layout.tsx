import { RootLayoutBody } from "@/components/layout/RootLayoutBody";
import { rootMetadata } from "@/lib/seo/root-metadata";
import { resolvePublicRouteFromSegments } from "@/lib/routing/public-routes";
import "@/styles/index.css";

export const metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ segments?: string[] }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const resolvedParams = await params;
  const routeMatch = resolvePublicRouteFromSegments(resolvedParams.segments);
  const locale = routeMatch?.locale ?? "ru";

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <RootLayoutBody locale={locale}>{children}</RootLayoutBody>
    </html>
  );
}
