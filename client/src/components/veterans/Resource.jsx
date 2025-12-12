import React from 'react'
import { motion } from 'motion/react'
import { assets, resourceBlocks } from '../../assets/assets'

const Resource = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-6">

            <div className="flex items-center gap-3">
                <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Підтримка поруч</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {resourceBlocks.map((block) => (
                    <div key={block.title} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
                        <h3 className="text-lg font-semibold text-primary mb-3">{block.title}</h3>
                        <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                            {block.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span className="mt-1 h-2 w-2 px-1 rounded-full bg-primary"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Resource