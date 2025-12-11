import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";

const MFSupportDirections = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-6 items-center md:justify-between 
            w-full py-8 md:px-16 lg:px-24 text-sm bg-white"
        >
            <div className="px-4 py-4 w-full lg:px-10 lg:py-12">
                <Title
                    title="Соціальна підтримка"
                    subtitle="Консультації, юридичний супровід та інформація щодо пільг, виплат і гарантій для родин військових."
                />
            </div>

            <div className="px-4 py-4 w-full lg:px-10 lg:py-12">
                <Title
                    title="Психологічна допомога"
                    subtitle="Надаємо доступ до сервісів підтримки психічного здоровʼя, програм адаптації та підтримки дітей."
                />
            </div>
        </motion.section>
    );
};

export default MFSupportDirections;
