import React from 'react'
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api/axios';

export const AddToUsBtn = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setUser(data.user);
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
        <button 
        onClick={hendleUserButton}
        className="mt-10 px-10 py-4 border border-border-button text-white bg-primary md:bg-none md:border-white hover:bg-primary hover:border-primary transition">
            приєднатися до простору
        </button>
    )
}
