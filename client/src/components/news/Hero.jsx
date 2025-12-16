import { motion } from "motion/react";
import { Title } from "../helpers/Title";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-16 lg:px-24 xl:px-40 pt-24 md:pt-32 pb-16">

      <Title
        title="Новини спільноти дії"
        subtitle="Ми фіксуємо події, рішення та ініціативи, що формують ветеранську спільноту, громадянську відповідальність і стійкість держави. Без шуму. Лише значуще."
      />

    </motion.section>
  );
};

export default Hero;
