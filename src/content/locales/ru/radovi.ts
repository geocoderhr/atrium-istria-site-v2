import { RadoviPageContent } from "@/content/schema";
import { siteConfig } from "@/content/site-config";

import { projectCasesRu } from "./projects";

export const radoviContentRu: RadoviPageContent = {
  seo: {
    title: "Работы и примеры проектов в Пуле и Истрии",
    description:
      "Atrium Istria показывает реальные работы в Пуле и Истрии через понятные кейсы: что было, что выполнено и какой результат получил объект.",
    path: "/radovi"
  },
  hero: {
    eyebrow: "Работы | Atrium Istria",
    title: "Работы показаны как понятные кейсы, а не как случайная галерея.",
    description:
      "Здесь мы показываем реальные проекты через логику объекта, объема работ и результата, чтобы сразу было видно, что за сайтом стоит реальное исполнение."
  },
  intro: {
    title: "Что ты здесь смотришь",
    description:
      "Каждый кейс должен объяснять исходное состояние, что именно было сделано и какой практический результат получил объект. Это важнее, чем просто красивая картинка."
  },
  cases: {
    title: "Выбранные кейсы",
    description:
      "Ниже собраны внутренние адаптации, ванные комнаты, фасады, реконструкции и технические защитные работы.",
    items: projectCasesRu
  },
  finalContact: {
    title: "Если твой объект тоже требует понятного плана работ, отправь описание и начнем конкретно.",
    description:
      "Напиши локацию, тип объекта и что нужно решить. После этого уже будет понятный следующий шаг, без пустых обещаний.",
    ctaLabel: "Открыть контакт",
    ctaHref: "/kontakt",
    phone: siteConfig.phone,
    email: siteConfig.email
  }
};
