import React from "react";
import { assets } from "../assets/assets";

const figures = [
  {
    name: "Марко Дорошенко",
    role: "Засновник ветеранського центру",
    desc: "Створив простір для реабілітації й навчання ветеранів у громадах. Розвиває мережу локальних хабів та наставницьких програм.",
    link: "#"
  },
  {
    name: "Ірина Костенко",
    role: "Кураторка культурних проєктів",
    desc: "Запускає виставки та документальні ініціативи про досвід ветеранів. Працює з громадами, щоб голос ветеранів був почутий.",
    link: "#"
  },
  {
    name: "Олег Савчук",
    role: "Лідер спільноти з адаптації",
    desc: "Підтримує ветеранів при поверненні до цивільного життя: організовує групи взаємодопомоги, тренінги з працевлаштування та менторство.",
    link: "#"
  },
  {
    name: "Катерина Левченко",
    role: "Менторка з ментального здоров’я",
    desc: "Працює з психологами та фасилітаторами, щоб розвивати програми стійкості, групові зустрічі та кризову підтримку для родин.",
    link: "#"
  },
  {
    name: "Руслан Романюк",
    role: "Співзасновник освітньої ініціативи",
    desc: "Розробляє курси перекваліфікації для ветеранів. Допомагає будувати кар’єрні траєкторії та партнерства з бізнесом.",
    link: "#"
  },
  {
    name: "Олена Яремчук",
    role: "Активістка та фандрейзерка",
    desc: "Координує кампанії зі збору коштів на реабілітацію та обладнання. Впроваджує прозорі звіти та партнерські проєкти.",
    link: "#"
  },
];

const PublicFigureCard = ({ name, role, desc, link }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
    <div className="w-full h-40 bg-gradient-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
      Фото
    </div>
    <div className="space-y-1">
      <p className="text-sm font-semibold text-primary">{role}</p>
      <h3 className="text-xl font-bold text-[#03383A]">{name}</h3>
    </div>
    <p className="text-sm text-neutral-700 leading-relaxed flex-1">{desc}</p>
    <div>
      <a href={link} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
        Дізнатися більше
      </a>
    </div>
  </div>
);

const PublicFiguresGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {figures.map((item) => (
      <PublicFigureCard key={item.name} {...item} />
    ))}
  </div>
);

const PublicFigures = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-[#383737]">
      <section className="max-w-6xl mx-auto px-5 py-12 space-y-12">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-4 md:max-w-xl">
            <p className="text-sm font-semibold uppercase text-primary tracking-wide">
              Лідери спільноти
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#03383A] leading-tight">
              Діячі ветеранської спільноти
            </h1>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              Представляємо людей, які формують сучасну ветеранську культуру — ініціаторів проєктів, лідерів думок, засновників спільнот та тих, хто посилює голос ветеранів у суспільстві.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#profiles" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                Переглянути профілі
              </a>
              <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                Запропонувати героя
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-80 lg:w-96">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative bg-white border border-primary/10 shadow-lg rounded-2xl p-4">
              <img
                src={assets.homeHero}
                alt="Лідери ветеранської спільноти"
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-primary">Обличчя змін</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Вони створюють ініціативи, що роблять ветеранську спільноту сильнішою.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profiles */}
        <section id="profiles" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Профілі діячів</h2>
          </div>
          <PublicFiguresGrid />
        </section>
      </section>
    </main>
  );
};

export default PublicFigures;