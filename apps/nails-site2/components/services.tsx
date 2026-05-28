import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    category: "Маникюр",
    items: [
      { name: "Классический маникюр", price: "1 200 ₽", duration: "45 мин" },
      { name: "Маникюр с покрытием гель-лак", price: "2 500 ₽", duration: "1.5 ч" },
    ],
  },
  {
    category: "Педикюр",
    items: [
      { name: "Классический педикюр", price: "2 000 ₽", duration: "1 ч" },
      { name: "SPA-педикюр", price: "3 500 ₽", duration: "2 ч" },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">Услуги и цены</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-balance">Широкий спектр услуг</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.category} className="bg-background border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-serif font-semibold mb-6 text-foreground pb-4 border-b border-border">{service.category}</h3>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      </div>
                      <p className="font-semibold text-primary whitespace-nowrap">{item.price}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
