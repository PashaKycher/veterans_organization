import React from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./helpers/Logo";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#03383A] text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <Logo footer={true} />

          <p className="opacity-80 leading-relaxed max-w-sm">
            Підтримка в КЗУ — це не допомога «ззовні», а спільна дія людей, обʼєднаних досвідом, гідністю та відповідальністю за своїх.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Навігація</h3>

          <Link to="/analytical" className="opacity-80 hover:opacity-100 transition" onClick={scrollTo(0, 0)}>Аналітичні огляди</Link>
          <Link to="/position" className="opacity-80 hover:opacity-100 transition" onClick={scrollTo(0, 0)}>Наша позиція</Link>
          <Link to="/club" className="opacity-80 hover:opacity-100 transition" onClick={scrollTo(0, 0)}>Клуб</Link>
          <Link to="/support" className="opacity-80 hover:opacity-100 transition" onClick={scrollTo(0, 0)}>Підтримка та взаємодія</Link>
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
