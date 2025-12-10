import React from "react";
import { motion } from "motion/react";
import { assets } from "../../assets/assets";
import { Title } from "../helpers/Title";

const AboutUs = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full py-20 px-6"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-14 xl:justify-between">

                <div className="flex justify-center md:justify-end">
                    <img
                        src={assets.homeAboutUs}
                        alt="homeAboutUs"
                        className="w-full max-w-[550px] rounded-lg shadow-md"
                    />
                </div>

                <Title
                    title="Чому саме Name?"
                    subtitle="Наша організація створена людьми, які щоденно працюють заради підтримки українських ветеранів
                    та їхніх родин. Ми поєднуємо глибоке розуміння потреб захисників, експертні знання у сфері
                    соціальних гарантій та сучасні цифрові рішення, щоб надавати допомогу швидко, прозоро та
                    результативно. Наші сервіси базуються на офіційних джерелах, перевіреній інформації та
                    реальному досвіді роботи з ветеранами."
                />
            </div>
        </motion.section>
    );
};

export default AboutUs;
