import React from "react";
import { motion } from "motion/react";
import { assets } from "../../assets/assets";

const RehabHero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full overflow-hidden"
        >
            <img
                src={assets.rehabHero || "https://placehold.co/1920x900"}
                alt="rehabHero"
                className="w-full h-[80vh] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    Шлях до відновлення починається тут
                </h1>

                <p className="text-white max-w-3xl text-lg font-medium">
                    Підтримуємо ветеранів у фізичній, психологічній та соціальній реабілітації.
                </p>
            </div>
        </motion.section>
    );
};

export default RehabHero;
