import React from "react";
import { motion } from "motion/react";
import { Title } from "../helpers/Title";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full px-6 md:px-16 lg:px-24 xl:px-40 pt-28 pb-16">

      <div className="max-w-4xl">
        <Title
          title="Аналітика як основа відповідальних рішень"
          subtitle="Цей розділ — інтелектуальний хребет Клубу Захисників України.
          Ми пояснюємо складні процеси, аналізуємо рішення держави,
          досвід війни та суспільні трансформації, щоб формувати мислення
          людей, здатних брати відповідальність і діяти."
        />
      </div>
    </motion.section>
  );
};

export default Hero;
