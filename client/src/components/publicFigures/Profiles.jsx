import React from 'react'
import { motion } from 'motion/react'
import { assets, figures } from '../../assets/assets'
import PublicFiguresCard from './PublicFiguresCard'

const Profiles = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-5 py-6 space-y-10">

            <section id="profiles" className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 px-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">01</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Профілі діячів</h2>
                </div>
                <PublicFiguresCard figures={figures} />
            </section>
        </motion.section>
    )
}

export default Profiles