import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О компании" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/contacts", label: "Контакты" },
];

const services = [
  { href: "/services#exploration", label: "Геологическая разведка" },
  { href: "/services#drilling", label: "Буровые услуги" },
  { href: "/services#design", label: "Проектирование" },
  { href: "/services#reserves", label: "Отчёт с подсчётом запасов" },
  { href: "/services#feasibility", label: "Технико-экономическое обоснование" },
  { href: "/services#documentation", label: "Документальное сопровождение" },
  { href: "/services#washing", label: "Отмывка и промывка" },
  { href: "/services#analysis", label: "Пробирный анализ" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-gradient-to-r from-transparent via-[var(--gold)] to-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] bg-clip-text text-transparent">
                СпецБурСтрой
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              ООО &laquo;Спецбурстрой&raquo; &mdash; геологическая разведка,
              проектирование, отчёты с подсчётом запасов, ТЭО и полное
              документальное сопровождение от проектно-геологоразведочных
              работ до полевых работ.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Услуги
            </h3>
            <ul className="space-y-2">
              {services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wider mb-4">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5">☎</span>
                <a href="tel:+74951234567" className="hover:text-[var(--gold-light)] transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5">✉</span>
                <a href="mailto:info@specstroy.ru" className="hover:text-[var(--gold-light)] transition-colors">
                  info@specstroy.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5">⌂</span>
                <span>
                  123456, г.&nbsp;Москва,
                  <br />
                  ул.&nbsp;Примерная, д.&nbsp;10
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5">◉</span>
                <a href="http://www.specstroy.ru" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-light)] transition-colors">
                  www.specstroy.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} ООО &laquo;Спецбурстрой&raquo;. Все права защищены. ИНН&nbsp;7700000000, ОГРН&nbsp;1027700000000.
        </div>
      </div>
    </footer>
  );
}
