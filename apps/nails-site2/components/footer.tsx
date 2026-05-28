import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-semibold text-foreground tracking-wide">
              Елена<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">Профессиональный маникюр и педикюр в уютной домашней студии.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Елена. Все права защищены.</p>
          <p className="text-sm text-muted-foreground">Сделано с любовью к красоте</p>
        </div>
      </div>
    </footer>
  )
}
