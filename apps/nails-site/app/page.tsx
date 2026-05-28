const stats = [
  { value: "6+", label: "Лет опыта", sub: "Безопасный и аккуратный сервис" },
  { value: "900+", label: "Клиентов", sub: "Постоянные и новые записи" },
  { value: "98%", label: "Возвращаются", sub: "После первого визита" },
  { value: "15+", label: "Техник", sub: "Маникюр, укрепление, дизайн" },
]

const services = [
  { name: "Комбинированный маникюр", price: "от 2 000 ₽", time: "90 мин" },
  { name: "Маникюр + покрытие гель-лак", price: "от 2 700 ₽", time: "120 мин" },
  { name: "Укрепление базой/гелем", price: "от 3 200 ₽", time: "150 мин" },
  { name: "Дизайн ногтей", price: "от 300 ₽", time: "10-30 мин" },
]

const advantages = [
  "Стерилизация инструмента по СанПиН",
  "Материалы премиум-класса",
  "Индивидуальный подбор формы и цвета",
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-24 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700">
              Мастер маникюра · Москва
            </span>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Идеальный маникюр, который
              <span className="text-rose-600"> держится неделями</span>
            </h1>
            <p className="mb-7 max-w-xl text-lg text-slate-600">
              Аккуратный маникюр, чистая архитектура ногтя и стойкое покрытие без
              сколов. Уютная студия и запись в удобное для вас время.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700"
              >
                Записаться в WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white px-6 py-3 font-semibold text-rose-700 transition hover:bg-rose-50"
              >
                Смотреть услуги
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Первое знакомство: скидка 10% на первый визит
            </p>
          </div>

          <div className="flex-1">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
                alt="Маникюр в розовых оттенках"
                className="h-80 w-full rounded-2xl object-cover md:h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-5xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl border border-rose-100">
            <img
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop"
              alt="Рабочее место мастера маникюра"
              className="h-80 w-full object-cover md:h-[28rem]"
            />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700">
              Обо мне
            </span>
            <h2 className="mb-4 text-3xl font-bold">Привет, я Алина</h2>
            <p className="mb-5 leading-relaxed text-slate-600">
              Я мастер маникюра с опытом более 6 лет. Делаю естественные и
              трендовые дизайны, уделяю максимум внимания безопасности и комфорту.
            </p>
            <div className="space-y-3">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-rose-50 px-4 py-3 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose-600 px-4 py-20 text-white">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
              Результаты
            </span>
            <h2 className="mb-3 text-3xl font-bold">
              Цифры, которым доверяют клиенты
            </h2>
            <p className="mx-auto max-w-xl text-rose-100">
              Ставка на качество, чистоту и долговечный результат в каждой услуге.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="mb-1 text-4xl font-extrabold">{item.value}</p>
                <p className="font-semibold">{item.label}</p>
                <p className="text-xs text-rose-100">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-5xl px-4 py-20">
        <div className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700">
            Услуги и цены
          </span>
          <h2 className="text-3xl font-bold">Прозрачный прайс без сюрпризов</h2>
        </div>
        <div className="grid gap-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="flex flex-col justify-between gap-3 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-sm text-slate-500">Длительность: {service.time}</p>
              </div>
              <p className="text-xl font-bold text-rose-600">{service.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50 px-4 py-20">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-rose-100 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="mb-3 text-3xl font-bold">Готовы на красивый маникюр?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-slate-600">
            Напишите в WhatsApp и получите консультацию по услугам, свободным окнам
            и стоимости под ваш запрос.
          </p>
          <a
            href="https://wa.me/79990000000"
            className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-7 py-3 font-semibold text-white transition hover:bg-rose-700"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
