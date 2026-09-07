const values = [
  {
    icon: "◆",
    title: "Научный подход",
    description:
      "Каждый этап работ — от разведки до отчёта — выполняется по стандартным методикам с контролем качества на каждом промежуточном этапе.",
  },
  {
    icon: "⚡",
    title: "Точность данных",
    description:
      "Используем аттестованные методики, что обеспечивает воспроизводимость и достоверность результатов подсчёта запасов.",
  },
  {
    icon: "🛡",
    title: "Соответствие требованиям",
    description:
      "Все работы и документация соответствуют требованиям ГКЗ и законодательства о недрах.",
  },
  {
    icon: "🔬",
    title: "Полная документация",
    description:
      "Формируем полный пакет документации — от полевых журналов до отчётов с подсчётом запасов.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-dark)]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[120px]" />
        <div className="relative text-center max-w-4xl mx-auto">
          <p className="text-[var(--gold)] text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            О компании
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ООО &laquo;<span className="text-[var(--gold)]">Спецбурстрой</span>&raquo;
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Компания специализируется на геологической разведке,
            проектировании, подсчёте запасов и документальном сопровождении
            проектов золотодобычи
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Наша <span className="text-[var(--gold)]">история</span>
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Компания <strong className="text-[var(--text)]">ООО &laquo;Спецбурстрой&raquo;</strong> была
                основана в 2020 году группой специалистов в области геологии,
                горного дела и минералогии.
              </p>
              <p>
                Специализация компании — полный цикл услуг: геологическая
                разведка, проектирование, отчёты с подсчётом запасов,
                технико-экономическое обоснование и документальное
                сопровождение от проектно-геологоразведочных работ до полевых
                работ.
              </p>
              <p>
                Мы выполняем работы на россыпных и коренных месторождениях,
                обеспечивая полное документальное сопровождение на всех
                этапах — от разведки до отмывки и промывки золотоносных
                песков.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--gold)]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-[var(--bg-card)] border border-[var(--gold)]/10 rounded-3xl p-10 space-y-6">
              <h3 className="text-xl font-semibold text-[var(--gold)]">Ключевые вехи</h3>
              <div className="space-y-4">
                {[
                  { year: "2020", event: "Основание компании" },
                  { year: "2021", event: "Начало первой разведочной программы" },
                  { year: "2022", event: "Получение лицензии на недропользование" },
                  { year: "2023", event: "Первый отчёт с подсчётом запасов" },
                  { year: "2024", event: "Запуск направления ТЭО и проектирования" },
                  { year: "2025", event: "Полное документальное сопровождение проектов" },
                ].map((milestone) => (
                  <div key={milestone.year} className="flex gap-4 items-start">
                    <span className="text-[var(--gold)] font-bold text-sm whitespace-nowrap mt-1">
                      {milestone.year}
                    </span>
                    <div className="h-px w-3 bg-[var(--gold)]/40 mt-2.5 shrink-0" />
                    <span className="text-[var(--text-muted)] text-sm">
                      {milestone.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[var(--gold)]/10 rounded-full blur-2xl scale-150" />
            <div className="relative bg-[var(--bg-card)] border border-[var(--gold)]/20 rounded-2xl px-12 py-10">
              <p className="text-[var(--gold)] text-sm uppercase tracking-[0.3em] mb-3">
                Миссия
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                &ldquo;Комплексное геологическое изучение недр, достоверный
                подсчёт запасов и полное документальное сопровождение
                проектов золотодобычи&rdquo;
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.3em] mb-3">
              Принципы
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Наши <span className="text-[var(--gold)]">ценности</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl p-8 hover:border-[var(--gold)]/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--text)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm uppercase tracking-[0.3em] mb-3">
              Документы
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Лицензии и <span className="text-[var(--gold)]">допуски</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Лицензия на недропользование",
                issuer: "Министерство природных ресурсов РФ",
                number: "ХП-001234",
                description:
                  "Право на геологическое изучение недр, разведку и добычу полезных ископаемых на территории Российской Федерации",
              },
              {
                title: "Допуск СРО",
                issuer: "Саморегулируемая организация",
                number: "СРО-2015-0892",
                description:
                  "Допуск к работам по геологическому изучению недр и добыче полезных ископаемых",
              },
            ].map((cert) => (
              <div
                key={cert.number}
                className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl p-8 hover:border-[var(--gold)]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-[var(--text)] leading-snug pr-4">
                    {cert.title}
                  </h3>
                  <span className="text-xs bg-[var(--gold)]/10 text-[var(--gold)] px-3 py-1 rounded-full whitespace-nowrap">
                    Действует
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  {cert.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-[var(--text-muted)] gap-1">
                  <span>{cert.issuer}</span>
                  <span className="text-[var(--gold)]/60">№ {cert.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
