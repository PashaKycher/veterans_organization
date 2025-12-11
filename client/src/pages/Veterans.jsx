import React from 'react'
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { Blackout } from '../components/helpers/Blackout';

const resourceBlocks = [
  {
    title: 'Психологічна підтримка',
    items: [
      'Консультації з кризовими психологами',
      'Ресурси для адаптації після повернення',
      'Групи підтримки для ветеранів та родин'
    ]
  },
  {
    title: 'Юридична допомога',
    items: [
      'Як оформити статус ветерана',
      'Які документи потрібні та де їх отримати',
      'Допомога з пільгами, правами та захистом'
    ]
  },
  {
    title: 'Фінансова підтримка',
    items: [
      'Гранти й програми підтримки бізнесу',
      'Компенсації та одноразові виплати',
      'Фінансове планування та консультації'
    ]
  }
]

const linksAndGuides = [
  'Державні сервіси (Мінветеранів та партнери)',
  'Інструкції: як отримати статус ветерана чи пільги',
  'Перелік зовнішніх порталів для ветеранів і родин'
]

const faq = [
  { q: 'Як отримати соціальну допомогу?', a: 'Зверніться до центру підтримки ветеранів у вашому регіоні: вони допоможуть подати заяву, підготувати документи та проконтролюють розгляд.' },
  { q: 'Які права має ветеран?', a: 'Пільги на проїзд, медичне забезпечення, реабілітацію, освітні програми, а також податкові та кредитні послаблення за чинним законодавством.' },
  { q: 'Де знайти психолога?', a: 'Скористайтеся картою центрів підтримки або запишіться на онлайн-консультацію через наш чат — ми підберемо перевіреного фахівця.' }
]

const interactiveTools = [
  'Калькулятор пільг та можливих компенсацій',
  'Карта центрів підтримки й локальних хабів',
  'Реєстр актуальних грантів, курсів та стажувань'
]

const updates = [
  'Нові групи підтримки для родин ветеранів — старт наступного тижня.',
  'Відкрито прийом заявок на грантову програму для малого бізнесу.',
  'Додано онлайн-курс з фінансового планування після служби.'
]

const testimonials = [
  {
    name: 'Олег, ветеран',
    quote: 'Команда допомогла знайти юриста та швидко оформити документи. Почуваюся захищеним.'
  },
  {
    name: 'Наталія, ветеранка',
    quote: 'Групи підтримки стали опорою після повернення. Важливо знати, що ти не сам.'
  }
]

const Veterans = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#F1F4F4] min-h-screen text-dark">

      {/* Background image */}
      <img
        src={assets.veterans}
        alt="homeHero"
        className="w-full h-auto lg:h-screen object-cover"
      />

      {/* Dark overlay */}
      <Blackout />
      
      <section className="max-w-6xl mx-auto px-5 py-12 space-y-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10">
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            Цей розділ створений, щоб допомогти ветеранам, ветеранкам і їхнім родинам швидко знайти корисні ресурси: від психологічної підтримки й юридичних консультацій до фінансових сервісів, навчання та працевлаштування.
          </p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Підтримка поруч</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {resourceBlocks.map((block) => (
              <div key={block.title} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-primary mb-3">{block.title}</h3>
                <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-7 space-y-4 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
              <h3 className="text-xl font-semibold text-primary">Корисні посилання та інструкції</h3>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
              {linksAndGuides.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-7 space-y-4 border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
              <h3 className="text-xl font-semibold text-primary">Історії та відгуки</h3>
            </div>
            <div className="space-y-4">
              {testimonials.map((item) => (
                <div key={item.name} className="bg-[#F8FBFB] border border-primary/10 rounded-xl p-4">
                  <p className="text-sm text-neutral-700 leading-relaxed mb-2">“{item.quote}”</p>
                  <p className="text-xs font-semibold text-primary">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-[2fr,1fr] gap-8">
          <div className="bg-white rounded-2xl shadow-md p-7 border border-primary/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">04</div>
              <h3 className="text-xl font-semibold text-primary">Контактна інформація</h3>
            </div>
            <div className="text-sm text-neutral-700 leading-relaxed space-y-2">
              <p>Телефон / чат підтримки: <span className="font-semibold text-primary">+380 (44) 000-00-00</span></p>
              <p>Email: <span className="font-semibold text-primary">support@veterans.org.ua</span></p>
              <p>Локальні хаби та центри: знайдіть найближчий у розділі “Карта центрів підтримки”.</p>
            </div>
            <form className="space-y-3">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-neutral-600">Ваше ім’я</label>
                <input className="border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Ім’я" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-neutral-600">Email або телефон</label>
                <input className="border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="email@domain.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-neutral-600">Повідомлення</label>
                <textarea className="border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" rows="3" placeholder="Чим ми можемо допомогти?"></textarea>
              </div>
              <button type="button" className="w-full md:w-auto bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                Звʼяжіться з нами
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
              <h3 className="text-lg font-semibold text-primary mb-3">Часті запитання</h3>
              <div className="space-y-3">
                {faq.map((item) => (
                  <div key={item.q} className="border border-neutral-100 rounded-lg p-3 bg-[#F8FBFB]">
                    <p className="text-sm font-semibold text-dark">{item.q}</p>
                    <p className="text-xs text-neutral-700 mt-1 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
              <h3 className="text-lg font-semibold text-primary mb-3">Інтерактивні інструменти</h3>
              <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                {interactiveTools.map((tool) => (
                  <li key={tool} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-7 border border-primary/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">05</div>
            <h3 className="text-xl font-semibold text-primary">Блок новин та оновлень</h3>
          </div>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {updates.map((news) => (
              <li key={news} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span>{news}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </motion.main>
  )
}

export default Veterans