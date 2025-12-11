import React from "react";
import { motion } from "motion/react";

const faqs = [
    { q: "Які документи потрібні для оформлення виплат сімʼї військовослужбовця?", a: "Перелік залежить від типу виплати, але ми зібрали повний список у нашому довіднику." },
    { q: "Чи є безкоштовна психологічна допомога?", a: "Так, існують державні та громадські програми. Ми зібрали їх у розділі «Психологічна підтримка»." },
    { q: "Як отримати житлову компенсацію?", a: "Усе залежить від категорії сімʼї та служби військового — ми пояснюємо процедуру покроково." }
];

const MFFAQ = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Часті запитання
                </h2>

                <div className="space-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow">
                            <h4 className="font-bold mb-2">{item.q}</h4>
                            <p className="text-gray-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default MFFAQ;
