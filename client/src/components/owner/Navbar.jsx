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
            <p className='max-md:hidden text-right'>Бажаємо здоров'я, {user?.name || "Owner"}</p>
            {/* logout */}
            <button className='px-3 py=2 rounded-2xl bg-red-400 hover:bg-red-600' onClick={hendlLogout}>Вийти</button>
        </div>
    )
}

export default Navbar

