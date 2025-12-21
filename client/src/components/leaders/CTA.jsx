import React from 'react'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';


const CTA = () => {
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6 py-24">

            <div className="bg-[#111827] text-white rounded-2xl p-12 md:p-16">
                <h2 className="text-3xl font-semibold mb-4">Хочеш бути частиною цього рівня</h2>

                <p className="text-[#D1D5DB] max-w-2xl mb-8">
                    Клуб Захисників України — це середовище для людей, які готові
                    брати відповідальність і діяти. Лідерство починається з рішення.
                </p>

                <button onClick={hendleUserButton} className="bg-white text-text px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    Долучитися до Клубу
                </button>
            </div>
        </motion.section>
    )
}


export default CTA