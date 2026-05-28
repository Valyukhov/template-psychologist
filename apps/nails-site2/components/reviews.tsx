import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  { name: "Анна М.", text: "Маникюр держится идеально 3-4 недели.", rating: 5, service: "Маникюр с покрытием" },
  { name: "Мария К.", text: "Очень аккуратная работа и уютная атмосфера.", rating: 5, service: "Педикюр" },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">Отзывы</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-balance">Что говорят клиенты</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review) => (
            <Card key={review.name} className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <p className="text-foreground leading-relaxed mb-6">{`"${review.text}"`}</p>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
