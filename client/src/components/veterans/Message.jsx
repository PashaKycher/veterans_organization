import React from 'react'
import { motion } from 'motion/react'

const Message = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10">
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Цей розділ створений, щоб допомогти ветеранам, ветеранкам і їхнім родинам швидко знайти корисні ресурси: від психологічної підтримки й юридичних консультацій до фінансових сервісів, навчання та працевлаштування.
                </p>
            </div>
        </motion.section>
    )
}

export default Message