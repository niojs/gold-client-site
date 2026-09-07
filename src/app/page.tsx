import Link from "next/link";
import {
  DrillIcon,
  GeologicalIcon,
  WashIcon,
  MapIcon,
  ShieldIcon,
  AnalysisIcon,
  DocumentIcon,
  DropIcon,
  LeafIcon,
  ArrowRightIcon,
  ClockIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/Icons";

const services = [
  {
    icon: GeologicalIcon,
    title: "Геологическая разведка",
    description:
      "Комплексное геологическое изучение площади: картирование, опробование и прогнозирование золотоносных объектов.",
    href: "/services#exploration",
  },
  {
    icon: DrillIcon,
    title: "Буровые услуги",
    description:
      "Бурение с максимально полным выносом керна со дна скважины для оценки рудоносности глубинных горизонтов.",
    href: "/services#drilling",
  },
  {
    icon: MapIcon,
    title: "Проектирование",
    description:
      "Разработка проектной документации на геологоразведочные и горные работы с учётом требований законодательства.",
    href: "/services#design",
  },
  {
    icon: DocumentIcon,
    title: "Отчёт с подсчётом запасов",
    description:
      "Составление отчётов с подсчётом запасов по методике ГКЗ для постановки на государственный баланс.",
    href: "/services#reserves",
  },
  {
    icon: ShieldIcon,
    title: "Технико-экономическое обоснование",
    description:
      "ТЭО освоения месторождения: оценка рентабельности, сроков окупаемости и оптимальной технологии отработки.",
    href: "/services#feasibility",
  },
  {
    icon: ClockIcon,
    title: "Документальное сопровождение",
    description:
      "Полное документальное сопровождение — от проектно-геологоразведочных работ до полевых работ.",
    href: "/services#documentation",
  },
  {
    icon: WashIcon,
    title: "Отмывка и промывка",
    description:
      "Отмывка и промывка золотоносных песков с извлечением свободного золота и контролем потерь.",
    href: "/services#washing",
  },
  {
    icon: AnalysisIcon,
    title: "Пробирный анализ",
    description:
      "Лабораторное определение содержания золота и серебра в пробах с официальными протоколами результатов.",
    href: "/services#analysis",
  },
];

const advantages = [
  {
    icon: UsersIcon,
    title: "Ведём за руку от А до Я",
    description:
      "Проводим клиента буквально за руку через все этапы проекта — от первой консультации и разведки до защиты отчёта и полевых работ. Вам не придётся разбираться в тонкостях самостоятельно.",
  },
  {
    icon: TargetIcon,
    title: "Полный цикл работ",
    description:
      "От геологической разведки и проектирования до полевых работ и промывки — все этапы в рамках одного контракта.",
  },
  {
    icon: DocumentIcon,
    title: "Документальная точность",
    description:
      "Формируем полный пакет документации — от полевых журналов до отчётов с подсчётом запасов и ТЭО.",
  },
  {
    icon: ShieldIcon,
    title: "Соответствие требованиям ГКЗ",
    description:
      "Отчёты и подсчёт запасов готовятся по методике ГКЗ и принимаются государственными органами без доработок.",
  },
  {
    icon: LeafIcon,
    title: "Экологический контроль",
    description:
      "Соблюдаем нормативы природоохранного законодательства, обеспечиваем оборотное водоснабжение и рекультивацию земель.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1508] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#d4af37] rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-[#b8960c] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
              Введение проектов
            </span>
            <br />
            <span className="text-[#e0dcc8]">по золотодобыче с 2020 года</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#e0dcc8]/80 max-w-3xl mx-auto mb-6 leading-relaxed">
            ООО &laquo;Спецбурстрой&raquo; &mdash; проведём ваш проект
            &laquo;за руку&raquo;, от&nbsp;А до&nbsp;Я: геологическая разведка,
            проектирование, отчёты с подсчётом запасов, ТЭО и полное
            документальное сопровождение.
          </p>
          <p className="text-lg text-[#d4af37]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Вы просто получаете результат &mdash; все этапы и инстанции мы берём
            на себя
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#0a0a0a] px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#e0c048] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/25"
          >
            Наши услуги
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>

      {/* Experience Badge */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative flex items-center justify-center gap-6 py-10 px-12 rounded-3xl border border-[#d4af37]/20 bg-gradient-to-r from-[#1a1508]/50 via-[#0a0a0a] to-[#1a1508]/50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />
            <div className="relative text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-[#e0dcc8]/60 text-sm mt-1">лет</div>
            </div>
            <div className="w-px h-16 bg-[#d4af37]/30" />
            <div className="relative">
              <p className="text-[#e0dcc8]/80 text-lg leading-relaxed">
                Геологическая разведка, проектирование, подсчёт запасов<br />
                и полное документальное сопровождение работ
                <br />
                <span className="text-[#d4af37] font-medium">с 2020 года</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
                Наши услуги
              </span>
            </h2>
            <p className="text-[#e0dcc8]/70 text-lg max-w-2xl mx-auto">
              Геологическая разведка, проектирование, отчёты с подсчётом
              запасов, ТЭО и документальное сопровождение
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                  <service.icon size={28} className="text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#e0dcc8] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#e0dcc8]/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#d4af37] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                  <ArrowRightIcon size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
                Почему выбирают нас
              </span>
            </h2>
            <p className="text-[#e0dcc8]/70 text-lg max-w-2xl mx-auto">
              Мы гарантируем качество, безопасность и профессионализм на каждом
              этапе работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="flex gap-5 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4af37]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                  <advantage.icon size={28} className="text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e0dcc8] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-[#e0dcc8]/60 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] bg-clip-text text-transparent">
              Проведём ваш проект от А до Я
            </span>
          </h2>
          <p className="text-xl text-[#e0dcc8]/70 mb-10 max-w-2xl mx-auto">
            Не оставим вас один на один с процессом: возьмём за руку и доведём
            до результата — от бесплатной консультации до готового отчёта.
            Свяжитесь с нами для расчёта стоимости вашего проекта.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#0a0a0a] px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#e0c048] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/25"
          >
            Связаться с нами
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
