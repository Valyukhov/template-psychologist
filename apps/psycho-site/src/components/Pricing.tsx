import { Button } from "@repo/ui";

const plans = [
  {
    title: "Индивидуальная сессия",
    duration: "50 минут",
    price: "5 000 ₽",
    oldPrice: null,
    features: [
      "Разбор актуальной ситуации",
      "Практические техники",
      "Поддержка между сессиями",
    ],
    highlighted: false,
  },
  {
    title: "Пакет из 5 сессий",
    duration: "Системная работа",
    price: "21 250 ₽",
    oldPrice: "25 000 ₽",
    features: [
      "Глубокая проработка запроса",
      "Скидка 15% по сравнению с разовыми",
      "Гибкий график",
    ],
    highlighted: true,
  },
  {
    title: "Парная терапия",
    duration: "90 минут",
    price: "8 000 ₽",
    oldPrice: null,
    features: [
      "Работа с отношениями",
      "Улучшение коммуникации",
      "Разрешение конфликтов",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
            Услуги и цены
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Выберите формат работы
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Каждый путь уникален. Я предлагаю несколько форматов — от разовой
            консультации до системной работы над изменениями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ title, duration, price, oldPrice, features, highlighted }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border flex flex-col gap-5 ${
                highlighted
                  ? "bg-violet-600 border-violet-600 shadow-xl shadow-violet-200 text-white scale-105"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {highlighted && (
                <span className="self-start text-xs font-bold bg-white text-violet-600 px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}
              <div>
                <h3
                  className={`font-bold text-lg mb-1 ${highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {title}
                </h3>
                <p className={`text-sm ${highlighted ? "text-violet-200" : "text-gray-400"}`}>
                  {duration}
                </p>
              </div>

              <div className="flex items-end gap-2">
                <span
                  className={`text-3xl font-extrabold ${highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {price}
                </span>
                {oldPrice && (
                  <span className="text-sm line-through text-violet-300 mb-1">
                    {oldPrice}
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 ${highlighted ? "text-violet-200" : "text-violet-500"}`}
                    >
                      ✓
                    </span>
                    <span className={highlighted ? "text-violet-100" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={highlighted ? "ghost" : "primary"}
                onClick={scrollToContact}
                className={
                  highlighted
                    ? "bg-white text-violet-600 hover:bg-violet-50 mt-auto"
                    : "mt-auto"
                }
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
