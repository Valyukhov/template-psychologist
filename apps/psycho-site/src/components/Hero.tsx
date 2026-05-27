import { Button } from "@repo/ui";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-white to-teal-50 overflow-hidden">
      {/* decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-100 opacity-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold tracking-wide">
            Психолог и лайф-коуч · Москва и онлайн
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Обретите баланс и <span className="text-violet-600">ясность</span> в
            своей жизни
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Профессиональная психологическая помощь при тревоге, выгорании и
            поиске себя. Безопасное пространство, где вас слышат и понимают.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Записаться на бесплатную диагностику
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Узнать больше
            </Button>
          </div>
          <p className="mt-5 text-sm text-gray-400">
            Первая встреча бесплатно · Без обязательств
          </p>
        </div>

        {/* photo */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/anna.png"
              alt="Анна Смирнова — психолог"
              className="w-full h-full object-cover"
            />
            {/* badge */}
          </div>
        </div>
      </div>
    </section>
  );
}
