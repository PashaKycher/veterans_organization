import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

export const Logo = ({ footer }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={assets.logo} alt="logo" className="w-10 h-11" />
      <p className={`font-semibold flex flex-col ${footer ? "lg:flex-row" : "md:flex-row"} gap-1 `}>
        <span>Клуб</span>
        <span>Захисників</span>
        <span>України</span>
      </p>
    </div>
  )
}
