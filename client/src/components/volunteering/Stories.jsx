import React from 'react'
import { motion } from 'motion/react'
import { stories } from '../../assets/assets'

const Stories = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">04</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Історії волонтерів</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stories.map((story) => (
                        <div key={story.name} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-3">
                            <div className="w-full h-32 bg-linear-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
                                <img src={story.image} alt="Фото" className='w-full h-full object-cover' />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-primary">{story.role}</p>
                                <h3 className="text-lg font-semibold text-[#03383A]">{story.name}</h3>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed">“{story.text}”</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.section>
    )
}

export default Stories