import React, { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import { assets, menuLinkFirst, menuLinkSecond } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "./helpers/NavItem";
import { Logo } from "./helpers/Logo";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../store/loginSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user)

  const [lgMenuOpen, setLgMenuOpen] = useState(false); // переключення між двома групами меню
  const [mobileOpen, setMobileOpen] = useState(false); // мобільне меню

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

  let color = false
  const isPathAnalytical = useLocation().pathname.includes("/analytical")
  const isPathNews = useLocation().pathname.includes("/news")
  const isPathVerify = useLocation().pathname.includes("/verify-email")
  if (isPathAnalytical || isPathNews || isPathVerify) {
    color = true
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute left-0 right-0 z-50 ${!color ? "text-white" : "text-[#03383A]"}`}>

      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex items-center justify-between mx-auto w-5xl px-6 py-3 mt-6">
        {/* LOGO */}
        <Logo />

        {/* MENU LINKS */}
        <div className={`flex items-center gap-10 ${!color ? "text-white" : "text-[#03383A]"}`}>
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
          <button onClick={() => setLgMenuOpen(!lgMenuOpen)} className="cursor-pointer">
            <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
          </button>

          {/* USER BUTTON */}
          <button onClick={hendleUserButton} className="cursor-pointer">
            <img src={assets.userLogin} className="w-10 h-10 bg-primary rounded-full" />
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR (HEADER BAR) */}
      <div className="flex lg:hidden items-center justify-between px-5 py-2 bg-primary/20">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="cursor-pointer">
          <img src={assets.buttonMenu} className="w-8 h-8" />
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`lg:hidden fixed top-24 md:top-14 right-0 w-full md:w-2/5 h-screen bg-primary transition-transform duration-300 z-40 p-6 flex flex-col gap-6 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex flex-row justify-between">
          {/* SWITCH BUTTON */}
          <button onClick={() => setLgMenuOpen(!lgMenuOpen)} className="self-end mb-4">
            <img src={assets.nawBarBtn} className="w-10 h-10 bg-primary rounded-full" />
          </button>

          {/* USER BUTTON */}
          <button onClick={hendleUserButton} className="self-end mb-4">
            <img src={assets.userLogin} className="w-10 h-10 bg-primary rounded-full" />
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
          className={`flex flex-col gap-4 ${!color ? "text-white" : "text-white"}`}>

          {!lgMenuOpen &&
            menuLinkFirst.map((item, index) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
                onClose={() => setMobileOpen(false)}
              />
            ))}

          {lgMenuOpen &&
            menuLinkSecond.map((item, index) => (
              <NavItem
                key={item.path}
                name={item.name}
                desc={item.desc}
                path={item.path}
                onClose={() => setMobileOpen(false)}
              />
            ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
