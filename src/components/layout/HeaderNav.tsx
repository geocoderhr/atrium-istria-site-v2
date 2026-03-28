"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type HeaderNavProps = {
  locale: Locale;
};

const sectionIds = ["services", "works", "contact"] as const;

export function HeaderNav({ locale }: HeaderNavProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const ui = getUiCopy(locale);

  useEffect(() => {
    function syncHash() {
      const currentHash = window.location.hash.replace("#", "");
      setActiveHash(sectionIds.includes(currentHash as (typeof sectionIds)[number]) ? currentHash : "");
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const items = [
    { href: `/${locale}#services`, label: ui.navServices, id: "services" },
    { href: `/${locale}#works`, label: ui.navProjects, id: "works" },
    { href: `/${locale}#contact`, label: ui.navContact, id: "contact" }
  ];

  return (
    <nav className="site-nav" aria-label="Primary">
      {items.map((item) => (
        <Link key={item.id} href={item.href} className={activeHash === item.id ? "is-active" : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
