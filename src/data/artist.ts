export type Release = { title: string; kind: string; audio?: string; url?: string };
export type Clip = { title: string; url: string };
export type Concert = { date: string; city: string; venue: string; tickets?: string };

// Заполняйте только подтверждёнными материалами артиста.
export const artist = {
  name: "Артём Попов",
  vkGroup: { id: 228819227, url: "https://vk.ru/tema.popov03" },
  email: "artem.popov03@yandex.ru",
  biography: "Я Артём Попов — начинающий автор песен из города Обоянь Курской области. Пишу песни и тексты на заказ: поздравления, тосты и речи для ваших особенных моментов.",
  writing: {
    orderUrl: "https://vk.me/club228819227",
    formats: [
      { title: "Поздравления", description: "В стихах и прозе — на день рождения, свадьбу или юбилей." },
      { title: "Тосты и речи", description: "Свадебные, корпоративные и личные." },
      { title: "Приглашения и сообщения", description: "Тексты для приглашений и личных сообщений." },
      { title: "Открытки и послания", description: "Тексты для открыток и персональных посланий." },
    ],
    steps: ["Рассказываете, для кого и по какому поводу нужен текст.", "Получаете черновик.", "Вносим правки — до трёх бесплатных.", "Получаете готовый текст."],
    prices: [
      { title: "Поздравление, тост или короткое сообщение", price: "от 1 000 ₽" },
      { title: "Речь или развёрнутый текст", price: "от 3 000 ₽" },
    ],
    turnaround: "1–3 дня",
  },
  releases: [] as Release[],
  clips: [] as Clip[],
  concerts: [] as Concert[],
  platforms: [
    { label: "VK Музыка", url: "https://vk.ru/artist/7436384224583858887" },
    { label: "Яндекс Музыка", url: "https://music.yandex.ru/artist/24140886" },
    { label: "Звук", url: "https://zvuk.com/artist/213272976" },
    { label: "КИОН Музыка", url: "https://music.mts.ru/artist/24140886" },
  ],
  socials: [
    { label: "Группа ВКонтакте", url: "https://vk.ru/tema.popov03" },
    { label: "Личная страница ВК", url: "https://vk.ru/lga03" },
    { label: "Telegram-канал", url: "https://t.me/Temchik2801" },
  ],
};
