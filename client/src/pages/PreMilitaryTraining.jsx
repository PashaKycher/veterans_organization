import React from "react";
import { assets } from "../assets/assets";

const modules = [
  {
    title: "Базові знання безпеки",
    desc: "Розуміння ризиків, цивільної оборони, поведінки під час тривог та принципів особистої безпеки.",
    link: "#"
  },
  {
    title: "Тактика та взаємодія",
    desc: "Командна робота, ролі в підрозділі, базові тактичні схеми без використання реальної зброї.",
    link: "#"
  },
  {
    title: "Перша домедична допомога",
    desc: "Алгоритми допомоги, робота з аптечкою, евакуація поранених, стабілізація до прибуття медиків.",
    link: "#"
  },
  {
    title: "Фізична підготовка",
    desc: "Програми на витривалість і координацію, безпечні тренування та відновлення.",
    link: "#"
  },
  {
    title: "Мапи й навігація",
    desc: "Орієнтування на місцевості, робота з картою, базова топографія та планування маршрутів.",
    link: "#"
  },
  {
    title: "Комунікація та дисципліна",
    desc: "Радіообмін, сигнали, робота зі стресом і побудова командної дисципліни.",
    link: "#"
  },
];

const benefits = [
  "Осмислена підготовка без зайвої мілітаризації",
  "Знання, що підвищують безпеку та впевненість",
  "Повага до військових стандартів і дисципліни",
  "Командні навички та відповідальність",
  "Базові медичні вміння та навички виживання",
  "Краще розуміння ролі оборони у громаді",
];

const timeline = [
  { title: "Онлайн-матеріали", desc: "Відео та конспекти для самостійного вивчення." },
  { title: "Практичні заняття", desc: "Очні тренування з інструкторами та моделювання сценаріїв." },
  { title: "Підсумковий модуль", desc: "Закріплення навичок, командні вправи, рекомендації інструкторів." },
];

const ModuleCard = ({ title, desc, link }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
    <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
      ●
    </div>
    <div className="space-y-1">
      <h3 className="text-lg font-semibold text-[#03383A]">{title}</h3>
      <p className="text-sm text-neutral-700 leading-relaxed">{desc}</p>
    </div>
    <div className="pt-2">
      <a href={link} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
        Дізнатися більше
      </a>
    </div>
  </div>
);

const ModulesGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {modules.map((item) => (
      <ModuleCard key={item.title} {...item} />
    ))}
  </div>
);

const Timeline = () => (
  <div className="grid md:grid-cols-3 gap-5">
    {timeline.map((item, idx) => (
      <div key={item.title} className="bg-white rounded-2xl shadow-md p-5 border border-primary/10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {String(idx + 1).padStart(2, "0")}
          </div>
          <h4 className="text-lg font-semibold text-[#03383A]">{item.title}</h4>
        </div>
        <p className="text-sm text-neutral-700 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
);

const PreMilitaryTraining = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-[#383737]">
      <section className="max-w-6xl mx-auto px-5 py-12 space-y-12">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-4 md:max-w-xl">
            <p className="text-sm font-semibold uppercase text-primary tracking-wide">
              До військова підготовка
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#03383A] leading-tight">
              Освітні матеріали та курси для підготовки молоді
            </h1>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              Структуровані програми, що допомагають молоді безпечно опановувати базові навички: від домедичної допомоги до командної взаємодії та дисципліни.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#modules" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                Переглянути модулі
              </a>
              <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                Записатися на курс
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-80 lg:w-96">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative bg-white border border-primary/10 shadow-lg rounded-2xl p-4">
              <img
                src={assets.homeOpportunitiesAndApproach}
                alt="До військова підготовка"
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-primary">Безпечний формат</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Практика під наглядом інструкторів, акцент на цивільні та гуманітарні аспекти.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <section id="modules" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Модулі підготовки</h2>
          </div>
          <ModulesGrid />
        </section>

        {/* Why */}
        <section className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center bg-white rounded-2xl shadow-md p-8 border border-primary/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Навіщо це потрібно?</h2>
            </div>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              Програма формує відповідальне ставлення до безпеки, дисципліни та командної роботи. Вона створена, щоб молодь мала базові навички й розуміння стандартів, не підміняючи професійне навчання військових.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FBFB] border border-primary/10 rounded-2xl p-6 space-y-3 shadow-inner">
            <h3 className="text-lg font-semibold text-[#03383A]">Підхід та безпека</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Заняття проходять з інструкторами, з акцентом на безпеку, цивільну підготовку та етичний кодекс. Участь неповнолітніх узгоджується з батьками.
            </p>
            <p className="text-xs text-neutral-600">
              * Програма не передбачає роботи зі зброєю чи небезпечним спорядженням без професійної сертифікації та законних підстав.
            </p>
          </div>
        </section>

        {/* Timeline / Steps */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Формат проходження</h2>
          </div>
          <Timeline />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-10 space-y-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#03383A]">Долучайтесь до підготовки</h3>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            Оберіть формат: онлайн-навчання, практичні заняття чи командні тренування. Ми допоможемо підібрати програму, що відповідає вашому рівню.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://example.com/pre-military-apply" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
              Стати учасником
            </a>
            <a href="https://example.com/support" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Підтримати програму
            </a>
            <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Поставити запитання
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default PreMilitaryTraining;