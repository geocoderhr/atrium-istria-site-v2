import { HomePageContent } from "@/content/types";

export const ruHomeTrustContent: HomePageContent["trust"] = {
  eyebrow: "Почему выбирают нас",
  title: "Подход, основанный на доверии",
  subtitle:
    "Мы строим долгосрочные отношения с клиентами через прозрачность, качество и уважение к каждому проекту.",
  points: [
    {
      title: "Понятная коммуникация",
      description: "Регулярные обновления по проекту и прямой контакт на всех этапах.",
      icon: "check-circle"
    },
    {
      title: "Реалистичные сроки",
      description: "Фиксируем достижимые дедлайны и держимся согласованного плана.",
      icon: "clock"
    },
    {
      title: "Организованный процесс",
      description: "Структурированная работа от первого разговора до финальной сдачи.",
      icon: "file-text"
    }
  ],
  stats: [
    { value: "100%", label: "Ясность" },
    { value: "24/7", label: "Поддержка" },
    { value: "15+", label: "Специалистов" },
    { value: "★", label: "Премиальное качество", icon: "star" }
  ]
};
