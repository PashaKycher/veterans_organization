import React from 'react'
import { motion } from 'motion/react'

const HowJoin = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section id="join" className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center bg-white rounded-2xl shadow-md p-8 border border-primary/10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
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
                        <li className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Онбординг і короткий тренінг — щоб ви відчували впевненість у процесах.</span></li>
                        <li className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Прозора звітність за кожним напрямом допомоги.</span></li>
                        <li className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Спільнота підтримки та обмін досвідом між волонтерами.</span></li>
                    </ul>
                </div>

                <div className="bg-[#F8FBFB] border border-primary/10 rounded-2xl p-6 space-y-4 shadow-inner">
                    <h3 className="text-lg font-semibold text-[#03383A]">Кому потрібні волонтери зараз</h3>
                    <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                        <p className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Психологи та фасилітатори груп підтримки.</span></p>
                        <p className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Юристи для консультацій щодо статусу та пільг.</span></p>
                        <p className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Логісти та водії для доставки гуманітарної допомоги.</span></p>
                        <p className="flex gap-2"><span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span><span>Комунікаційники для розповсюдження інформації й фандрейзингу.</span></p>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}

export default HowJoin