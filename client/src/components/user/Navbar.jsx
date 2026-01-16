import React, { use } from 'react'
import { assets, } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../helpers/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogout } from '../../store/userSlice'

const Navbar = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendlLogout = () => {
        localStorage.removeItem('token')
        dispatch(setUserLogout())
        navigate('/')
    }   

    return (
        <div className='flex items-center justify-between px-6 md:px-10 py-4
        text-gray-500 border-b border-borderColor relative transition-all'>
            {/* logo */}
            <Logo />
            {/* profile */}
            <p className='max-md:hidden text-right text-sm text-slate-600 tracking-wide'>Бажаємо здоров'я,  <span className="font-medium text-slate-800">{user?.full_name || "Користувач"}</span></p>
            {/* logout */}
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-red-700 bg-red-100 hover:bg-red-600 hover:text-white border border-red-300 transition-all duration-200 active:scale-95" onClick={hendlLogout}>Вийти</button>
        </div>
    )
}

export default Navbar

