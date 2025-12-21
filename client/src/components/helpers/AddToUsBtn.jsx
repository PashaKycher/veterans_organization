import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';

export const AddToUsBtn = () => {
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
        <button 
        onClick={hendleUserButton}
        className="mt-10 px-10 py-4 border border-border-button text-white bg-primary md:bg-none md:border-white hover:bg-primary hover:border-primary transition">
            приєднатися до простору
        </button>
    )
}
