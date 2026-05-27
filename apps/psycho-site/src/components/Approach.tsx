const steps = [
  {
    number: "01",
    title: "Первая встреча — диагностика",
    text: "Бесплатная 20-минутная сессия: знакомимся, обсуждаем ваш запрос и определяем, подходим ли друг другу.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    number: "02",
    title: "Безопасное пространство",
    text: "Полная конфиденциальность и безоценочное принятие. Здесь можно говорить обо всём — без страха и стыда.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    number: "03",
    title: "Доказательные методы",
    text: "КПТ, гештальт-терапия и коучинговые техники — только то, что работает и подходит именно вам.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    number: "04",
    title: "Результат и изменения",
    text: "Вы уходите с конкретными инструментами и пониманием себя. Изменения начинаются уже после первых сессий.",
    color: "bg-rose-50 text-rose-600",
  },
];

export function Approach() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/stones.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[1px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold">
            Мой подход
          </span>
          <h2 className="text-3xl font-bold text-white">
            Как проходит терапия
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map(({ number, title, text, color }) => (
            <div
              key={number}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex gap-4"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg ${color}`}
              >
                {number}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
