import React from "react";
import { assets } from "../assets/assets";

const programs = [
  {
    title: "Історичні молодіжні табори",
    desc: "Занурення в сучасну історію України через дискусії, виїзні лекції та роботу в командах. Формує повагу до досвіду ветеранів без романтизації війни.",
    link: "#"
  },
  {
    title: "Військово-патріотичні вишколи",
    desc: "Безпечні тренінги з командної взаємодії, тактичного мислення та лідерства для підлітків. Акцент — на відповідальності та співпраці.",
    link: "#"
  },
  {
    title: "Діалог поколінь",
    desc: "Зустрічі юнацтва з ветеранами у форматі модерованих розмов. Допомагає краще зрозуміти ціну свободи та виклики повернення до цивільного життя.",
    link: "#"
  },
  {
    title: "Молодіжні лідерські клуби",
    desc: "Клуби, де підлітки розвивають проєктне мислення, працюють з менторством ветеранів і вчаться ініціювати соціальні зміни у своїх громадах.",
    link: "#"
  },
  {
    title: "Історико-культурні воркшопи",
    desc: "Практичні заняття з медіаграмотності, документування історій, створення мультимедійних проєктів про ветеранів та їхній вклад у суспільство.",
    link: "#"
  },
  {
    title: "Волонтерські юнацькі ініціативи",
    desc: "Підтримка локальних волонтерських акцій: від зборів до інформаційних кампаній. Формує цінність взаємодопомоги та командної роботи.",
    link: "#"
  },
];

const benefits = [
  "Критичне мислення та медіаграмотність",
  "Розуміння сучасної історії та контексту війни",
  "Повага до ветеранів та емпатія до їхніх родин",
  "Командний дух і навички співпраці",
  "Громадянська відповідальність та лідерство",
  "Участь у волонтерських ініціативах і проєктах",
];

const gallery = [
  { title: "Навчальні воркшопи", desc: "Командна робота над історичними проєктами." },
  { title: "Молодіжні табори", desc: "Практичні сесії з лідерства та комунікації." },
  { title: "Діалог із ветеранами", desc: "Безпечний простір для відкритих розмов і питань." },
];

const YouthProgramCard = ({ title, desc, link }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
    <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
      ★
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

const YouthProgramsGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {programs.map((item) => (
      <YouthProgramCard key={item.title} {...item} />
    ))}
  </div>
);

const YouthGallery = () => (
  <div className="grid md:grid-cols-3 gap-5">
    {gallery.map((item, idx) => (
      <div key={item.title} className="bg-white rounded-2xl shadow-md p-4 border border-primary/10 space-y-3">
        <div className="w-full h-32 bg-gradient-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
          Фото {idx + 1}
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">{item.title}</p>
          <p className="text-xs text-neutral-700 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

const Youth = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-[#383737]">
      <section className="max-w-6xl mx-auto px-5 py-12 space-y-12">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-4 md:max-w-xl">
            <p className="text-sm font-semibold uppercase text-primary tracking-wide">
              Юнацькі ініціативи
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#03383A] leading-tight">
              Юнацькі програми та патріотичне виховання
            </h1>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              Програми та ініціативи, що допомагають молоді глибше розуміти сучасну історію, знайомитися з ветеранами, розвивати командний дух і цінності громадянського суспільства.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#programs" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                Переглянути програми
              </a>
              <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                Запропонувати ініціативу
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-80 lg:w-96">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative bg-white border border-primary/10 shadow-lg rounded-2xl p-4">
              <img
                src={assets.homeOpportunitiesAndApproach}
                alt="Юнацькі програми"
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-primary">Безпека і довіра</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Усі активності спроєктовані з акцентом на безпечний освітній формат.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs */}
        <section id="programs" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Програми для молоді</h2>
          </div>
          <YouthProgramsGrid />
        </section>

        {/* Why it matters */}
        <section className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center bg-white rounded-2xl shadow-md p-8 border border-primary/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Навіщо це молоді?</h2>
            </div>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              Юнацькі програми допомагають формувати відповідальне покоління, яке розуміє історичний контекст, підтримує ветеранів і готове працювати для спільного майбутнього.
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
            <h3 className="text-lg font-semibold text-[#03383A]">Формат участі</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">Онлайн-лекції, офлайн-зустрічі, менторські сесії та спільні волонтерські проєкти. Ми дбаємо про безпечний та інклюзивний простір.</p>
            <p className="text-xs text-neutral-600">* Участь погоджується з батьками або опікунами, якщо це неповнолітні учасники.</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Візуальні історії</h2>
          </div>
          <YouthGallery />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-10 space-y-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#03383A]">Долучайтесь до програм</h3>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            Разом формуємо покоління, що розуміє ціну свободи та вміє працювати задля спільного добра. Оберіть формат участі або підтримайте ініціативу.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://example.com/youth-join" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
              Стати учасником
            </a>
            <a href="https://example.com/support" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Підтримати програму
            </a>
            <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Запропонувати партнерство
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Youth;