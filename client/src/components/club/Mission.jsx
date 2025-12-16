import { motion } from "framer-motion";

const Mission = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 md:px-12 py-16">
            <div className="max-w-4xl grid gap-6">
                <h2 className="text-2xl font-semibold">Навіщо існує Клуб</h2>
                <p className="text-[#374151]">
                    Клуб Захисників України створений як середовище для формування й утримання
                    нового українського військового та громадянського класу відповідальності.
                </p>
                <p className="text-[#374151]">
                    Це простір, де досвід війни та служби перетворюється на лідерство,
                    державницьке мислення і практичну дію — під час війни і після неї.
                </p>
            </div>
        </motion.section>
    )
}


export default Mission