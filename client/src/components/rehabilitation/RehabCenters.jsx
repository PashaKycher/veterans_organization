import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";
import { assets } from "../../assets/assets";

const centers = [
    {
        title: "Державні реабілітаційні центри",
        desc: "Затверджені державою програми відновлення, реабілітаційні пакети, фахові лікарі.",
        img: assets.rehabCenter1 || "https://placehold.co/500x350"
    },
    {
        title: "Приватні клініки-партнери",
        desc: "Перевірені установи з сучасним обладнанням та міжнародними підходами.",
        img: assets.rehabCenter2 || "https://placehold.co/500x350"
    },
    {
        title: "Психологічні хаби",
        desc: "Спільноти підтримки, групові тренінги, консультації та робота з сім’ями.",
        img: assets.rehabCenter3 || "https://placehold.co/500x350"
    },
];

const RehabCenters = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Title title="Де отримати допомогу?" subtitle="Перевірені місця для якісної реабілітації" />

                <div className="flex flex-col gap-16 mt-14">

                    {centers.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-10 items-center`}
                        >
                            <img src={c.img} className="w-full md:w-[48%] rounded-xl shadow-lg" />

                            <div className="w-full md:w-[48%]">
                                <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RehabCenters;
