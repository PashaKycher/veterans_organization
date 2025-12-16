import React from 'react'
import { motion } from "framer-motion";
import { partnership } from '../../assets/assets';

const Partnership = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
             className="bg-bg py-20 border-t border-[#D9DEDE]">

            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-[#1F2328]">Партнерство</h2>
                <p className="mt-6 max-w-3xl text-text">
                    КЗУ відкритий до партнерств із бізнесом, освітніми інституціями,
                    аналітичними центрами та громадськими ініціативами, які поділяють
                    цінності служіння, відповідальності та розвитку держави.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-8">
                    {partnership.map((item, i) => (
                        <div key={i} className="border border-[#D9DEDE] rounded-xl p-6 bg-white">
                            <h4 className="text-lg font-medium text-[#1F2328]">{item}</h4>
                            <p className="mt-3 text-sm text-text">
                                Формати співпраці визначаються спільними цілями та довгостроковим баченням.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Partnership