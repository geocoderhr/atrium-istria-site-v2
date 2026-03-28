"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  HEADER_SCROLL_THRESHOLD,
  HOME_SERVICES_SECTION_ID
} from "@/components/layout/site-header/site-header.constants";
import {
  GALLERY_OVERLAY_ATTRIBUTE,
  isGalleryOverlayOpen
} from "@/components/ui/modal/gallery-overlay";
import {
  getHeaderRouteModel,
  getNavigationKind,
  resolveActiveNav
} from "@/components/layout/site-header/site-header-model";
import { useHomeSectionTracking } from "@/components/layout/site-header/useHomeSectionTracking";
import { usePendingNavTarget } from "@/components/layout/site-header/usePendingNavTarget";
import { WORKS_PROJECTS_SECTION_ID } from "@/components/sections/radovi/works-context";
import { ActiveNav } from "@/components/layout/site-header/site-header.types";
import { Locale } from "@/content/types";
import { toTelHref } from "@/content/site-config";
import {
  clearLanguageSwitchSnapshot,
  normalizeLanguageSwitchHash,
  resolveLanguageSwitchTarget,
  shouldRestoreLanguageSwitchScroll,
  writeLanguageSwitchSnapshot
} from "@/lib/routing/language-switch";
import { trackEvent } from "@/lib/analytics/events";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const routeModel = getHeaderRouteModel(pathname);
  const {
    locale,
    siteConfig,
    navigation,
    homePath,
    worksPath,
    contactPath,
    isHomePage,
    isServicePage,
    activeLanguage,
    languageLinks
  } = routeModel;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const isLanguageSwitchPendingRef = useRef(false);
  const {
    pendingNavTarget,
    setPendingNavTarget,
    persistPendingNavTarget,
    clearPendingNavTarget
  } = usePendingNavTarget(isHomePage);
  const homeSection = useHomeSectionTracking({
    isHomePage,
    pendingNavTarget,
    onPendingNavTargetChange: setPendingNavTarget
  });

  const showBackdropStrip = !isHomePage || isScrolled;

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [pathname]);

  useEffect(() => {
    isLanguageSwitchPendingRef.current = false;
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const updateGalleryOverlayState = () => {
      setIsGalleryOpen(isGalleryOverlayOpen());
    };

    updateGalleryOverlayState();

    const observer = new MutationObserver(updateGalleryOverlayState);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [GALLERY_OVERLAY_ATTRIBUTE]
    });

    return () => observer.disconnect();
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  };

  const getHeaderOffset = () => {
    if (typeof window === "undefined") {
      return 0;
    }

    return window.matchMedia("(min-width: 1024px)").matches ? 96 : 80;
  };

  const isHomeServicesAnchorContext = () => {
    if (typeof window === "undefined") {
      return false;
    }

    const servicesSection = document.getElementById(HOME_SERVICES_SECTION_ID);
    if (!(servicesSection instanceof HTMLElement)) {
      return false;
    }

    const sectionTop = Math.max(
      servicesSection.getBoundingClientRect().top + window.scrollY - getHeaderOffset(),
      0
    );

    return Math.abs(window.scrollY - sectionTop) <= 240;
  };

  const handleLanguageSwitch = (targetLocale: Locale) => {
    closeMenus();

    if (isLanguageSwitchPendingRef.current || targetLocale === locale || typeof window === "undefined") {
      return;
    }

    let nextHash = normalizeLanguageSwitchHash(window.location.hash);
    const nextTarget = resolveLanguageSwitchTarget({
      pathname,
      targetLocale,
      hash: nextHash,
      search: window.location.search
    });
    let restoreTargetId: string | null = null;
    let scrollY: number | null = shouldRestoreLanguageSwitchScroll(window.scrollY) ? window.scrollY : null;

    if (nextTarget.routeKind === "home") {
      if (isHomeServicesAnchorContext()) {
        nextHash = `#${HOME_SERVICES_SECTION_ID}`;
        restoreTargetId = HOME_SERVICES_SECTION_ID;
        scrollY = null;
      } else if (nextHash === `#${HOME_SERVICES_SECTION_ID}`) {
        nextHash = null;
      }
    }

    if (nextTarget.routeKind === "works") {
      const projectsSection = document.getElementById(WORKS_PROJECTS_SECTION_ID);

      if (projectsSection) {
        const projectsTop = projectsSection.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

        if (window.scrollY >= Math.max(projectsTop - 24, 0)) {
          restoreTargetId = WORKS_PROJECTS_SECTION_ID;
          scrollY = null;
        }
      }
    }

    const resolvedTarget = resolveLanguageSwitchTarget({
      pathname,
      targetLocale,
      hash: nextHash,
      search: window.location.search
    });
    const navigationHref = `${resolvedTarget.targetPathname}${resolvedTarget.targetSearch}`;

    const shouldWriteSnapshot =
      nextHash !== null || restoreTargetId !== null || scrollY !== null;

    if (shouldWriteSnapshot) {
      writeLanguageSwitchSnapshot({
        targetPathname: resolvedTarget.targetPathname,
        targetLocale,
        routeKind: resolvedTarget.routeKind,
        scrollY,
        hash: nextHash,
        restoreTargetId
      });
    } else {
      clearLanguageSwitchSnapshot();
    }

    clearPendingNavTarget();
    isLanguageSwitchPendingRef.current = true;
    trackEvent("atrium_language_switch", {
      pathname,
      from_locale: locale,
      to_locale: targetLocale,
      target_pathname: resolvedTarget.targetPathname
    });
    router.push(navigationHref, { scroll: false });
  };

  const handleHomeClick = () => {
    closeMenus();

    if (isHomePage) {
      setPendingNavTarget("top");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    persistPendingNavTarget("top");
    router.push(homePath);
  };

  const handleServicesClick = () => {
    closeMenus();

    if (isHomePage) {
      const target = document.getElementById(HOME_SERVICES_SECTION_ID);
      if (!target) {
        setPendingNavTarget(null);
        return;
      }

      setPendingNavTarget("services");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    persistPendingNavTarget("services");
    router.push(homePath);
  };

  const handleStandardNavClick = () => {
    clearPendingNavTarget();
    closeMenus();
  };
  const activeNav = resolveActiveNav({
    pathname,
    homePath,
    worksPath,
    contactPath,
    isServicePage,
    homeSection,
    pendingNavTarget
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-200 ${
        isGalleryOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 border-b border-white/10 bg-[rgba(39,55,72,0.52)] shadow-[0_10px_32px_rgba(18,25,33,0.22)] backdrop-blur-md transition-opacity duration-300 lg:h-24 ${
          showBackdropStrip ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link href={homePath} onClick={handleHomeClick} className="relative z-10 flex items-center">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-warm-orange shadow-lg shadow-warm-orange/20">
                <div className="relative h-[29px] w-[29px]">
                  <Image
                    src="/site/branding/white-logo-mark.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="29px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium tracking-tight text-white">{siteConfig.name}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {siteConfig.city} · {siteConfig.region}
                </span>
              </div>
            </div>
          </Link>

          <nav className="absolute left-1/2 hidden w-full max-w-2xl -translate-x-1/2 items-center justify-between gap-1 rounded-full border border-white/10 bg-[#ffffff45] px-3 py-2 backdrop-blur-sm lg:flex">
            {navigation.map((item) => {
              const kind: ActiveNav = getNavigationKind(item, { homePath, worksPath });
              const isActive = activeNav === kind;

              const className = `rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-white text-charcoal"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`;

              if (kind === "home") {
                return (
                  <button key={item.href} type="button" onClick={handleHomeClick} className={className}>
                    {item.label}
                  </button>
                );
              }

              if (kind === "services") {
                return (
                  <button key={item.href} type="button" onClick={handleServicesClick} className={className}>
                    {item.label}
                  </button>
                );
              }

              return (
                <Link key={item.href} href={item.href} onClick={handleStandardNavClick} className={className}>
                  {item.label}
                </Link>
              );
            })}

            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen((open) => !open)}
                className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{activeLanguage.code}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {langDropdownOpen ? (
                <div className="absolute right-0 top-full mt-2 min-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-charcoal/95 shadow-2xl">
                  {languageLinks.map((language) => {
                    return (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() => handleLanguageSwitch(language.code)}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors ${
                          language.isActive ? "bg-warm-orange text-white" : "text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                        aria-current={language.isActive ? "true" : undefined}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span>{language.label}</span>
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden w-[220px] flex-col gap-1 text-white/90 xl:flex">
              <a href={toTelHref(siteConfig.primaryPhone)} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.primaryPhone}</span>
              </a>
              <a href={toTelHref(siteConfig.secondaryPhone)} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white/85">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.secondaryPhone}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-xl p-2.5 text-white transition-all hover:bg-white/10 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-white/10 bg-charcoal/95 p-4 pb-5 shadow-2xl backdrop-blur-sm lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const kind: ActiveNav = getNavigationKind(item, { homePath, worksPath });
                const isActive = activeNav === kind;

                const className = `rounded-xl px-4 py-3 font-medium transition-all ${
                  isActive
                    ? "bg-white text-charcoal"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`;

                if (kind === "home") {
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={handleHomeClick}
                      className={`${className} text-left`}
                    >
                      {item.label}
                    </button>
                  );
                }

                if (kind === "services") {
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={handleServicesClick}
                      className={`${className} text-left`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleStandardNavClick}
                    className={className}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href={toTelHref(siteConfig.primaryPhone)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.primaryPhone}</span>
              </a>

              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                {languageLinks.map((language) => {
                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => handleLanguageSwitch(language.code)}
                      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-medium last:mb-0 ${
                        language.isActive ? "bg-warm-orange text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                      }`}
                      aria-current={language.isActive ? "true" : undefined}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
