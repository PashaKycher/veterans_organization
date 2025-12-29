import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

export const ModalWindow = ({ isOpen, onClose, items }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* modal body */}
          <motion.div
            className="hidden [@media(min-width:370px)]:block relative w-[90%] max-w-2xl h-[10%]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* close button */}
            <button onClick={onClose} className="absolute px-1 bg-bg -top-10 right-0 text-3xl text-red-500 hover:text-red-700 transition">
              ✕
            </button>

            {/* grid */}
            <div className="grid grid-cols-2 gap-20">
              {items.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  onClick={onClose}
                  className="mx-auto w-30 h-30 flex items-center justify-center text-center bg-white text-text text-sm hover:bg-primary hover:text-white transition shadow-sm">
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
