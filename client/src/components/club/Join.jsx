import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { setIsOpen } from "../../store/loginSlice";


const Join = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  }

  const hendleUserButton = () => {
    if (user.verify_email === true && user.role === "user") {
      navigate("/user")
    } else if (user.verify_email === true && user.role === "owner") {
      navigate("/owner")
    } else {
      dispatch(setIsOpen(true));
    }
  }

  useEffect(() => {
    userData();
  }, []);

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