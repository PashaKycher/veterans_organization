import React from 'react'
import { motion } from "framer-motion";


const Manifest = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white border-t border-b border-[#E5E7EB]">
                
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Що ми називаємо лідерством</h2>

                    <p className="text-[#374151] leading-relaxed">
                        Лідерство в Клубі Захисників України — це не статус і не посада.
                        Це здатність приймати рішення в умовах невизначеності, нести
                        відповідальність за людей і результат, зберігати гідність під тиском.
                    </p>
                </div>
                <ul className="border-l-4 border-primary pl-8 space-y-4 text-[#374151]">
                    <li>— досвід, перевірений реальністю</li>
                    <li>— відповідальність замість риторики</li>
                    <li>— дія як базова форма мислення</li>
                    <li>— авторитет, що ґрунтується на служінні</li>
                </ul>
            </div>
        </motion.section>
    )
}


export default Manifest