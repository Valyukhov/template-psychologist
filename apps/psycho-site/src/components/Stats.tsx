const stats = [
  { value: "8+", label: "Лет практики", sub: "Непрерывной работы с клиентами" },
  { value: "500+", label: "Клиентов", sub: "Прошли терапию и коучинг" },
  { value: "96%", label: "Рекомендуют", sub: "Готовы порекомендовать друзьям" },
  { value: "20+", label: "Сертификатов", sub: "КПТ, гештальт, коучинг ICF" },
];

export function Stats() {
  return (
    <section className="bg-violet-600 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold">
            Результаты
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Что меняется после терапии
          </h2>
          <p className="text-violet-200 max-w-xl mx-auto">
            Каждый клиент проходит свой путь — но есть общие результаты:
            снижение тревоги, ясность в решениях и восстановление энергии.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <p className="text-5xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-white font-semibold mb-1">{label}</p>
              <p className="text-violet-300 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
