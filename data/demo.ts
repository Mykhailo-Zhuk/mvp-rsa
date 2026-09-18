import type { Restaurant, Service } from "@/lib/schemas";

/**
 * СТО RSA — каталог послуг
 * Повний спектр ремонту автомобілів. Діагностика, ремонт двигунів, ходової, електрики. Працюємо з усіма марками. Гарантія на всі роботи.
 */

export const DEMO_RESTAURANT: Restaurant = {
  id: "rsa",
  name: "СТО RSA",
  description: "Повний спектр ремонту автомобілів. Діагностика, ремонт двигунів, ходової, електрики. Працюємо з усіма марками. Гарантія на всі роботи.",
  logo: "/images/demo-logo.svg",
  address: "Київ, вул. Автозаводська, 25 (за попередньою перевіркою)",
  phone: "+38 (077) 609-00-00",
  currency: "UAH",
  categories: [],
  items: [],
};

export const DEMO_SERVICES: Service[] = [
  {
    id: "povna-diagnostyka",
    name: "Повна комп'ютерна діагностика",
    description: "Сканування всіх систем автомобіля: двигун, КПП, ABS, подушки безпеки, клімат. Детальний звіт.",
    duration: 60,
    price: 600,
    provider: "СТО RSA",
    category: "diagnostyka",
    masterName: "Ігор Мельник",
    available: true,
  },
  {
    id: "zamіna-masla-rsa",
    name: "Заміна моторної оливи",
    description: "Заміна моторної оливи та фільтрів (масляний, повітряний, салонний). Безкоштовна перевірка рівнів.",
    duration: 45,
    price: 600,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Ігор Мельник",
    available: true,
  },
  {
    id: "remont-dvyhuna-rsa",
    name: "Ремонт бензинового двигуна",
    description: "Поточний та капітальний ремонт двигунів. Заміна поршневої, кл.клапанів, прокладок, ланцюга/ременя ГРМ.",
    duration: 2880,
    price: 35000,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Олександр Ковальов",
    available: true,
  },
  {
    id: "remont-kpp-rsa",
    name: "Ремонт КПП",
    description: "Ремонт механічних та автоматичних коробок передач. Заміна зчеплення, підшипників, синхронізаторів.",
    duration: 480,
    price: 18000,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Ігор Мельник",
    available: true,
  },
  {
    id: "rozval-rsa",
    name: "Розвал-сходження 3D",
    description: "Комп'ютерний розвал-сходження на 3D стенді Hunter. Регулювання всіх кутів установки коліс.",
    duration: 60,
    price: 600,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Андрій Білий",
    available: true,
  },
  {
    id: "galma-rsa",
    name: "Ремонт гальмівної системи",
    description: "Заміна колодок, дисків, супортів, прокачка гальм. Робота з ABS системою.",
    duration: 180,
    price: 2500,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Андрій Білий",
    available: true,
  },
  {
    id: "elektryka-rsa",
    name: "Ремонт електрики",
    description: "Діагностика та ремонт електричних систем: стартер, генератор, проводка, світло, клімат.",
    duration: 120,
    price: 1500,
    provider: "СТО RSA",
    category: "elektryka",
    masterName: "Сергій Левченко",
    available: true,
  },
  {
    id: "klimат-rsa",
    name: "Заправка кондиціонера",
    description: "Заправка, діагностика та ремонт автокондиціонерів. Антибактеріальна обробка випарника.",
    duration: 60,
    price: 1200,
    provider: "СТО RSA",
    category: "kondycioner",
    masterName: "Сергій Левченко",
    available: true,
  },
  {
    id: "zcheplennia-rsa",
    name: "Заміна зчеплення",
    description: "Заміна комплекту зчеплення (диск, кошик, вижимний). Робота з усіма типами КПП.",
    duration: 240,
    price: 7500,
    provider: "СТО RSA",
    category: "slyusar",
    masterName: "Ігор Мельник",
    available: true,
  }
];

export const ADMIN_LOG = [
  {
    id: "l1",
    timestamp: "2026-09-17T10:23:11Z",
    level: "info" as const,
    message: "Booking created: rsa service",
  },
  {
    id: "l2",
    timestamp: "2026-09-17T09:18:42Z",
    level: "success" as const,
    message: "Booking confirmed: rsa",
  },
];
