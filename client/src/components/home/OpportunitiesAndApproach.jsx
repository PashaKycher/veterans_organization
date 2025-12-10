import React from 'react'
import { motion } from "motion/react";
import { assets } from '../../assets/assets';

import { Title } from '../helpers/Title'

const OpportunitiesAndApproach = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>

            <div>
                <img src={assets.homeOpportunitiesAndApproach} alt="homeOpportunitiesAndApproach" />
            </div>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row gap-6 items-center md:justify-between w-full py-4 md:py-8 lg:py-24 xl:py-32 md:px-16 lg:px-24 xl:px-40 text-sm">

                <div className='px-4 py-4 mx-auto w-full md:w-[400px] bg-white shadow-lg rounded-xl lg:px-10 lg:py-12'>
                    <Title
                        title="Відкрийте нові можливості"
                        subtitle="Надаємо ветеранам інструменти, навігацію та ресурси, які допомагають знайти підтримку, програми, пільги та рішення у зручному форматі."
                    />
                </div>

                <div className='px-4 py-4 mx-auto w-full md:w-[400px] bg-white shadow-lg rounded-xl lg:px-10 lg:py-12'>
                    <Title
                        title="Наш підхід"
                        subtitle="Працюємо системно, прозоро та людиноцентрично — орієнтуємося на реальні потреби захисників і створюємо сервіси, що справді працюють."
                    />
                </div>
            </motion.section>
        </motion.div>
    )
}

export default OpportunitiesAndApproach