import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'

import { Blackout } from '../helpers/Blackout'
import { AdditionalBlock } from '../helpers/AdditionalBlock'


const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full overflow-visible"   // ❗ ГОЛОВНИЙ ФІКС
        >

            {/* Background image */}
            <img
                src={assets.homeHero}
                alt="homeHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            {/* Dark overlay */}
            <Blackout />

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center gap-4 px-4 
                lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-280">

                <h3 className='text-2xl lg:text-3xl uppercase text-black lg:text-white font-bold max-[800px]:text-center max-[800px]:pt-8'>
                    Підтримуємо ветеранів разом
                </h3>

                <p className="text-black lg:text-white max-w-88 lg:max-w-136 text-start lg:text-center font-semibold mt-4 mb-6">
                    Об’єднуємо ресурси, досвід та небайдужих людей задля допомоги захисникам і їхнім родинам.
                </p>

                <button className="w-full md:w-auto px-9 py-4 font-semibold text-md backdrop-blur-sm uppercase 
                    border border-primary text-white hover:bg-primary hover:border-primary max-[800px]:bg-primary lg:bg-none lg:border-white lg:hover:bg-primary lg:hover:border-primary cursor-pointer mb-4">
                    Аналітичні огляди
                </button>
            </div>

            {/* Additional Block — fixed position & spacing */}
            <div className="relative z-30">
                <AdditionalBlock
                    title="хто ми"
                    subtitle="Ми — команда волонтерів та фахівців, які працюють задля підтримки українських ветеранів і їхніх родин. Наша місія — забезпечити доступ до перевіреної інформації, корисних сервісів та зрозумілої навігації серед державних і громадських можливостей. Ми поєднуємо досвід, експертизу та сучасні технології, щоб робити допомогу ефективною, прозорою та доступною кожному, хто її потребує."
                />
            </div>

        </motion.section>
    )
}

export default Hero
