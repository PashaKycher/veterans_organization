import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalWindow = ({ isOpen, onClose, items }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>

                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 60, opacity: 0 }}
                        className="bg-bg w-[90%] lg:w-[70%] max-h-[80vh] overflow-y-auto p-12 relative">

                        <button onClick={onClose} className="absolute top-6 right-6 text-xl">✕</button>

                        <h2 className="text-2xl text-title mb-10">Напрямки участі</h2>

                        <div className="space-y-8">
                            {items.map((item, i) => (
                                <div key={i} className={`flex flex-col lg:flex-row ${i % 2 ? "lg:flex-row-reverse" : ""} gap-6`}>

                                    <Link to={item.link} className="border border-border-button px-6 py-3 hover:bg-primary hover:text-white transition">
                                        {item.title}
                                    </Link>

                                    {/* <p className="text-text max-w-xl">{item.description}</p> */}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
