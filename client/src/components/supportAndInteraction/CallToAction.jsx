import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#1F2328] py-20">

            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-white">
                    Стати частиною відповідальної дії
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-[#C7D0D1]">
                    Підтримка КЗУ — це інвестиція в людей, спільноту та майбутнє держави.
                    Оберіть формат взаємодії, який відповідає вашому рівню відповідальності.
                </p>


                <div className="mt-10 flex justify-center gap-4">
                    <button className="cursor-pointer px-6 py-3 rounded-xl bg-[#A5B4B6] text-[#1F2328] font-medium hover:opacity-90" onClick={() => { navigate("/supportform?mode=support") }}>
                        Підтримати проєкти
                    </button>
                    <button className="cursor-pointer px-6 py-3 rounded-xl border border-[#A5B4B6] text-text hover:bg-bg hover:text-[#1F2328]" onClick={() => { navigate("/supportform?mode=partner") }}>
                        Стати партнером
                    </button>
                </div>
            </div>
        </motion.section>
    )
}

export default CallToAction