import React from 'react'
import { motion } from "motion/react";
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='mx-auto flex flex-col w-full py-4 md:py-8 lg:py-16 xl:py-22 md:px-16 lg:px-24 xl:px-40 bg-primary'>

            <div className='flex w-fit mx-auto'>
                <button className='flex flex-row gap-6 items-center text-start px-4 cursor-pointer' onClick={() => navigate("/contactform")}>
                    <span className='text-white lg:text-semibold lg:text-xl xl:text-2xl'>Зв'яжіться з нами, щоб дізнатися більше про ваші можливості</span>
                    <img src={assets.arrow_btn} alt="arrow_btn" />
                </button>
            </div>
        </motion.section>
    )
}

export default LearnMore