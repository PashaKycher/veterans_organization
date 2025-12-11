import React from "react";
import { motion } from "motion/react";

const RehabCTA = () => {
    return (
        <section className="py-20 px-6 bg-primary text-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold mb-4"
            >
                Готові почати шлях відновлення?
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl mx-auto mb-8"
            >
                Залиште заявку — і ми підберемо оптимальну програму реабілітації.
            </motion.p>

            <motion.button
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="px-10 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100"
            >
                Подати заявку
            </motion.button>
        </section>
    );
};

export default RehabCTA;
