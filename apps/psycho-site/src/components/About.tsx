const credentials = [
  { icon: "🎓", label: "Магистр психологии", sub: "МГУ им. Ломоносова" },
  { icon: "📜", label: "КПТ и Гештальт", sub: "Сертифицированный специалист" },
  { icon: "⏱️", label: "8+ лет практики", sub: "500+ клиентов" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-72 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/anna-about.png"
                alt="Анна Смирнова"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent" />
            </div>
          </div>

          {/* text */}
          <div className="flex-1">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">
              Обо мне
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Меня зовут Анна Смирнова
            </h2>
            <p className="text-violet-600 font-medium mb-5">
              Клинический психолог и лайф-коуч
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Я клинический психолог и лайф-коуч с более чем 8-летним опытом
              практики. Моя работа — помочь вам обрести внутреннюю опору и
              двигаться вперёд с уверенностью.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Я прошла собственную терапию и регулярную супервизию — потому что
              знаю: настоящий профессионал тоже работает над собой.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {credentials.map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-violet-50 rounded-2xl px-4 py-3"
                >
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {label}
                    </p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
