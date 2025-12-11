import React, { useState } from "react";
import { motion } from "motion/react";
import { assets, menuLinkFirst, menuLinkSecond } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./helpers/NavItem";

const NavBar = () => {
  const [lgMenuOpen, setLgMenuOpen] = useState(false); // переключення між двома групами меню
  const [mobileOpen, setMobileOpen] = useState(false); // мобільне меню
  const navigate = useNavigate();
  const isPathAnalytical = useLocation().pathname.includes("/analytical")
  const isPathNews = useLocation().pathname.includes("/news")

  let color = false
  if(isPathAnalytical || isPathNews) {
    color = true
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute left-0 right-0 z-50 text-gray-200">

      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex items-center justify-between mx-auto w-5xl px-6 py-3 mt-6">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="logo" className="w-10 h-11" />
          <p className={`font-semibold ${!color ? "text-white" : "text-[#03383A]"}`}>Name</p>
        </div>

        {/* MENU LINKS */}
        <div className="flex items-center gap-10">
          {!lgMenuOpen &&
            menuLinkFirst.map((item, i) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
              />
            ))}

          {lgMenuOpen &&
            menuLinkSecond.map((item, i) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
              />
            ))}

          {/* SWITCH BUTTON */}
          <button
            onClick={() => setLgMenuOpen(!lgMenuOpen)}
            className="cursor-pointer"
          >
            {lgMenuOpen ? (
              <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
            ) : (
              <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR (HEADER BAR) */}
      <div className="flex lg:hidden items-center justify-between px-5 py-2 bg-primary/20">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={assets.logo} alt="logo" className="w-10 h-11" />
          <p className="font-semibold">Name</p>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="cursor-pointer">
          <img src={assets.buttonMenu} className="w-8 h-8" />
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`lg:hidden fixed top-16 right-0 w-64 h-screen bg-primary border-l border-gray-300 transition-transform duration-300 z-40 p-6 flex flex-col gap-6 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex flex-row justify-between">
          {/* SWITCH BUTTON */}
          <button onClick={() => setLgMenuOpen(!lgMenuOpen)} className="self-end mb-4">
            {lgMenuOpen ? (
              <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
            ) : (
              <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
            )}
          </button>
          {/* CLOSE BUTTON */}
          <button onClick={() => setMobileOpen(false)} className="self-end mb-4">
            <img src={assets.homeClose_btn} className="w-10 h-10 bg-primary rounded-full" />
          </button>
        </div>

        {/* MOBILE MENUS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4">

          {!lgMenuOpen &&
            menuLinkFirst.map((item, index) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
              />
            ))}

          {lgMenuOpen &&
            menuLinkSecond.map((item, index) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
              />
            ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
