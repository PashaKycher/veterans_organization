import React from 'react'
import { motion } from "framer-motion";
import { values } from "../../assets/assets";

const Values = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {values.map((v, i) => (
          <div key={i} className="p-8 border border-border-button">

            <h3 className="text-xl font-semibold text-title mb-4">
              {v.title}
            </h3>
            <p className="text-text">{v.text}</p>

          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default Values;
