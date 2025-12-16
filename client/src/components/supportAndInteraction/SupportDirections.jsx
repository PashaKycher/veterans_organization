import React from 'react'
import { motion } from "framer-motion";
import { directions } from '../../assets/assets';

const SupportDirections = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-bg py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-[#1F2328]">
                    Напрями підтримки
                </h2>


                <div className="mt-12 grid md:grid-cols-2 gap-12">
                    {directions.map((item, i) => (
                        <motion.div whileHover={{ y: -4 }} key={i} className="cursor-pointer bg-white rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-medium text-[#1F2328]">{item.title}</h3>
                            <p className="mt-4 text-[#3A3F45]">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default SupportDirections