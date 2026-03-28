"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

import { getServicePages } from "@/content/locales";
import { getPrivacyPolicyPath } from "@/content/privacy-policy";
import { getFooterContent, getMainNavigation, getSiteConfig, socialLinks, toTelHref } from "@/content/site-config";
import { getLocaleFromPathname } from "@/lib/routing/locales";

const socialIconMap = {
  whatsapp: MessageCircle,
  telegram: Send,
  facebook: Facebook
};

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const privacyHref = getPrivacyPolicyPath(locale);
  const siteConfig = getSiteConfig(locale);
  const footer = getFooterContent(locale);
  const navigation = getMainNavigation(locale);
  const [email, setEmail] = useState("");
  const serviceLinks = Object.values(getServicePages(locale)).map((page) => ({
    href: page.meta.path,
    label: page.hero.title
  }));

  return (
    <footer className="bg-charcoal text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="mb-4 text-3xl font-medium lg:text-4xl">
                {footer.newsletterTitle.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-warm-orange">{footer.newsletterTitle.split(" ").slice(-1)}</span>
              </h3>
              <p className="text-lg text-white/70">{footer.newsletterDescription}</p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setEmail("");
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footer.newsletterPlaceholder}
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-warm-orange"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-warm-orange px-8 py-4 font-medium text-white transition-all hover:bg-warm-orange-dark hover:shadow-xl"
              >
                {footer.newsletterButtonLabel}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-6 flex items-center gap-2.5">
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

            <p className="mb-6 leading-relaxed text-white/70">{footer.about}</p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = socialIconMap[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-warm-orange hover:bg-warm-orange"
                    aria-label={social.label}
                  >
                    <SocialIcon className="h-5 w-5 text-white/70 transition-colors group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">{footer.servicesHeading}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center text-white/70 transition-colors hover:text-warm-orange">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-warm-orange/50 transition-colors group-hover:bg-warm-orange" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">{footer.navigationHeading}</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center text-white/70 transition-colors hover:text-warm-orange">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-warm-orange/50 transition-colors group-hover:bg-warm-orange" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">{footer.contactHeading}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <MapPin className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.locationLabel}</div>
                  <span className="text-white/90">{footer.locationValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <Phone className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.primaryPhoneLabel}</div>
                  <a href={toTelHref(siteConfig.primaryPhone)} className="text-white/90 transition-colors hover:text-warm-orange">
                    {siteConfig.primaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <Phone className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.secondaryPhoneLabel}</div>
                  <a href={toTelHref(siteConfig.secondaryPhone)} className="text-white/90 transition-colors hover:text-warm-orange">
                    {siteConfig.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <Mail className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.emailLabel}</div>
                  <a href={`mailto:${siteConfig.email}`} className="break-all text-white/90 transition-colors hover:text-warm-orange">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <MessageCircle className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.whatsAppLabel}</div>
                  <a
                    href={siteConfig.whatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/90 transition-colors hover:text-warm-orange"
                  >
                    {siteConfig.primaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <Send className="h-4 w-4 text-warm-orange" />
                </div>
                <div>
                  <div className="mb-0.5 text-xs text-white/50">{footer.telegramLabel}</div>
                  <a
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/90 transition-colors hover:text-warm-orange"
                  >
                    @istriahr
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. {footer.copyrightLabel}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href={privacyHref} className="text-white/50 transition-colors hover:text-warm-orange">
              {footer.privacyLabel}
            </Link>
            <span className="text-white/50 transition-colors hover:text-warm-orange">{footer.termsLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
