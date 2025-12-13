import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'

const CTA = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section className="bg-linear-to-r from-primary/15 via-white to-primary/10 border border-primary/10 shadow-lg rounded-2xl p-8 md:p-10 space-y-4 text-center">
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
        </motion.section>
    )
}

export default CTA