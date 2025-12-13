import React from 'react'
import { motion } from 'motion/react'
import { assets, benefitsMilitary } from '../../assets/assets'

const Why = () => {
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
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Навіщо це потрібно?</h2>
                    </div>
                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                        Програма формує відповідальне ставлення до безпеки, дисципліни та командної роботи. Вона створена, щоб молодь мала базові навички й розуміння стандартів, не підміняючи професійне навчання військових.
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                        {benefitsMilitary.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
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
        </motion.section>
    )
}

export default Why