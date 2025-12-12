import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";
import { programs } from "../../assets/assets";

const RehabPrograms = () => {
    return (
        <section className="py-20 px-6 bg-[#F7F9FA]">
            <div className="max-w-7xl mx-auto">
                <Title title="Напрямки реабілітації" subtitle="Комплексний підхід для кожного ветерана" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {programs.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-xl shadow p-6 flex gap-4"
                        >
                            <img src={p.icon} className="w-14 h-14 opacity-90" />
                            <div>
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RehabPrograms;
