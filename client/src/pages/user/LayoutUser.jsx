import React, { useEffect } from 'react'
import Sidebar from '../../components/user/Sidebar'
import Navbar from '../../components/user/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {

  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default LayoutUser