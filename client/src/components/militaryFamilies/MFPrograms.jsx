import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";
import { assets } from "../../assets/assets";

const MFPrograms = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img
                src={assets.mfPrograms}
                className="w-full max-h-[500px] object-cover"
            />

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row gap-6 items-center 
                w-full py-12 md:px-16 lg:px-24 xl:px-40"
            >
                <div className="px-4 py-6 w-full md:w-[450px] bg-white shadow-lg rounded-xl">
                    <Title
                        title="Державні програми"
                        subtitle="Пояснюємо, як отримати соціальні послуги, компенсації, допомогу та державні гарантії."
                    />
                </div>

                <div className="px-4 py-6 w-full md:w-[450px] bg-white shadow-lg rounded-xl">
                    <Title
                        title="Громадські ініціативи"
                        subtitle="Підбірки перевірених фондів, проєктів і сервісів, які підтримують сімʼї захисників."
                    />
                </div>
            </motion.section>
        </motion.div>
    );
};

export default MFPrograms;
