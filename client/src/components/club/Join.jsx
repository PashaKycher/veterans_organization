import { motion } from "framer-motion";


const Join = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 md:px-12 py-20 bg-bg border-t border-[#D6DBDB]">
            <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6">Участь у Клубі</h2>
                <p className="text-text mb-8">
                    Клуб відкритий для тих, хто має досвід, авторитет і готовність
                    брати участь у формуванні спільних рішень, проєктів і ініціатив.
                </p>
                <button className="cursor-pointer px-6 py-3 border border-text text-text hover:bg-[#1F2933] hover:text-bg transition">
                    долучитися до Клубу
                </button>
            </div>
        </motion.section>
    )
}


export default Join