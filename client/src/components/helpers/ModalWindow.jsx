import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ModalWindow = ({ isOpen, onClose, items = [] }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* CONTENT WRAPPER */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 18 }}
                        className="
                            bg-white/10 backdrop-blur-md border border-white/20 
                            rounded-2xl shadow-2xl w-[90%] lg:w-[70%] 
                            max-h-[80vh] overflow-y-auto p-8 relative
                        "
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/80 hover:text-white text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6">
                            Оберіть розділ
                        </h2>

                        <div className="flex flex-col gap-8 ">
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`
                                        flex items-start gap-6 p-5 rounded-xl 
                                        bg-white/5 border border-white/10 
                                        ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}
                                        flex-col items-centre justify-between
                                    `}
                                >
                                    <Link
                                        to={item.link}
                                        className="w-full md:w-auto px-9 py-4 font-medium text-medium border border-primary text-white hover:bg-primary hover:border-primary lg:bg-none lg:border-white lg:hover:bg-primary lg:hover:border-primary cursor-pointer mb-4"
                                    >
                                        {item.title}
                                    </Link>

                                    <p className="text-white/80 leading-relaxed lg:w-2/3 text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalWindow;
