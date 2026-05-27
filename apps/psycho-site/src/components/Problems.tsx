const problems = [
  {
    icon: "😰",
    title: "Постоянная тревожность",
    text: "Тревога не отпускает — даже когда всё вроде бы хорошо. Навязчивые мысли, беспокойство о будущем, ощущение, что что-то должно случиться.",
  },
  {
    icon: "🪫",
    title: "Эмоциональное выгорание",
    text: "Нет сил ни на работу, ни на близких. Ощущение пустоты, раздражительность, потеря смысла и радости от того, что раньше приносило удовольствие.",
  },
  {
    icon: "💔",
    title: "Трудности в отношениях",
    text: "Сложности в общении с партнёром, семьёй или коллегами. Непонимание, повторяющиеся конфликты, чувство одиночества даже рядом с людьми.",
  },
];

export function Problems() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
            Вам это знакомо?
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Когда внутри всё сложно
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Если вы узнаёте себя в этих описаниях — вы не одни. Это именно те
            ситуации, с которыми я работаю каждый день.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-2xl mb-4">
                {icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
