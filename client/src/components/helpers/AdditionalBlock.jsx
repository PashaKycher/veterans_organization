import React from "react";
import { motion } from "motion/react";
import { Dot } from "lucide-react";

export const AdditionalBlock = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mx-auto mt-4 w-screen md:w-[720px] bg-white shadow-lg rounded-xl px-10 py-12 lg:absolute lg:-bottom-50 lg:left-1/2 lg:-translate-x-1/2">
      <div className="flex items-start gap-6">
        <div className="pt-1 hidden md:block">
          <Dot className="w-10 h-10 text-primary" />
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase text-primary">{title}</h2>
          <p className="text-neutral-600 font-medium text-sm mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
