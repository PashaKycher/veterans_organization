import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

import NavBar from './components/NavBar'
import LearnMore from './components/LearnMore'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Analytical from './pages/Analytical'
import News from './pages/News'
import Position from './pages/Position'
import Leaders from './pages/Leaders'
import Club from './pages/Club'
import SupportAndInteraction from './pages/SupportAndInteraction'

import VerifyEmail from './components/helpers/VerifyEmail'

import AnalyticalCard from './pages/card/AnalyticalCard'
import NewsCard from './pages/card/NewsCard'
import PositionCard from './pages/card/PositionCard'
import LeadersCard from './pages/card/LeadersCard'
import ClubCard from './pages/card/ClubCard'

import LayoutAdmin from './pages/owner/LayoutAdmin'
import LayoutUser from './pages/user/LayoutUser'

function App() {
  const isOwnerPath = useLocation().pathname.includes("/owner")
  const isUserPath = useLocation().pathname.includes("/user")
  const isRehabilitation = useLocation().pathname.includes("/rehabilitation")
  const isLeaders = useLocation().pathname.includes("/leaders")
  const isSupport = useLocation().pathname.includes("/support")
  const isOpen = useSelector(state => state.login.isOpen);

  const [isLearnMore, setIsLearnMore] = useState(true)
  const [isNawBar, setIsNawBar] = useState(true)

  useEffect(() => {
    if (isOwnerPath || isRehabilitation || isLeaders || isSupport) {
      setIsLearnMore(false)
    } else {
      setIsLearnMore(true)
    }
  }, [isOwnerPath, isRehabilitation, isLeaders])

  useEffect(() => {
      if (isUserPath || isOwnerPath) {
        setIsNawBar(false)
      } else {
        setIsNawBar(true)
      }
    }, [isUserPath, isOwnerPath])

  return (
    <>
      <Toaster />
      {!isOpen ? (
        <>
          {isNawBar && <NavBar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            <Route path="/analytical" element={<Analytical />} />
            <Route path="/analytical/:id" element={<AnalyticalCard />} />

            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsCard />} />

            <Route path="/position" element={<Position />} />
            {/* <Route path="/position/:id" element={<PositionCard />} /> */}

            <Route path="/leaders" element={<Leaders />} />
            {/* <Route path="/leaders/:id" element={<LeadersCard />} /> */}

            <Route path="/club" element={<Club />} />
            {/* <Route path="/club/:id" element={<ClubCard />} /> */}

            <Route path="/support" element={<SupportAndInteraction />} />

            <Route path='/owner' element={<LayoutAdmin />}>
              <Route index element={<p>Dashboard</p>} />
              <Route path='analytical' element={<p>analytical</p>} />
              <Route path='news' element={<p>news</p>} />
              <Route path='position' element={<p>position</p>} />
              <Route path='leaders' element={<p>leaders</p>} />
              <Route path='club' element={<p>club</p>} />
            </Route>

            <Route path='/user' element={<LayoutUser />}>
              <Route index element={<p>Dashboard</p>} />
            </Route>
          </Routes>

          {isLearnMore && <LearnMore />}

          <Footer />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  )
}

export default App
