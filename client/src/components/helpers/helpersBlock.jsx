import React, { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const ModalWindow = ({ isOpen, onClose, items }) => {
  const generatePositions = (count, cols = 3) => {
    const cellWidth = 160
    const cellHeight = 100

    return Array.from({ length: count }).map((_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)

      return {
        x: col * cellWidth - ((cols - 1) * cellWidth) / 2 + (Math.random() * 20 - 10),
        y: row * cellHeight + 120 + (Math.random() * 20 - 10),
        rotate: Math.random() * 30 - 15,
        delay: i * 0.12
      }
    })
  }

  const positions = useMemo(
    () => generatePositions(items.length, 3),
    [items.length]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="hidden fixed inset-0 md:flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>

          <motion.div
            className="relative w-[90%] lg:w-[32%] h-[50vh] backdrop-blur-xl bg-white/10 rounded-[40px] border border-white/20 overflow-hidden p-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}>

            <button onClick={onClose} className="absolute top-6 right-6 text-3xl text-blue-500 hover:text-red-500 z-10">✕</button>

            <h2 className="text-2xl text-title mb-8 text-center">Напрямки участі</h2>

            <div className="relative w-full h-full">
              {items.map((item, i) => {
                const { x, y, rotate, delay } = positions[i]

                return (
                  <motion.div
                    key={i}
                    initial={{ y: -300, x: 0, rotate: 0, opacity: 0 }}
                    animate={{ y, x, rotate, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 14, delay }}
                    className="absolute left-1/2 -translate-x-1/2">

                    <Link
                      to={item.link}
                      className="inline-block px-10 py-6 rounded-full bg-bg border border-border-button text-text hover:bg-primary hover:text-white transition shadow-lg">
                      {item.title}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
