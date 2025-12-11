import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";

const steps = [
    "Оберіть напрям реабілітації або центр",
    "Подайте заявку онлайн або зверніться телефоном",
    "Отримайте консультацію фахівця",
    "Пройдіть індивідуальну програму відновлення",
    "Отримуйте подальшу підтримку та супровід",
];

const RehabSteps = () => {
    return (
        <section className="py-20 px-6 bg-primary/10">
            <div className="max-w-5xl mx-auto">
                <Title title="Як отримати допомогу" subtitle="Проста та зрозуміла система" />

                <div className="mt-10 space-y-6">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-start gap-6"
                        >
                            <span className="text-primary text-3xl font-bold">{i + 1}</span>
                            <p className="text-gray-700 text-lg font-medium">{s}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RehabSteps;
