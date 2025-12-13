import React from 'react'
import { motion } from 'motion/react'
import { assets, linksAndGuides, testimonials } from '../../assets/assets'

const LinksAndTestimonials = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-6">

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-md p-7 space-y-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">02</div>
                        <h3 className="text-xl font-semibold text-primary">Корисні посилання та інструкції</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                        {linksAndGuides.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-7 space-y-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">03</div>
                        <h3 className="text-xl font-semibold text-primary">Історії та відгуки</h3>
                    </div>
                    <div className="space-y-4">
                        {testimonials.map((item) => (
                            <div key={item.name} className="bg-[#F8FBFB] border border-primary/10 rounded-xl p-4">
                                <p className="text-sm text-neutral-700 leading-relaxed mb-2">“{item.quote}”</p>
                                <p className="text-xs font-semibold text-primary">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default LinksAndTestimonials