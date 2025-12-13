import React from "react";
import { motion } from "motion/react";
import { Blackout } from "../helpers/Blackout";
import { assets } from "../../assets/assets";

const MFHero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full overflow-hidden" >
            
            <img
                src={assets.mfHero}
                alt="militaryFamiliesHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            <Blackout />

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center gap-4 px-4 
                lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 lg:w-200">

                <h3 className='text-2xl lg:text-3xl uppercase text-black lg:text-white font-bold max-[800px]:text-center max-[800px]:pt-8'>
                    Підтримка родин військовослужбовців
                </h3>

                <p className="text-black lg:text-white max-w-88 lg:max-w-136 text-start lg:text-center font-semibold mt-4 mb-6">
                    Допомагаємо сімʼям захисників отримувати підтримку, ресурси та корисні сервіси без зайвих барʼєрів.
                </p>

                <button className="w-full md:w-auto px-9 py-4 font-semibold text-md backdrop-blur-sm uppercase 
                    border border-primary text-white hover:bg-primary hover:border-primary max-[800px]:bg-primary lg:bg-none lg:border-white lg:hover:bg-primary lg:hover:border-primary cursor-pointer mb-4">
                    Дізнатися про можливості
                </button>
            </div>
        </motion.section>
    );
};

export default MFHero;
