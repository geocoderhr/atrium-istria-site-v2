import { HomePageContent } from "@/content/types";

export const ruHomeProcessContent: HomePageContent["process"] = {
  eyebrow: "Как мы работаем",
  title: "Работы в 4 шага",
  subtitle: "Понятный процесс от первого разговора до завершения работ.",
  image: "/site/home/process-planning.jpg",
  imageAlt: "Планирование проекта",
  responseStat: {
    value: "24h",
    label: "Среднее время ответа"
  },
  steps: [
    {
      number: "01",
      title: "Первый разговор",
      description: "Расскажите, что вы хотите обновить, отремонтировать или реконструировать."
    },
    {
      number: "02",
      title: "Понимание проекта",
      description: "Мы смотрим на объект, объём работ и то, что важно для следующего шага."
    },
    {
      number: "03",
      title: "Предложение и договорённости",
      description: "Вы получаете понятное предложение по работам, срокам и согласованным условиям."
    },
    {
      number: "04",
      title: "Выполнение работ",
      description: "Мы выполняем работы по согласованному плану и регулярно информируем вас о ходе проекта."
    }
  ]
};
