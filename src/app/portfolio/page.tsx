"use client";

const projects = [
  {
    title: "Геологическое изучение участка",
    dateRange: "2021",
    result:
      "Проведено картирование площади 50 км², отобрано 200 проб пород для анализа. Выявлены аномальные концентрации Au в коренных и россыпных образованиях.",
    category: "Разведка",
    categoryColor: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  },
  {
    title: "Проектирование разведочной программы",
    dateRange: "2022",
    result:
      "Разработан проект на геологоразведочные работы с сметой и календарным планом. Проект согласован в установленном порядке.",
    category: "Проектирование",
    categoryColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  },
  {
    title: "Отчёт с подсчётом запасов",
    dateRange: "2023",
    result:
      "Составлен геологический отчёт с подсчётом запасов по методике ГКЗ. Запасы поставлены на государственный баланс.",
    category: "Запасы",
    categoryColor: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  },
  {
    title: "Промывка золотоносных песков",
    dateRange: "2023",
    result:
      "Выполнены полевые работы: отмывка и промывка золотоносных песков с извлечением свободного золота и контролем потерь.",
    category: "Полевые работы",
    categoryColor: "bg-[var(--gold)]/15 text-[var(--gold)] border-[var(--gold)]/20",
  },
  {
    title: "ТЭО освоения месторождения",
    dateRange: "2024",
    result:
      "Разработано технико-экономическое обоснование: оценка рентабельности, выбор технологии отработки и расчёт окупаемости.",
    category: "ТЭО",
    categoryColor: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  },
  {
    title: "Документальное сопровождение проекта",
    dateRange: "2025",
    result:
      "Полное документальное сопровождение проекта — от проектно-геологоразведочных работ до полевых работ, включая отчётность перед госорганами.",
    category: "Документация",
    categoryColor: "bg-rose-500/15 text-rose-400 border-rose-500/20",
  },
];

const categories = [
  "Все",
  "Разведка",
  "Проектирование",
  "Запасы",
  "ТЭО",
  "Полевые работы",
  "Документация",
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-dark)]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[120px]" />
        <div className="relative text-center max-w-4xl mx-auto">
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Портфолио
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Наши <span className="text-[var(--gold)]">проекты</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Каждый проект — это комплексная работа от геологической разведки
            до полного документального сопровождения
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer
                  border-[var(--gold)]/20 text-[var(--text-muted)] hover:border-[var(--gold)]/40 hover:text-[var(--text)]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl overflow-hidden hover:border-[var(--gold)]/30 transition-all duration-300 flex flex-col"
            >
              {/* Header gradient bar */}
              <div className="h-1 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-[var(--text)] leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${project.categoryColor}`}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-[var(--gold)]/60 uppercase tracking-wider mb-4">
                  {project.dateRange}
                </p>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                  {project.result}
                </p>

                <div className="mt-6 pt-4 border-t border-[var(--gold)]/5">
                  <span className="text-xs text-[var(--gold)]/40 group-hover:text-[var(--gold)]/70 transition-colors duration-300">
                    Подробнее →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-3xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы обсудить <span className="text-[var(--gold)]">ваш проект</span>?
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
              Мы выполняем полный цикл услуг — от геологической разведки до
              документального сопровождения. Свяжитесь с нами для консультации.
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--bg-dark)] font-semibold px-8 py-3.5 rounded-full hover:bg-[var(--gold-light)] transition-colors duration-300"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
