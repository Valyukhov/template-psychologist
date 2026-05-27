export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© 2024 Анна Смирнова · Психолог и лайф-коуч</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Оферта
          </a>
        </div>
      </div>
    </footer>
  );
}
