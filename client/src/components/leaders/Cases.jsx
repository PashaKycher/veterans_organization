import React from 'react'
import { motion } from "framer-motion";
import { cases } from '../../assets/assets';

const Cases = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#F9FAFB] border-t border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-semibold mb-6">Кейси та досвід</h2>
                <ul className="space-y-4 text-[#374151]">
                    {cases.map((c, i) => (
                        <li key={i} className="border-l-2 border-[#9CA3AF] pl-4">
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}


export default Cases