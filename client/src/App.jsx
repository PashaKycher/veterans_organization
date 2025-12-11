import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AnalyticalReviews from './pages/AnalyticalReviews'
import LearnMore from './components/LearnMore'
import AnalyticalCart from './pages/AnalyticalCart'
import Veterans from './pages/Veterans'
import MilitaryFamilies from './pages/MilitaryFamilies'
import Volunteering from './pages/Volunteering'
import News from './pages/News'
import NewsCart from './pages/NewsCart'
import PublicFigures from './pages/PublicFigures'
import PreMilitaryTraining from './pages/PreMilitaryTraining'
import Rehabilitation from './pages/Rehabilitation'
import Youth from './pages/Youth'

function App() {
  const isOwnerPath = useLocation().pathname.includes("/owner")

  return (
    <>
      <Toaster />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytical" element={<AnalyticalReviews />} />
        <Route path="/analytical/:id" element={<AnalyticalCart />} />
        <Route path="/veterans" element={<Veterans />} />
        <Route path="/military-families" element={<MilitaryFamilies />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsCart />} />
        <Route path="/public-figures" element={<PublicFigures />} />
        <Route path="/pre-military-training" element={<PreMilitaryTraining />} />
        <Route path="/rehabilitation" element={<Rehabilitation />} />
        <Route path="/youth" element={<Youth />} />

        <Route path='/owner' element={<p>Owner</p>}>
          <Route index element={<p>Dashboard</p>} />
          <Route path='addCategory' element={<p>AddCategory</p>} />
        </Route>
      </Routes>
      
      <LearnMore />
      <Footer />
    </>
  )
}

export default App
