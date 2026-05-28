const photos = [
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=800&auto=format&fit=crop",
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-6 text-3xl font-bold">Портфолио</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt="Пример работы"
              className="h-60 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
