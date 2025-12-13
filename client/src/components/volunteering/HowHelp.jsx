import React from 'react'
import { motion } from 'motion/react'
import { helpAreas } from '../../assets/assets'

const HowHelp = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section id="help-areas" className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Як волонтери допомагають</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {helpAreas.map((area) => (
                        <div key={area.title} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <span className="h-8 w-8 px-3 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center">•</span>
                                <h3 className="text-lg font-semibold text-[#03383A]">{area.title}</h3>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed">{area.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.section>
    )
}

export default HowHelp