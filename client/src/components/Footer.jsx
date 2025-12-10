import React from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#03383A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <img src={assets.logo} alt="logo" className="w-10 h-11" />
            <p className="font-semibold text-lg">Name</p>
          </div>

          <p className="opacity-80 leading-relaxed max-w-sm">
            Ми працюємо, щоб ветерани та їхні родини отримували своєчасну консультацію, підтримку
            та доступ до перевірених сервісів. Відкриті до партнерства та ініціатив, що допомагають
            створювати зміни.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Навігація</h3>

          <Link to="/" className="opacity-80 hover:opacity-100 transition">Аналітичні огляди</Link>
          <Link to="/about" className="opacity-80 hover:opacity-100 transition">Ветерани</Link>
          <Link to="/jobs" className="opacity-80 hover:opacity-100 transition">Родини військових</Link>
          <Link to="/contact" className="opacity-80 hover:opacity-100 transition">Волонтерство</Link>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Контакти</h3>

          <p className="opacity-80">Київ, Україна</p>

          <a href="tel:+380981112233" className="opacity-80 hover:opacity-100 transition">
            +38 (098) 111 22 33
          </a>

          <a href="mailto:info@company.com" className="opacity-80 hover:opacity-100 transition">
            info@company.com
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center opacity-70 text-sm">
        © {new Date().getFullYear()} Name. Всі права захищені.
      </div>
    </footer>
  );
};

export default Footer;
