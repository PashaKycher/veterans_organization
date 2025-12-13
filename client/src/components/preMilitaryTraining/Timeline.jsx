import React from 'react'
import { motion } from 'motion/react'
import { timeline } from '../../assets/assets'

const Timeline = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">
            <div className="grid md:grid-cols-3 gap-5">
                {timeline.map((item, idx) => (
                    <div key={item.title} className="bg-white rounded-2xl shadow-md p-5 border border-primary/10 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                                {String(idx + 1).padStart(2, "0")}
                            </div>
                            <h4 className="text-lg font-semibold text-[#03383A]">{item.title}</h4>
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </motion.section >
    )
}

export default Timeline