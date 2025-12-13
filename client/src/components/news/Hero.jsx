import React from 'react'
import { motion } from 'motion/react'
import { Title } from '../helpers/Title'

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 items-center md:justify-between w-full py-4 md:py-8 pt-22 md:pt-32 md:px-16 lg:px-24 xl:px-40">

            <Title
                title="Історії сили та кроки до відновлення."
                subtitle="Життя організації — це сотні людських доль, об’єднаних спільною метою. Ми розповідаємо про те, як ваша підтримка та наша праця втілюються у реальні результати, надихаючи на нові звершення та зміцнюючи віру в силу спільноти."
            />

        </motion.section>
    )
}

export default Hero