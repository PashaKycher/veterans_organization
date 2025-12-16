import React from 'react'
import { motion } from "framer-motion";


const Intro = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-6 py-12">
            <div className="max-w-3xl text-base leading-relaxed text-text">
                <p>
                    «Позиція» — це публічні субʼєктні заяви Клубу Захисників України.
                    Ми фіксуємо власне бачення подій, рішень і процесів, які мають
                    визначальне значення для оборонної нації, державотворення та
                    поваги до служби.
                </p>
                <p className="mt-4">
                    Тут немає компромісних формулювань чи нейтральних оглядів.
                    Кожен текст — це відповідальність за сказане.
                </p>
            </div>
        </motion.section>
    )
}


export default Intro