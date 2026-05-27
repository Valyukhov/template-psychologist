import { useState } from "react";

const faqs = [
  {
    q: "Сколько длится терапия?",
    a: "Краткосрочная работа — от 5 до 10 сессий. Глубинные изменения обычно занимают 3–6 месяцев. Всё зависит от вашего запроса и темпа.",
  },
  {
    q: "Это конфиденциально?",
    a: "Абсолютно. Всё, что происходит на сессии, остаётся между нами. Я соблюдаю этический кодекс психолога и подписываю соглашение о конфиденциальности.",
  },
  {
    q: "Онлайн или офлайн?",
    a: "Работаю в обоих форматах. Онлайн-сессии проходят через Zoom или Google Meet — они так же эффективны, как личные встречи.",
  },
  {
    q: "Что если мне не подойдёт?",
    a: "Первая диагностическая встреча бесплатна — именно для того, чтобы вы могли понять, комфортно ли вам. Никаких обязательств.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Частые вопросы</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{q}</span>
                <span
                  className={`text-violet-500 text-xl transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
