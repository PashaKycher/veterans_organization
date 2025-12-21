import React, { useEffect } from 'react'
import Sidebar from '../../components/owner/Sidebar'
import Navbar from '../../components/owner/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {

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

export default LayoutAdmin