import React from 'react'
import { motion } from 'motion/react'
import { assets, faq, interactiveTools, updates } from '../../assets/assets'

const Other = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-6">

            <section className="grid lg:grid-cols-[2fr,1fr] gap-8">
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
                        <h3 className="text-lg font-semibold text-primary mb-3">Часті запитання</h3>
                        <div className="space-y-3">
                            {faq.map((item) => (
                                <div key={item.q} className="border border-neutral-100 rounded-lg p-3 bg-[#F8FBFB]">
                                    <p className="text-sm font-semibold text-dark">{item.q}</p>
                                    <p className="text-xs text-neutral-700 mt-1 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
                        <h3 className="text-lg font-semibold text-primary mb-3">Інтерактивні інструменти</h3>
                        <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                            {interactiveTools.map((tool) => (
                                <li key={tool} className="flex gap-2">
                                    <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
                                    <span>{tool}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-7 border border-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">05</div>
                    <h3 className="text-xl font-semibold text-primary">Блок новин та оновлень</h3>
                </div>
                <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                    {updates.map((news) => (
                        <li key={news} className="flex gap-2">
                            <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
                            <span>{news}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </motion.section>
    )
}

export default Other