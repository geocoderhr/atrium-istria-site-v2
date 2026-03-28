import { HomePageContent } from "@/content/types";

export const ruHomeServicesContent: HomePageContent["services"] = {
  eyebrow: "Наши услуги",
  title: "Подберём лучшее решение для каждого пространства",
  subtitle:
    "Мы выполняем полный спектр строительных и ремонтных работ по всей Истрии — от локальных задач до комплексных проектов.",
  cards: [
    {
      slug: "adaptacije-kuca-i-stanova",
      title: "Ремонт домов и квартир",
      description: "Комплексное обновление жилых пространств под ваши задачи и образ жизни.",
      icon: "home",
      image: "/site/services/adaptacije-cta.jpg",
      imageAlt: "Обновлённый жилой интерьер"
    },
    {
      slug: "kupaonice",
      title: "Ремонт ванных комнат",
      description: "Современные ванные с качественными материалами и аккуратной реализацией.",
      icon: "bath"
    },
    {
      slug: "fasade",
      title: "Фасады",
      description: "Обновление и утепление фасадов домов и жилых объектов.",
      icon: "building"
    },
    {
      slug: "rekonstrukcije",
      title: "Реконструкция",
      description: "Полная реконструкция домов — от основания до финальной отделки.",
      icon: "hammer"
    },
    {
      slug: "hidroizolacija",
      title: "Гидроизоляция",
      description: "Защита от влаги для фундамента, кровли, стен и мокрых зон.",
      icon: "droplet"
    }
  ]
};
