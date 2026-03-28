import { sharedContactDetails, toTelHref } from "@/content/site-config";
import { ContactPageContent } from "@/content/types";

export const contactPageContent: ContactPageContent = {
  meta: {
    title: "Контакты | Atrium Istria",
    description: "Свяжитесь с Atrium Istria по телефону или отправьте запрос через форму. Работаем по всей Истрии.",
    path: "/kontakt"
  },
  hero: {
    title: "Контакты",
    subtitle: "Отправьте запрос или позвоните нам напрямую."
  },
  infoTitle: "Контактная информация",
  infoBlocks: [
    {
      title: "Телефон 1",
      value: sharedContactDetails.primaryPhone,
      href: toTelHref(sharedContactDetails.primaryPhone),
      note: "Пн - Пт: 8:00 - 17:00",
      icon: "phone"
    },
    {
      title: "Телефон 2",
      value: sharedContactDetails.secondaryPhone,
      href: toTelHref(sharedContactDetails.secondaryPhone),
      note: "Для второго контактного канала и обратной связи",
      icon: "phone"
    },
    {
      title: "Email",
      value: sharedContactDetails.email,
      href: `mailto:${sharedContactDetails.email}`,
      note: "Отвечаем в течение 24 часов",
      icon: "mail"
    },
    {
      title: "Локация",
      value: sharedContactDetails.location,
      note: "Работаем по всей Истрии",
      icon: "map-pin"
    },
    {
      title: "WhatsApp",
      value: sharedContactDetails.primaryPhone,
      href: sharedContactDetails.whatsAppUrl,
      note: "Быстрый ответ в мессенджере в рабочее время",
      icon: "message-circle"
    },
    {
      title: "Telegram",
      value: "@istriahr",
      href: sharedContactDetails.telegramUrl,
      note: "Можно написать и отправить фото объекта",
      icon: "send"
    },
    {
      title: "Facebook",
      value: "renoviranje.istra",
      href: sharedContactDetails.facebookUrl,
      note: "Можно посмотреть обновления и написать нам в Facebook",
      icon: "facebook"
    },
    {
      title: "Рабочее время",
      value: "Понедельник - Пятница: 8:00 - 17:00",
      note: "Суббота: 9:00 - 13:00, Воскресенье: выходной",
      icon: "clock"
    }
  ],
  expectationTitle: "Что вы можете ожидать",
  expectationItems: [
    "Ответ на запрос в течение 24 часов в рабочие дни",
    "Согласование разговора или выезда на объект",
    "Предложение по небольшим работам за 2–3 дня",
    "Понятные сроки и ориентир по стоимости"
  ],
  form: {
    title: "Отправить запрос",
    fields: {
      name: "Имя и фамилия",
      email: "Email",
      phone: "Телефон",
      message: "Сообщение"
    },
    placeholders: {
      name: "Ваше имя",
      email: "your.email@example.com",
      phone: "+385 XX XXX XXXX",
      message: "Опишите объект, локацию и работы, которые вы планируете..."
    },
    submitLabel: "Отправить запрос",
    consentLabel: "Отправляя запрос, вы принимаете условия использования и политику конфиденциальности."
  }
};
