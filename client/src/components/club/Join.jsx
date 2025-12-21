import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Join = () => {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const hendleUserButton = () => {
        if (user.role === "user") {
          navigate("/user")
        } else if (user.role === "superAdmin") {
          navigate("/owner")
        } else if (user.role === "newsAdmin") {
          navigate("/owner")
        } else if (user.role === "positionAdmin") {
          navigate("/owner")
        } else if (user.role === "analyticalAdmin") {
          navigate("/owner")
        } else if (user.role === "clubAdmin") {
          navigate("/owner")
        } else if (user.role === "leadersAdmin") {
          navigate("/owner")
        } else {
          dispatch(setIsOpen(true));
        }
      }

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
                <button onClick={hendleUserButton} className="cursor-pointer px-6 py-3 border border-text text-text hover:bg-[#1F2933] hover:text-bg transition">
                    долучитися до Клубу
                </button>
            </div>
        </motion.section>
    )
}


export default Join