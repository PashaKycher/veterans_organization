import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'

import { Blackout } from '../helpers/Blackout'

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full overflow-visible">

            {/* Background image */}
            <img
                src={assets.heroPreMilitary}
                alt="homeHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            {/* Dark overlay */}
            <Blackout />

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center gap-4 px-4 
                            lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-200">

                <h3 className='text-2xl lg:text-3xl uppercase text-black lg:text-white font-bold max-[800px]:text-center max-[800px]:pt-8'>
                    Мистецтво бути опорою.
                </h3>

                <p className="text-black lg:text-white max-w-88 lg:max-w-136 text-start lg:text-center font-semibold mt-4 mb-6">
                    Знання — це щит, який ми куємо заздалегідь. Довійськова підготовка — це ваш внесок у власну безпеку та стійкість громади. Тут ви отримаєте досвід і навички, які формують характер захисника і дають змогу стати надійною підтримкою для близьких у часи випробувань.
                </p>
            </div>
        </motion.section>
    )
}

export default Hero