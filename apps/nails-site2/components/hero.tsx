import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">Мастер маникюра и педикюра</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-balance">
            Красота в <span className="text-primary italic">деталях</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Создаю идеальный маникюр и педикюр, который подчеркнет вашу индивидуальность.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base"><Link href="#booking">Записаться на прием</Link></Button>
            <Button size="lg" variant="outline" asChild className="text-base"><Link href="#portfolio">Смотреть работы</Link></Button>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
            alt="Маникюр"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
