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
            className="relative w-full overflow-hidden"
        >
            <img
                src={assets.mfHero}
                alt="militaryFamiliesHero"
                className="w-full h-auto lg:h-screen object-cover"
            />

            <Blackout />

            <div className="relative z-20 flex flex-col items-center 
                lg:absolute lg:top-60 lg:left-1/2 lg:-translate-x-1/2 px-6 lg:w-200">

                <h1 className="text-3xl lg:text-4xl text-white font-bold text-center">
                    Підтримка родин військовослужбовців
                </h1>

                <p className="text-white max-w-136 text-center mt-4 mb-6 font-semibold">
                    Допомагаємо сімʼям захисників отримувати підтримку, ресурси та корисні сервіси без зайвих барʼєрів.
                </p>

                <button className="px-9 py-4 font-semibold backdrop-blur-sm border border-white 
                    text-white hover:bg-primary hover:border-primary uppercase">
                    Дізнатися про можливості
                </button>
            </div>
        </motion.section>
    );
};

export default MFHero;
