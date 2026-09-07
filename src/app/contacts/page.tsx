"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Геологическая разведка",
  "Буровые услуги",
  "Проектирование",
  "Отчёт с подсчётом запасов",
  "Технико-экономическое обоснование",
  "Документальное сопровождение",
  "Отмывка и промывка",
  "Пробирный анализ",
  "Консультации",
  "Другое",
];

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-dark)]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[120px]" />
        <div className="relative text-center max-w-4xl mx-auto">
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Контакты
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Свяжитесь с <span className="text-[var(--gold)]">нами</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Мы ответим на ваши вопросы и поможем определиться с объёмом работ
            для вашего проекта
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-8">
                Напишите <span className="text-[var(--gold)]">нам</span>
              </h2>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-6">✓</div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--gold)]">
                    Сообщение отправлено
                  </h3>
                  <p className="text-[var(--text-muted)] max-w-md mx-auto">
                    Спасибо за обращение! Мы свяжемся с вами в ближайшее время
                    для обсуждения деталей.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-8 text-sm text-[var(--gold)]/60 hover:text-[var(--gold)] transition-colors underline underline-offset-4"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Ваше имя <span className="text-[var(--gold)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full bg-[var(--bg-dark)] border border-[var(--gold)]/15 rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/40 focus:outline-none focus:border-[var(--gold)]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Email <span className="text-[var(--gold)]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ivan@example.com"
                        className="w-full bg-[var(--bg-dark)] border border-[var(--gold)]/15 rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/40 focus:outline-none focus:border-[var(--gold)]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="w-full sm:w-1/2 bg-[var(--bg-dark)] border border-[var(--gold)]/15 rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/40 focus:outline-none focus:border-[var(--gold)]/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-3">
                      Интересующая услуга
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const active = form.service === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() =>
                              setForm({ ...form, service: active ? "" : s })
                            }
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                              active
                                ? "bg-[var(--gold)]/15 border-[var(--gold)]/50 text-[var(--gold-light)]"
                                : "bg-[var(--bg-dark)] border-[var(--gold)]/15 text-[var(--text-muted)] hover:border-[var(--gold)]/35 hover:text-[var(--text)]"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Сообщение <span className="text-[var(--gold)]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ваш проект или задайте вопрос..."
                      className="w-full bg-[var(--bg-dark)] border border-[var(--gold)]/15 rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]/40 focus:outline-none focus:border-[var(--gold)]/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[var(--gold)] text-[var(--bg-dark)] font-semibold px-10 py-3.5 rounded-full hover:bg-[var(--gold-light)] transition-colors duration-300"
                  >
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl p-7">
              <h3 className="text-lg font-semibold mb-5 text-[var(--text)]">
                Наш офис
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <span className="text-[var(--gold)] text-lg mt-0.5">◎</span>
                  <div>
                    <p className="text-[var(--text)] font-medium">Адрес</p>
                    <p className="text-sm text-[var(--text-muted)]">
                      123456, г.&nbsp;Москва, ул.&nbsp;Примерная, д.&nbsp;10
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[var(--gold)] text-lg mt-0.5">☎</span>
                  <div>
                    <p className="text-[var(--text)] font-medium">Телефон</p>
                    <a
                      href="tel:+74951234567"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[var(--gold)] text-lg mt-0.5">✉</span>
                  <div>
                    <p className="text-[var(--text)] font-medium">Email</p>
                    <a
                      href="mailto:info@specstroy.ru"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
                    >
                      info@specstroy.ru
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[var(--gold)] text-lg mt-0.5">◷</span>
                  <div>
                    <p className="text-[var(--text)] font-medium">Часы работы</p>
                    <p className="text-sm text-[var(--text-muted)]">
                      Пн — Пт: 9:00 — 18:00
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      Сб, Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl overflow-hidden">
              <div className="relative h-64 bg-[var(--bg-dark)] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent" />
                <div className="relative text-center">
                  <div className="text-3xl mb-3 text-[var(--gold)]/30">⬡</div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">
                    ул. Примерная, 10, Москва
                  </p>
                  <p className="text-xs text-[var(--text-muted)]/50">
                    55.7558° N, 37.6173° E
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-muted)]">
                  Расположение офиса на карте. Интеграция с Яндекс.Картами будет
                  доступна в следующем обновлении.
                </p>
              </div>
            </div>

            {/* Additional */}
            <div className="bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--gold)]/10 rounded-2xl p-7">
              <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
                Для партнёров
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Если вы заинтересованы в сотрудничестве или хотите обсудить
                совместные проекты — напишите нам на{" "}
                <a
                  href="mailto:info@specstroy.ru"
                  className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
                >
                  info@specstroy.ru
                </a>{" "}
                или позвоните по указанному номеру.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
