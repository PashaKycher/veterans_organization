import React from 'react'
import { motion } from "motion/react";

import { Title } from '../helpers/Title'

const CoreValuesSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-6 items-center md:justify-between w-full py-4 md:py-8 lg:py-12  md:px-16 lg:px-24 text-sm bg-white">

            <div className='px-4 py-4 mx-auto w-full  lg:px-10 lg:py-12'>
                <Title
                    title="Проста ідея — реальна підтримка"
                    subtitle="Ми створюємо доступні рішення, які допомагають ветеранам і їхнім родинам отримувати потрібну інформацію та послуги без зайвих бар’єрів."
                />
            </div>

            <div className='px-4 py-4 mx-auto w-full  lg:px-10 lg:py-12'>
                <Title
                    title="Ми вирізняємось підходом"
                    subtitle="Поєднуємо експертність, волонтерський досвід і сучасні технології, щоб забезпечити якісну та надійну допомогу тим, хто цього потребує."
                />
            </div>

        </motion.section>
    )
}

export default CoreValuesSection