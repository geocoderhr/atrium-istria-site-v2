import { Locale } from "@/lib/routing/locales";

type UiCopy = {
  navServices: string;
  navProcess: string;
  navProjects: string;
  navContact: string;
  languageLabel: string;
  languageRussian: string;
  languageCroatian: string;
  footerRegion: string;
  openService: string;
  openContactPage: string;
  continueToContact: string;
  relatedService: string;
  directContactEyebrow: string;
  directContactTitle: string;
  directContactDescription: string;
  heroStartLabel: string;
  heroStartValue: string;
  storyBefore: string;
  storyWork: string;
  storyResult: string;
  consentTitle: string;
  consentDescription: string;
  consentAccept: string;
  consentReject: string;
  conversationAria: string;
  objectDescriptionAria: string;
};

const uiCopyByLocale: Record<Locale, UiCopy> = {
  ru: {
    navServices: "Услуги",
    navProcess: "Как работаем",
    navProjects: "Работы",
    navContact: "Контакт",
    languageLabel: "Язык",
    languageRussian: "Русский",
    languageCroatian: "Hrvatski",
    footerRegion: "Пула и Истрия",
    openService: "Открыть услугу",
    openContactPage: "Открыть страницу контакта",
    continueToContact: "Перейти к контакту",
    relatedService: "Открыть связанную услугу",
    directContactEyebrow: "Прямой контакт",
    directContactTitle: "Телефон и e-mail остаются сразу доступными.",
    directContactDescription:
      "Если удобнее, можно написать или позвонить напрямую. Страница устроена так, чтобы у тебя был и свободный ввод, и прямой контакт.",
    heroStartLabel: "Начало работы",
    heroStartValue: "Описание объекта, понимание объема и нормальный следующий шаг.",
    storyBefore: "Что было",
    storyWork: "Что сделали",
    storyResult: "Результат",
    consentTitle: "Cookies и аналитика",
    consentDescription:
      "Мы используем аналитику, чтобы понимать, какие страницы и обращения действительно работают. Можно принять или отклонить аналитические cookies.",
    consentAccept: "Принять аналитику",
    consentReject: "Отклонить",
    conversationAria: "Начало разговора",
    objectDescriptionAria: "Описание объекта"
  },
  hr: {
    navServices: "Usluge",
    navProcess: "Kako radimo",
    navProjects: "Radovi",
    navContact: "Kontakt",
    languageLabel: "Jezik",
    languageRussian: "Русki",
    languageCroatian: "Hrvatski",
    footerRegion: "Pula i Istra",
    openService: "Otvorite uslugu",
    openContactPage: "Otvorite kontakt stranicu",
    continueToContact: "Nastavite na kontakt",
    relatedService: "Otvorite povezanu uslugu",
    directContactEyebrow: "Direktan kontakt",
    directContactTitle: "Telefon i e-mail ostaju odmah dostupni.",
    directContactDescription:
      "Ako vam je jednostavnije, javite se direktno. Stranica je zamišljena tako da možete birati između slobodnog opisa i izravnog kontakta.",
    heroStartLabel: "Početak suradnje",
    heroStartValue: "Opis objekta, pregled opsega i konkretan sljedeći korak.",
    storyBefore: "Što je bilo",
    storyWork: "Što smo napravili",
    storyResult: "Rezultat",
    consentTitle: "Kolačići i analitika",
    consentDescription:
      "Koristimo analitiku kako bismo razumjeli koje stranice i upiti donose stvarne kontakte. Možete prihvatiti ili odbiti analitičke kolačiće.",
    consentAccept: "Prihvatite analitiku",
    consentReject: "Odbijte",
    conversationAria: "Početak razgovora",
    objectDescriptionAria: "Opis objekta"
  }
};

export function getUiCopy(locale: Locale): UiCopy {
  return uiCopyByLocale[locale];
}
