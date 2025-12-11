import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../../assets/assets'
import { Title } from '../helpers/Title'

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 items-center md:justify-between w-full py-4 md:py-8 lg:pt-24 xl:pt-32 md:px-16 lg:px-24 xl:px-40">

            <Title
                title="Аналітичні огляди — дослідження сервісів, програм і ресурсів для ветеранів."
                subtitle="Аналітичні огляди, що висвітлюють програми підтримки ветеранів, роботу державних та волонтерських сервісів, а також сучасні цифрові рішення для допомоги захисникам."
            />

        </motion.section>
    )
}

export default Hero