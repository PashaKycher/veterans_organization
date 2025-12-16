import React from 'react'
import { motion } from "framer-motion";


const CTA = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6 py-24">

            <div className="bg-[#111827] text-white rounded-2xl p-12 md:p-16">
                <h2 className="text-3xl font-semibold mb-4">Хочеш бути частиною цього рівня</h2>

                <p className="text-[#D1D5DB] max-w-2xl mb-8">
                    Клуб Захисників України — це середовище для людей, які готові
                    брати відповідальність і діяти. Лідерство починається з рішення.
                </p>

                <button className="bg-white text-text px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    Долучитися до Клубу
                </button>
            </div>
        </motion.section>
    )
}


export default CTA