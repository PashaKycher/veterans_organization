import React from "react";
import { motion } from "motion/react";
import { assets, volunteeringLinks } from "../assets/assets";
import { Blackout } from '../components/helpers/Blackout';

const helpAreas = [
  {
    title: "Психологічна підтримка",
    desc: "Організація кризових консультацій, груп взаємодопомоги, супровід ветеранів та їхніх родин під час адаптації."
  },
  {
    title: "Юридична консультація",
    desc: "Роз’яснення прав, допомога з оформленням статусу, пільг та захистом інтересів ветеранів у держорганах."
  },
  {
    title: "Допомога родинам ветеранів",
    desc: "Підтримка сімей у питаннях догляду, навчання дітей, доступу до соцпослуг і стабільних побутових рішень."
  },
  {
    title: "Організаційна / логістична підтримка",
    desc: "Закупівлі та доставка спорядження, координація гуманітарних вантажів, забезпечення роботи локальних хабів."
  },
  {
    title: "Фандрейзинг та благодійність",
    desc: "Збір коштів, прозорі звіти, партнерства з бізнесом і фондами для сталих волонтерських програм."
  }
];

const stories = [
  {
    name: "Історія Олени",
    role: "Координаторка логістики",
    text: "Команда за місяць зібрала й відправила три партії обладнання на деокуповані території. Довіра людей — наша мотивація.",
  },
  {
    name: "Досвід Максима",
    role: "Психолог-волонтер",
    text: "Групові зустрічі допомогли ветеранам відчути підтримку спільноти. Малими кроками ми повертаємо людям стійкість.",
  },
  {
    name: "Відгук Іри",
    role: "Фандрейзинг",
    text: "Коли бізнес і громада працюють разом, можна запускати системні ініціативи — від авто до програм реабілітації.",
  },
];

const Volunteering = () => {
  const [open, setOpen] = useState(true);
  const data = volunteeringLinks

  return (
    <>
      <motion.main
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#F1F4F4] min-h-screen text-dark">

        {/* Background image */}
        <img
          src={assets.volunteering}
          alt="homeHero"
          className="w-full h-auto lg:h-screen object-cover"
        />

        {/* Dark overlay */}
        <Blackout />

        <section className="max-w-6xl mx-auto px-5 py-12 space-y-12">
          {/* Hero */}
          <div className="relative overflow-hidden bg-linear-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-4 md:max-w-xl">
              <p className="text-sm font-semibold uppercase text-primary tracking-wide">
                Волонтерство для ветеранів
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#03383A] leading-tight">
                Спільнота, що підсилює ветеранів і їхні родини
              </h1>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                Волонтери — це люди, які перетворюють підтримку на дію: від психологічного супроводу до логістики та зборів.
                Ми об’єднуємо тих, хто хоче допомогти, із тими, хто потребує допомоги, щоб ветеранська спільнота відчувала опору щодня.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#join" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                  Долучитися
                </a>
                <a href="#help-areas" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                  Дізнатися більше
                </a>
              </div>
            </div>

            <div className="relative w-full md:w-80 lg:w-96">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
              <div className="relative bg-white border border-primary/10 shadow-lg rounded-2xl p-4">
                <img
                  src={assets.homeAboutUs}
                  alt="Команда волонтерів"
                  className="w-full h-52 object-cover rounded-xl"
                />
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-semibold text-primary">Єдність у дії</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Працюємо прозоро, узгоджено та з повагою до кожного ветерана.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who volunteers are */}
          <section className="bg-white rounded-2xl shadow-md p-8 border border-primary/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Хто такі волонтери</h2>
            </div>
            <div className="space-y-3 text-sm md:text-base text-neutral-700 leading-relaxed">
              <p>Волонтери — це люди, які безоплатно віддають час та енергію, щоб підтримати ветеранів і їхні родини. Вони діляться знаннями, досвідом та ресурсами, аби кожен боєць мав доступ до гідної допомоги.</p>
              <p>У команді волонтерів є психологи, юристи, медики, логісти, комунікаційники та просто небайдужі. Всі вони працюють разом, щоб створювати зрозумілі сервіси, швидко реагувати на запити та підтримувати спільноту.</p>
              <p>Завдяки волонтерам ветеранські ініціативи залишаються людяними, гнучкими та ефективними: від допомоги конкретній родині до запуску великих проєктів у громадах.</p>
            </div>
          </section>

          {/* How volunteers help */}
          <section id="help-areas" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Як волонтери допомагають</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {helpAreas.map((area) => (
                <div key={area.title} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center">•</span>
                    <h3 className="text-lg font-semibold text-[#03383A]">{area.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to join */}
          <section id="join" className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center bg-white rounded-2xl shadow-md p-8 border border-primary/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Як долучитися</h2>
              </div>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                Оберіть зручний формат участі: допомога у зборі коштів, доставка, консультації чи інформаційна підтримка.
                Ми підкажемо, з чого почати, та забезпечимо прозорість процесів.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://example.com/volunteer-form" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                  Заповнити заявку
                </a>
                <a href="mailto:info@company.com" className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                  Написати команді
                </a>
              </div>
              <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Онбординг і короткий тренінг — щоб ви відчували впевненість у процесах.</span></li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Прозора звітність за кожним напрямом допомоги.</span></li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Спільнота підтримки та обмін досвідом між волонтерами.</span></li>
              </ul>
            </div>

            <div className="bg-[#F8FBFB] border border-primary/10 rounded-2xl p-6 space-y-4 shadow-inner">
              <h3 className="text-lg font-semibold text-[#03383A]">Кому потрібні волонтери зараз</h3>
              <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                <p className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Психологи та фасилітатори груп підтримки.</span></p>
                <p className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Юристи для консультацій щодо статусу та пільг.</span></p>
                <p className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Логісти та водії для доставки гуманітарної допомоги.</span></p>
                <p className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"></span><span>Комунікаційники для розповсюдження інформації й фандрейзингу.</span></p>
              </div>
            </div>
          </section>

          {/* Stories */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">04</div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Історії волонтерів</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stories.map((story) => (
                <div key={story.name} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-3">
                  <div className="w-full h-32 bg-linear-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
                    Фото
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-primary">{story.role}</p>
                    <h3 className="text-lg font-semibold text-[#03383A]">{story.name}</h3>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">“{story.text}”</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </motion.main>

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </>
  );
};

export default Volunteering;