import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'

const Message = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

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
        </motion.section>
    )
}

export default Message