import Link from "next/link";
import {
  DrillIcon,
  GeologicalIcon,
  WashIcon,
  MapIcon,
  ShieldIcon,
  AnalysisIcon,
  DocumentIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const services = [
  {
    id: "exploration",
    icon: GeologicalIcon,
    title: "Геологическая разведка",
    description:
      "Комплексное геологическое изучение площади с целью выявления и оценки золотоносных объектов. Включает геологическое картирование, геохимические и геофизические исследования, поисковое и разведочное опробование. Результат — обоснованные прогнозные ресурсы и рекомендации по дальнейшему изучению объекта.",
    capabilities: [
      "Геологическое картирование площади",
      "Поисковые и разведочные работы",
      "Опробование золотоносных объектов",
      "Геохимические и геофизические исследования",
      "Оценка прогнозных ресурсов",
    ],
  },
  {
    id: "drilling",
    icon: DrillIcon,
    title: "Буровые услуги",
    description:
      "Бурение на всех этапах изучения месторождения. Поднимаем максимально полный керн со дна скважины — материал, по которому оценивается рудоносность глубинных горизонтов. Качество отбора керна гарантирует достоверность всех дальнейших выводов.",
    capabilities: [
      "Максимально полный вынос керна со дна",
      "Опробование золотоносных интервалов",
      "Оценка глубинных горизонтов",
    ],
  },
  {
    id: "design",
    icon: MapIcon,
    title: "Проектирование",
    description:
      "Разработка проектной документации на геологоразведочные и горные работы. Проекты составляются с учётом требований законодательства о недрах, технических регламентов и условий конкретного участка. Обеспечиваем согласование проектной документации в установленном порядке.",
    capabilities: [
      "Проекты на геологоразведочные работы",
      "Проекты на полевые работы",
      "Сметы и календарные планы",
      "Согласование проектной документации",
    ],
  },
  {
    id: "reserves",
    icon: DocumentIcon,
    title: "Отчёт с подсчётом запасов",
    description:
      "Составление геологических отчётов с подсчётом запасов по методике ГКЗ. Подготавливаем полный комплект материалов: подсчёт запасов, графические приложения, таблицы и пояснительную записку — для постановки запасов на государственный баланс.",
    capabilities: [
      "Подсчёт запасов по методике ГКЗ",
      "Геологические отчёты по результатам работ",
      "Постановка запасов на госбаланс",
      "Защита отчётов в комиссиях",
    ],
  },
  {
    id: "feasibility",
    icon: ShieldIcon,
    title: "Технико-экономическое обоснование",
    description:
      "Разработка ТЭО освоения месторождения: оценка объёмов и качества запасов, выбор оптимальной технологии отработки, расчёт капитальных и эксплуатационных затрат, анализ рентабельности и сроков окупаемости проекта.",
    capabilities: [
      "Оценка рентабельности освоения",
      "Выбор технологии отработки",
      "Расчёт затрат и окупаемости",
      "Обоснование инвестиционных решений",
    ],
  },
  {
    id: "documentation",
    icon: ClockIcon,
    title: "Документальное сопровождение",
    description:
      "Полное документальное сопровождение — от проектно-геологоразведочных работ до полевых работ. Ведём полевые журналы, акты, отчётную документацию, готовим материалы для лицензирования и отчётность перед государственными органами на всех этапах работ.",
    capabilities: [
      "Ведение полевой и отчётной документации",
      "Документация для лицензирования",
      "Отчётность перед госорганами",
      "Сопровождение на всех этапах работ",
    ],
  },
  {
    id: "washing",
    icon: WashIcon,
    title: "Отмывка и промывка",
    description:
      "Отмывка и промывка золотоносных песков на полевых работах: извлечение свободного золота с контролем потерь. Оптимальная технология промывки подбирается по результатам опробования конкретного объекта.",
    capabilities: [
      "Промывка золотоносных песков",
      "Отмывка шлиховых проб",
      "Извлечение свободного золота",
      "Контроль потерь при промывке",
    ],
  },
  {
    id: "analysis",
    icon: AnalysisIcon,
    title: "Пробирный анализ",
    description:
      "Лабораторное определение содержания золота и серебра в отобранных пробах. Результаты оформляются в виде официальных протоколов, которые принимаются государственными органами и могут использоваться для подсчёта запасов.",
    capabilities: [
      "Определение содержания Au и Ag в пробах",
      "Официальные протоколы результатов",
      "Работа с рудами, концентратами и шлихами",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1508] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#e0dcc8]/80 max-w-3xl mx-auto mb-6">
            Проведём ваш проект &laquo;за руку&raquo;, от&nbsp;А до&nbsp;Я —
            от геологической разведки и проектирования до полевых работ
          </p>
          <p className="text-base sm:text-lg text-[#d4af37]/90 max-w-2xl mx-auto font-medium">
            Все этапы, документы и инстанции мы берём на себя
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 p-6 sm:p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4af37]/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Left: Title and Description */}
                <div className="flex-1">
                  <div className="flex items-start sm:items-center gap-4 mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon size={28} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <span className="text-[#d4af37]/60 text-sm font-medium">
                        0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#e0dcc8]">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-[#e0dcc8]/70 leading-relaxed mb-6 lg:mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Right: Capabilities */}
                <div className="lg:w-96">
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h3 className="text-lg font-semibold text-[#d4af37] mb-4">
                      Что входит
                    </h3>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-center gap-3 text-sm sm:text-base text-[#e0dcc8]/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
              Доведём проект от А до Я
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#e0dcc8]/70 mb-10 max-w-2xl mx-auto">
            Возьмём за руку на первом шаге и не отпустим до результата.
            Свяжитесь с нами для обсуждения вашего проекта и индивидуального
            предложения
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#0a0a0a] px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-[#e0c048] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/25"
          >
            Связаться с нами
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
