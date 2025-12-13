import React from 'react'
import { motion } from 'motion/react'

const WhoVolunteers = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section className="bg-white rounded-2xl shadow-md p-8 border border-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Хто такі волонтери</h2>
                </div>
                <div className="space-y-3 text-sm md:text-base text-neutral-700 leading-relaxed">
                    <p>Волонтери — це люди, які безоплатно віддають час та енергію, щоб підтримати ветеранів і їхні родини. Вони діляться знаннями, досвідом та ресурсами, аби кожен боєць мав доступ до гідної допомоги.</p>
                    <p>У команді волонтерів є психологи, юристи, медики, логісти, комунікаційники та просто небайдужі. Всі вони працюють разом, щоб створювати зрозумілі сервіси, швидко реагувати на запити та підтримувати спільноту.</p>
                    <p>Завдяки волонтерам ветеранські ініціативи залишаються людяними, гнучкими та ефективними: від допомоги конкретній родині до запуску великих проєктів у громадах.</p>
                </div>
            </section>
        </motion.section>
    )
}

export default WhoVolunteers