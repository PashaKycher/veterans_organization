import React from 'react'
import { motion } from "framer-motion";

const Directions = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-28 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl text-title font-semibold mb-16">Напрямки дії</h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-medium mb-4">Аналітика та позиція</h3>

          <p className="text-text">
            Глибокі пояснення, стратегічне бачення,
            короткі субʼєктні заяви без популізму.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Спільнота і лідери</h3>
          <p className="text-text">
            Клуб — це люди, які знають одне одного,
            мислять разом і беруть відповідальність.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Directions;
