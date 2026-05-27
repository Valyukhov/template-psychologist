import { useState } from "react";
import { Button, Input } from "@repo/ui";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-violet-50 via-white to-teal-50 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* top CTA banner */}
        <div className="bg-violet-600 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-violet-200 max-w-lg mx-auto mb-6">
              Первый шаг — самый важный. Запишитесь на бесплатную
              диагностическую сессию, и мы вместе определим, как я могу вам
              помочь.
            </p>
            <p className="text-violet-300 text-sm mb-6">
              Это ни к чему не обязывает — просто разговор о вас и вашей
              ситуации.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-violet-600 border-white hover:bg-violet-50"
            >
              Записаться на диагностику
            </Button>
          </div>
        </div>

        {/* contacts + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* contacts */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Свяжитесь со мной
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/79000000000"
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                    WhatsApp / Telegram
                  </p>
                  <p className="text-gray-400 text-sm">Быстрый ответ в течение дня</p>
                </div>
              </a>
              <a
                href="mailto:anna@psychologist.ru"
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                    anna@psychologist.ru
                  </p>
                  <p className="text-gray-400 text-sm">Email</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="font-semibold text-gray-900">Конфиденциально</p>
                  <p className="text-gray-400 text-sm">Ваши данные под защитой</p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div id="form" className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-gray-500">
                  Я свяжусь с вами в течение 24 часов, чтобы договориться о
                  времени бесплатной диагностической сессии.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Оставьте заявку
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Заполните форму, и я свяжусь с вами в течение 24 часов.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Input label="Ваше имя" placeholder="Мария" required />
                  <Input
                    label="Телефон или email"
                    placeholder="+7 900 000 00 00"
                    required
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Ваш запрос (необязательно)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Расскажите в нескольких словах, что вас беспокоит..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-1">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
