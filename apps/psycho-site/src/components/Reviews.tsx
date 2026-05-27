const reviews = [
  {
    text: "После трёх месяцев работы я впервые за годы почувствовала, что могу дышать полной грудью. Тревога не исчезла полностью, но я научилась с ней жить — и это огромная разница.",
    name: "Мария",
    meta: "34 года, менеджер",
    avatar: "М",
    color: "bg-rose-100 text-rose-600",
  },
  {
    text: "Я пришёл с запросом про выгорание на работе, а ушёл с пониманием себя. Анна помогла увидеть то, что я сам не замечал годами. Это было ценнее, чем я ожидал.",
    name: "Алексей",
    meta: "41 год, предприниматель",
    avatar: "А",
    color: "bg-teal-100 text-teal-600",
  },
  {
    text: "Самое важное — я чувствовала, что меня слышат. Не осуждают, не дают готовых ответов, а помогают найти свои. После терапии отношения с мужем изменились к лучшему.",
    name: "Елена",
    meta: "29 лет, дизайнер",
    avatar: "Е",
    color: "bg-violet-100 text-violet-600",
  },
];

export function Reviews() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">
            Отзывы
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Слова тех, кто уже прошёл этот путь
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(({ text, name, meta, avatar, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              <span className="text-3xl text-violet-200">"</span>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 -mt-4">
                {text}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${color}`}
                >
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
