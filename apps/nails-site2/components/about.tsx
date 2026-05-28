export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80"
                alt="Мастер за работой"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Обо мне</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-balance">Привет, я Елена!</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Уже более 8 лет я помогаю женщинам чувствовать себя красивыми и уверенными.</p>
              <p>Регулярно прохожу обучение у ведущих мастеров России и Европы.</p>
              <p>Использую только сертифицированные материалы премиум-класса.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
