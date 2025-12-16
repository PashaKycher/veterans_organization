import React from 'react'
import { motion } from "framer-motion";
import { princip } from '../../assets/assets'

const Principles = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-bg py-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {princip.map((item, i) => (
                    <div key={i} className="border-l-2 border-[#A5B4B6] pl-6">
                        <h3 className="text-xl font-medium text-[#1F2328]">{item.title}</h3>
                        <p className="mt-3 text-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Principles