import { principles } from '../../assets/assets'
import { motion } from "framer-motion";

const Principles = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
             className="px-6 md:px-12 py-16">
            <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6">Принципи Клубу</h2>
                <ul className="space-y-3">
                    {principles.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 bg-[#374151] rounded-full" />
                            <span className="text-[#374151]">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}


export default Principles