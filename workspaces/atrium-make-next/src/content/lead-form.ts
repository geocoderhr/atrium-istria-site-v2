import { Locale } from "@/content/types";

export const leadFormUrl = "https://n8n.uslugeplus.com/form/7e77cd6b-3065-4540-bce5-2a91afa86963";

type LeadFormUi = {
  modalTitle: string;
  modalDescription: string;
  consentPrefix: string;
  privacyLabel: string;
  consentCheckboxLabel: string;
  consentRequiredHint: string;
  continueLabel: string;
  consentStepTitle: string;
  consentStepDescription: string;
  openExternalLabel: string;
  fallbackLabel: string;
  closeLabel: string;
  iframeTitle: string;
  contactCardDescription: string;
  contactCardItems: string[];
  launchLabel: string;
};

const localizedLeadFormUi: Record<Locale, LeadFormUi> = {
  ru: {
    modalTitle: "Форма заявки на работы",
    modalDescription:
      "Откроется внешняя форма Atrium Istria, где можно оставить контакты, описание работ, адрес объекта, фото, желаемый старт и ориентир по бюджету.",
    consentPrefix: "Отправляя заявку через форму, вы соглашаетесь с",
    privacyLabel: "политикой конфиденциальности",
    consentCheckboxLabel: "Я ознакомился(ась) с политикой конфиденциальности и согласен(на) на обработку данных для ответа на заявку.",
    consentRequiredHint: "Чтобы перейти к форме, нужно подтвердить согласие с политикой конфиденциальности.",
    continueLabel: "Продолжить к форме",
    consentStepTitle: "Подтвердите согласие перед заполнением",
    consentStepDescription:
      "Сначала подтвердите, что вы ознакомились с политикой конфиденциальности. После этого откроется полная форма заявки.",
    openExternalLabel: "Открыть отдельно",
    fallbackLabel: "Если форма не загрузилась внутри окна, откройте её в новой вкладке.",
    closeLabel: "Закрыть",
    iframeTitle: "Форма заявки Atrium Istria",
    contactCardDescription:
      "Мы открываем подробную форму в модальном окне, чтобы вы могли сразу отправить полноценный запрос на просмотр объекта и расчёт работ.",
    contactCardItems: [
      "Имя, телефон и e-mail для обратной связи",
      "Город и адрес объекта",
      "Описание работ, фото, сроки и бюджет"
    ],
    launchLabel: "Открыть форму заявки"
  },
  hr: {
    modalTitle: "Obrazac za upit radova",
    modalDescription:
      "Otvara se vanjski obrazac Atrium Istria u kojem možete ostaviti kontakte, opis radova, adresu objekta, fotografije, željeni početak i okvirni budžet.",
    consentPrefix: "Slanjem upita kroz obrazac prihvaćate",
    privacyLabel: "politiku privatnosti",
    consentCheckboxLabel: "Pročitao(la) sam politiku privatnosti i pristajem na obradu podataka radi odgovora na upit.",
    consentRequiredHint: "Za nastavak je potrebno potvrditi suglasnost s politikom privatnosti.",
    continueLabel: "Nastavi na obrazac",
    consentStepTitle: "Potvrdite suglasnost prije ispunjavanja",
    consentStepDescription:
      "Prvo potvrdite da ste upoznati s politikom privatnosti. Nakon toga otvara se puni obrazac za upit.",
    openExternalLabel: "Otvori zasebno",
    fallbackLabel: "Ako se obrazac ne učita unutar prozora, otvorite ga u novoj kartici.",
    closeLabel: "Zatvori",
    iframeTitle: "Atrium Istria obrazac za upit",
    contactCardDescription:
      "Otvaramo detaljan obrazac u modalnom prozoru kako biste odmah mogli poslati cjelovit upit za pregled objekta i procjenu radova.",
    contactCardItems: [
      "Ime, telefon i e-mail za povratni kontakt",
      "Grad i adresa objekta",
      "Opis radova, fotografije, rok i budžet"
    ],
    launchLabel: "Otvori obrazac"
  }
};

export function getLeadFormUi(locale: Locale) {
  return localizedLeadFormUi[locale];
}
