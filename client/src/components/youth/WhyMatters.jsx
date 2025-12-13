import React from 'react'
import { motion } from 'motion/react'
import { assets, benefits } from '../../assets/assets'

const WhyMatters = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center bg-white rounded-2xl shadow-md p-8 border border-primary/10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Навіщо це молоді?</h2>
                    </div>
                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                        Юнацькі програми допомагають формувати відповідальне покоління, яке розуміє історичний контекст, підтримує ветеранів і готове працювати для спільного майбутнього.
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                        {benefits.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
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
        </motion.section>
    )
}

export default WhyMatters