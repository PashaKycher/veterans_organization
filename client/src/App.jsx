import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import NavBar from './components/NavBar'
import LearnMore from './components/LearnMore'
import Footer from './components/Footer'

import Home from './pages/Home'
import Analytical from './pages/Analytical'
import News from './pages/News'
import Position from './pages/Position'
import Leaders from './pages/Leaders'
import Club from './pages/Club'
import SupportAndInteraction from './pages/SupportAndInteraction'

import AnalyticalCard from './pages/card/AnalyticalCard'
import NewsCard from './pages/card/NewsCard'
import PositionCard from './pages/card/PositionCard'
import LeadersCard from './pages/card/LeadersCard'
import ClubCard from './pages/card/ClubCard'

function App() {
  const isOwnerPath = useLocation().pathname.includes("/owner")
  const isRehabilitation = useLocation().pathname.includes("/rehabilitation")
  const isLeaders = useLocation().pathname.includes("/leaders")
  const isSupport = useLocation().pathname.includes("/support")

  const [isLearnMore, setIsLearnMore] = useState(true)

  useEffect(() => {
    if (isOwnerPath || isRehabilitation || isLeaders || isSupport) {
      setIsLearnMore(false)
    } else {
      setIsLearnMore(true)
    }
  }, [isOwnerPath, isRehabilitation, isLeaders])

  return (
    <>
      <Toaster />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

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

        <Route path='/owner' element={<p>Owner</p>}>
          <Route index element={<p>Dashboard</p>} />
          <Route path='addCategory' element={<p>AddCategory</p>} />
        </Route>
      </Routes>

      {isLearnMore && <LearnMore />}
      <Footer />
    </>
  )
}

export default App
