import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const isOwnerPath = useLocation().pathname.includes("/owner")

  return (
    <>
      <Toaster />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/owner' element={<p>Owner</p>}>
          <Route index element={<p>Dashboard</p>} />
          <Route path='addCategory' element={<p>AddCategory</p>} />
        </Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
