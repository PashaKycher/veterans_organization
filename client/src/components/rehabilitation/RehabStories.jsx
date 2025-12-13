import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";
import { rehabStories } from "../../assets/assets";



const RehabStories = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <Title title="Історії відновлення" subtitle="Реальні люди. Реальні результати." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                    {rehabStories.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-[#F8FAFB] shadow rounded-xl p-8 flex flex-col items-center text-center"
                        >
                            <img src={s.img} className="w-36 h-36 object-cover rounded-full shadow mb-6" />
                            <h4 className="text-xl font-bold">{s.name}</h4>
                            <p className="text-gray-600 mt-4">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RehabStories;
