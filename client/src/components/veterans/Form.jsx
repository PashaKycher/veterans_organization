import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'

const Form = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-7 border border-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">04</div>
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
        </motion.section>
    )
}

export default Form