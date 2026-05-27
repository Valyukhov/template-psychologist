import { Button } from "@repo/ui";

const links = [
  { label: "Обо мне", id: "about" },
  { label: "Услуги", id: "pricing" },
  { label: "Отзывы", id: "reviews" },
];

export function Navbar() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-gray-900 text-lg tracking-tight">
          Анна Смирнова
          <span className="text-violet-600 font-normal text-sm ml-2">психолог</span>
        </span>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors font-medium"
            >
              {label}
            </button>
          ))}
        </nav>

        <Button
          size="sm"
          onClick={() => scroll("contact")}
        >
          Записаться
        </Button>
      </div>
    </header>
  );
}
