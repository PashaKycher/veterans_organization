import React from 'react'
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api/axios';


const CTA = () => {
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