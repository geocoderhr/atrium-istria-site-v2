import { AssistantTeaserContent, Locale } from "@/content/types";

export const assistantApiPath = "/api/assistant";

type AssistantModalContent = {
  badge: string;
  title: string;
  description: string;
  greeting: string;
  composerPlaceholder: string;
  sendLabel: string;
  consentTitle: string;
  consentDescription: string;
  consentCheckboxLabel: string;
  consentHint: string;
  continueLabel: string;
  privacyPrefix: string;
  privacyLabel: string;
  loadingLabel: string;
  emptyStateLabel: string;
  errorReply: string;
  fallbackTitle: string;
  fallbackDescription: string;
  contactCtaLabel: string;
  whatsAppCtaLabel: string;
  closeLabel: string;
};

const localizedAssistantTeaser: Record<Locale, AssistantTeaserContent> = {
  ru: {
    label: "Менеджер Atrium на связи",
    greeting: "Опишите объект или задайте вопрос. Мы сразу сориентируем вас по работам и следующему шагу.",
    placeholder: "Напишите, что вы планируете или что хотите уточнить...",
    suggestions: [
      { id: "bathroom", label: "Ремонт ванной", message: "Мне нужен ремонт ванной комнаты. С чего лучше начать?" },
      { id: "facade", label: "Фасад дома", message: "Хочу понять объём работ по фасаду дома и что нужно для оценки." },
      { id: "reconstruction", label: "Реконструкция", message: "Планирую реконструкцию дома. Какие данные вам нужны для первого шага?" },
      { id: "estimate", label: "Оценка работ", message: "Хочу получить первичную оценку работ по объекту в Истрии." }
    ],
    privacyNote: "Быстрый диалог помогает понять ваш проект и без лишнего ожидания перейти к следующему шагу.",
    privacyLinkLabel: "Политика конфиденциальности",
    launchLabel: "Открыть диалог с менеджером"
  },
  hr: {
    label: "Atrium manager je na vezi",
    greeting: "Opišite objekt ili postavite pitanje. Odmah ćemo vas usmjeriti prema radovima i sljedećem koraku.",
    placeholder: "Napišite što planirate ili što želite pitati...",
    suggestions: [
      { id: "bathroom", label: "Adaptacija kupaonice", message: "Trebam adaptaciju kupaonice. Od čega je najbolje krenuti?" },
      { id: "facade", label: "Fasada kuće", message: "Želim procijeniti radove na fasadi kuće i što vam treba za prvi pregled." },
      { id: "reconstruction", label: "Rekonstrukcija", message: "Planiram rekonstrukciju kuće. Koje informacije trebate za prvi korak?" },
      { id: "estimate", label: "Procjena radova", message: "Želim dobiti početnu procjenu radova za objekt u Istri." }
    ],
    privacyNote: "Brz razgovor pomaže razumjeti vaš projekt i bez čekanja prijeći na sljedeći korak.",
    privacyLinkLabel: "Politika privatnosti",
    launchLabel: "Otvori razgovor s managerom"
  }
};

const localizedAssistantModal: Record<Locale, AssistantModalContent> = {
  ru: {
    badge: "Менеджер Atrium",
    title: "Менеджер Atrium на связи",
    description: "Опишите объект, работы или задайте вопрос. Мы быстро сориентируем вас и подскажем следующий шаг.",
    greeting: "Здравствуйте. Опишите объект, тип работ или вопрос, и я сразу помогу сориентироваться по следующему шагу.",
    composerPlaceholder: "Напишите коротко об объекте, работах или вашем вопросе...",
    sendLabel: "Отправить",
    consentTitle: "Подтвердите согласие перед началом диалога",
    consentDescription: "Перед общением подтвердите, что вы ознакомились с политикой конфиденциальности и согласны на обработку сообщений в рамках вашего запроса.",
    consentCheckboxLabel: "Я согласен(на) на обработку сообщений и контактных данных для ответа на мой запрос.",
    consentHint: "Без подтверждения согласия диалог не начнётся.",
    continueLabel: "Начать диалог",
    privacyPrefix: "Продолжая, вы принимаете",
    privacyLabel: "политику конфиденциальности",
    loadingLabel: "Помощник готовит ответ...",
    emptyStateLabel: "Напишите вопрос своими словами или выберите готовый сценарий.",
    errorReply: "Не удалось получить ответ от помощника. Лучше перейти к контактам или написать нам напрямую.",
    fallbackTitle: "Если удобнее перейти к человеку",
    fallbackDescription: "Откройте контакты или WhatsApp, если хотите продолжить общение напрямую без ожидания.",
    contactCtaLabel: "Открыть контакты",
    whatsAppCtaLabel: "Написать в WhatsApp",
    closeLabel: "Закрыть"
  },
  hr: {
    badge: "Atrium manager",
    title: "Atrium manager je na vezi",
    description: "Opišite objekt, radove ili postavite pitanje. Brzo ćemo vas usmjeriti i predložiti sljedeći korak.",
    greeting: "Dobar dan. Opišite objekt, vrstu radova ili pitanje i odmah ću vam pomoći razumjeti sljedeći korak.",
    composerPlaceholder: "Napišite ukratko o objektu, radovima ili svom pitanju...",
    sendLabel: "Pošalji",
    consentTitle: "Potvrdite suglasnost prije početka razgovora",
    consentDescription: "Prije razgovora potvrdite da ste upoznati s politikom privatnosti i pristajete na obradu poruka u sklopu vašeg upita.",
    consentCheckboxLabel: "Pristajem na obradu poruka i kontaktnih podataka radi odgovora na moj upit.",
    consentHint: "Bez potvrde suglasnosti razgovor se neće pokrenuti.",
    continueLabel: "Pokreni razgovor",
    privacyPrefix: "Nastavkom prihvaćate",
    privacyLabel: "politiku privatnosti",
    loadingLabel: "Pomoćnik priprema odgovor...",
    emptyStateLabel: "Napišite pitanje svojim riječima ili odaberite gotov scenarij.",
    errorReply: "Od pomoćnika trenutno nije stigao odgovor. Najbolje je otvoriti kontakt ili nam pisati izravno.",
    fallbackTitle: "Ako vam je draži izravan kontakt",
    fallbackDescription: "Otvorite kontakt stranicu ili WhatsApp ako želite odmah nastaviti razgovor izravno.",
    contactCtaLabel: "Otvori kontakt",
    whatsAppCtaLabel: "Pišite na WhatsApp",
    closeLabel: "Zatvori"
  }
};

export function getAssistantTeaserContent(locale: Locale) {
  return localizedAssistantTeaser[locale];
}

export function getAssistantModalContent(locale: Locale) {
  return localizedAssistantModal[locale];
}
