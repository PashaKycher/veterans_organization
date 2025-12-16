import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">

            <div>
                <h2 className="text-3xl font-semibold text-title mb-6">Хто ми</h2>

                <p className="text-text leading-relaxed">
                    Клуб Захисників України — це не ветеранський сервіс і не інформаційний портал.
                    Це точка зборки нового українського класу відповідальності —
                    військових і цивільних, які здатні мислити державницьки,
                    брати на себе рішення та діяти.
                </p>
            </div>

            <div className="border-l-4 border-primary pl-8 text-subTitle">
                Ми не замінюємо державу.
                Ми формуємо людей, здатних її утримувати.
            </div>
        </motion.section>
    );
};

export default About;
