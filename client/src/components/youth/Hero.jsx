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
                src={assets.heroYouth}
                alt="homeHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            {/* Dark overlay */}
            <Blackout />

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center gap-4 px-4 
                        lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-200">

                <h3 className='text-2xl lg:text-3xl uppercase text-black lg:text-white font-bold max-[800px]:text-center max-[800px]:pt-8'>
                    Паростки майбутнього: сила поколінь.
                </h3>

                <p className="text-black lg:text-white max-w-88 lg:max-w-136 text-start lg:text-center font-semibold mt-4 mb-6">
                    Ми плекаємо нове покоління, яке зростає на цінностях честі, відваги та любові до свого дому. Цей простір створений для дітей і молоді, щоб допомогти їм знайти свій шлях, розкрити таланти та відчути гордість за свою родину й країну, будуючи власне щасливе завтра.
                </p>
            </div>
        </motion.section>
    )
}

export default Hero