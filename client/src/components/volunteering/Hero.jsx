import React from 'react'
import { motion } from "motion/react";
import { assets } from "../../assets/assets";
import { Blackout } from '../helpers/Blackout';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full overflow-visible">

            <img
                src={assets.volunteering}
                alt="militaryFamiliesHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            <Blackout />

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center gap-4 px-4 
                lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-200">

                <h3 className='text-2xl lg:text-3xl uppercase text-black lg:text-white font-bold max-[800px]:text-center max-[800px]:pt-8'>
                    Відданість, що змінює світ
                </h3>

                <p className="text-black lg:text-white max-w-88 lg:max-w-136 text-start lg:text-center font-semibold mt-4 mb-6">
                    Немає нічого сильнішого за серце волонтера, для якого допомога — це не просто дія, а спосіб життя. Цей простір створений для тих, хто готовий ділитися своїм часом і теплом, будуючи мости підтримки для наших захисників і захисниць.
                </p>
            </div>
        </motion.section>
    )
}

export default Hero