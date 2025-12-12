import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";
import { assets } from "../../assets/assets";

const MFAbout = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full py-20 px-6"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
                
                <div>
                    <img
                        src={assets.militaryFamilies}
                        alt="militaryFamily"
                        className="w-full max-w-[550px] rounded-lg shadow-md"
                    />
                </div>

                <Title
                    title="Підтримуємо родини захисників"
                    subtitle="Ми створюємо безпечний, зручний та зрозумілий простір, де родини військових можуть знайти потрібну інформацію, ресурси та допомогу. 
                    Наша команда працює для того, щоб забезпечити підтримку тим, хто поруч із захисниками кожного дня."
                />
            </div>
        </motion.section>
    );
};

export default MFAbout;
