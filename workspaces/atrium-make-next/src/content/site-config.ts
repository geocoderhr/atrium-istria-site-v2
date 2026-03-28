import { Locale, NavigationItem, SiteConfig, SocialLink } from "@/content/types";
import { resolveSiteUrl } from "@/lib/seo/site-foundation";
import { defaultLocale } from "@/lib/routing/locales";

type FooterContent = {
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonLabel: string;
  about: string;
  servicesHeading: string;
  navigationHeading: string;
  contactHeading: string;
  locationLabel: string;
  primaryPhoneLabel: string;
  secondaryPhoneLabel: string;
  emailLabel: string;
  whatsAppLabel: string;
  telegramLabel: string;
  locationValue: string;
  copyrightLabel: string;
  privacyLabel: string;
  termsLabel: string;
};

type UiLabels = {
  learnMoreLabel: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
  openGalleryLabel: string;
  galleryThumbnailsLabel: string;
  closeGalleryLabel: string;
  previousImageLabel: string;
  nextImageLabel: string;
};

const sharedConfig = {
  name: "Atrium Istria",
  shortName: "Atrium Istria",
  siteUrl: resolveSiteUrl(),
  primaryPhone: "+385 99 3018 171",
  secondaryPhone: "+385 99 2008 994",
  email: "atriumgrhr@gmail.com",
  whatsAppUrl: "https://wa.me/385993018171",
  telegramUrl: "https://t.me/istriahr",
  facebookUrl: "https://www.facebook.com/renoviranje.istra",
  location: "Istra, Hrvatska",
  city: "Istra",
  region: "Hrvatska"
} as const;

export const sharedContactDetails = sharedConfig;

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const localizedSiteData: Record<
  Locale,
  {
    description: string;
    workHours: string[];
    navigation: NavigationItem[];
    footer: FooterContent;
    ui: UiLabels;
  }
> = {
  ru: {
    description: "Ремонт, реконструкция, фасады и гидроизоляция домов и квартир в Истрии.",
    workHours: [
      "Понедельник - Пятница: 8:00 - 17:00",
      "Суббота: 9:00 - 13:00",
      "Воскресенье: выходной"
    ],
    navigation: [
      { label: "Главная", href: "/" },
      { label: "Услуги", href: "/#usluge", scrollToId: "usluge" },
      { label: "Работы", href: "/radovi" },
      { label: "Контакты", href: "/kontakt" }
    ],
    footer: {
      newsletterTitle: "Следите за нашими проектами",
      newsletterDescription:
        "Подпишитесь на обновления и узнавайте о новых проектах, практических советах и идеях для ремонта и реконструкции в Истрии.",
      newsletterPlaceholder: "Ваш email",
      newsletterButtonLabel: "Подписаться",
      about:
        "Ремонт, реконструкция, фасады и гидроизоляция домов и квартир в Истрии с фокусом на качество и надёжную реализацию.",
      servicesHeading: "Услуги",
      navigationHeading: "Навигация",
      contactHeading: "Контакты",
      locationLabel: "Локация",
      primaryPhoneLabel: "Телефон 1",
      secondaryPhoneLabel: "Телефон 2",
      emailLabel: "Email",
      whatsAppLabel: "WhatsApp",
      telegramLabel: "Telegram",
      locationValue: "Istra, Hrvatska",
      copyrightLabel: "Все права защищены.",
      privacyLabel: "Конфиденциальность",
      termsLabel: "Условия использования"
    },
    ui: {
      learnMoreLabel: "Подробнее",
      previousSlideLabel: "Предыдущий слайд",
      nextSlideLabel: "Следующий слайд",
      openGalleryLabel: "Открыть фото",
      galleryThumbnailsLabel: "Миниатюры проекта",
      closeGalleryLabel: "Закрыть галерею",
      previousImageLabel: "Предыдущее фото",
      nextImageLabel: "Следующее фото"
    }
  },
  hr: {
    description: "Adaptacije, rekonstrukcije, fasade i hidroizolacija kuća i stanova u Istri.",
    workHours: [
      "Ponedjeljak - Petak: 8:00 - 17:00",
      "Subota: 9:00 - 13:00",
      "Nedjelja: zatvoreno"
    ],
    navigation: [
      { label: "Početna", href: "/hr" },
      { label: "Usluge", href: "/hr#usluge", scrollToId: "usluge" },
      { label: "Radovi", href: "/hr/radovi" },
      { label: "Kontakt", href: "/hr/kontakt" }
    ],
    footer: {
      newsletterTitle: "Pratite naše projekte",
      newsletterDescription:
        "Prijavite se za novosti i saznajte više o novim projektima, praktičnim savjetima i idejama za adaptaciju i rekonstrukciju u Istri.",
      newsletterPlaceholder: "Vaš email",
      newsletterButtonLabel: "Prijavi se",
      about:
        "Adaptacije, rekonstrukcije, fasade i hidroizolacija kuća i stanova u Istri s fokusom na kvalitetu i pouzdanu izvedbu.",
      servicesHeading: "Usluge",
      navigationHeading: "Navigacija",
      contactHeading: "Kontakt",
      locationLabel: "Lokacija",
      primaryPhoneLabel: "Telefon 1",
      secondaryPhoneLabel: "Telefon 2",
      emailLabel: "Email",
      whatsAppLabel: "WhatsApp",
      telegramLabel: "Telegram",
      locationValue: "Istra, Hrvatska",
      copyrightLabel: "Sva prava pridržana.",
      privacyLabel: "Privatnost",
      termsLabel: "Uvjeti korištenja"
    },
    ui: {
      learnMoreLabel: "Saznajte više",
      previousSlideLabel: "Prethodni slajd",
      nextSlideLabel: "Sljedeći slajd",
      openGalleryLabel: "Otvori fotografije",
      galleryThumbnailsLabel: "Minijature projekta",
      closeGalleryLabel: "Zatvori galeriju",
      previousImageLabel: "Prethodna fotografija",
      nextImageLabel: "Sljedeća fotografija"
    }
  }
};

export const languageOptions = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "hr", label: "Hrvatski", flag: "🇭🇷" }
] as const;

export const socialLinks: SocialLink[] = [
  { label: "WhatsApp", href: sharedConfig.whatsAppUrl, icon: "whatsapp" },
  { label: "Telegram", href: sharedConfig.telegramUrl, icon: "telegram" },
  { label: "Facebook", href: sharedConfig.facebookUrl, icon: "facebook" }
];

export function getSiteConfig(locale: Locale): SiteConfig {
  const localized = localizedSiteData[locale];

  return {
    ...sharedConfig,
    description: localized.description,
    locale,
    workHours: localized.workHours
  };
}

export function getMainNavigation(locale: Locale) {
  return localizedSiteData[locale].navigation;
}

export function getFooterContent(locale: Locale) {
  return localizedSiteData[locale].footer;
}

export function getUiLabels(locale: Locale) {
  return localizedSiteData[locale].ui;
}

export const siteConfig = getSiteConfig(defaultLocale);
