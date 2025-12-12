import React from "react";
import { motion } from "motion/react";
import { assets, guides } from "../../assets/assets";


const MFGuides = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full py-20 px-6 bg-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Корисні гіди</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {guides.map((g, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
                            <p className="text-gray-600">{g.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default MFGuides;
