import React, { use, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import api from './api/axios'
import { setUserData } from './store/userSlice'

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
import UserIdentityPage from './pages/UserIdentityPage'

import VerifyEmail from './components/helpers/VerifyEmail'

import AnalyticalCard from './pages/card/AnalyticalCard'
import NewsCard from './pages/card/NewsCard'
import PositionCard from './pages/card/PositionCard'
import UserProfile from './pages/card/UserProfile'

import LayoutUser from './pages/user/LayoutUser'

import DashboardUser from './pages/user/Dashborduser'

import LayoutOwner from './pages/owner/LayoutOwner'
import AnalyticalOwner from './pages/owner/analytical/AnalyticalOwner'
import AddCategoryAnalyticalOwner from './pages/owner/analytical/AddCategoryAnalyticalOwner'
import AddAnalyticalOwner from './pages/owner/analytical/AddAnalyticalOwner'
import UpdateAnalyticalOwner from './pages/owner/analytical/UpdateAnalyticalOwner'
import NewsOwner from './pages/owner/news/NewsOwner'
import AddCategoryNewsOwner from './pages/owner/news/AddCategoryNewsOwner'
import AddNewsOwner from './pages/owner/news/AddNewsOwner'
import UpdateNewsOwner from './pages/owner/news/UpdateNewsOwner'
import PositionOwner from './pages/owner/position/PositionOwner'
import AddPositionOwner from './pages/owner/position/AddPositionOwner'
import UpdatePositionOwner from './pages/owner/position/UpdatePositionOwner'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'
import UsersOwner from './pages/owner/user/UsersOwner'
import DashbordOwner from './pages/owner/DashbordOwner'


function App() {
  const dispatch = useDispatch();

  const isOwnerPath = useLocation().pathname.includes("/owner")
  const isUserPath = useLocation().pathname.includes("/user")
  const isRehabilitation = useLocation().pathname.includes("/rehabilitation")
  const isLeaders = useLocation().pathname.includes("/leaders")
  const isSupport = useLocation().pathname.includes("/support")
  const isOpen = useSelector(state => state.login.isOpen);

  useEffect(() => {
    if (isOwnerPath || isRehabilitation || isLeaders || isSupport) {
      setIsLearnMore(false)
    } else {
      setIsLearnMore(true)
    }
  }, [isOwnerPath, isRehabilitation, isLeaders, isSupport])

  const [isLearnMore, setIsLearnMore] = useState(true)
  const [isNawBar, setIsNawBar] = useState(true)

  useEffect(() => {
    if (isUserPath || isOwnerPath) {
      setIsNawBar(false)
    } else {
      setIsNawBar(true)
    }
  }, [isUserPath, isOwnerPath])

  const userData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        dispatch(setUserData(data.user));
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    userData()
  }, [])

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
            <Route path="/position/:id" element={<PositionCard />} />

            <Route path="/leaders" element={<Leaders />} />
            <Route path="/club" element={<Club />} />
            <Route path='/user/:id' element={<UserProfile />} />

            <Route path="/support" element={<SupportAndInteraction />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/supportform" element={<SupportPage/>} />

            <Route path='/owner' element={<LayoutOwner />}>
              <Route index element={<DashbordOwner />} />
              <Route path='analytical' element={<AnalyticalOwner />} />
              <Route path='addcategoryanalytical' element={<AddCategoryAnalyticalOwner />} />
              <Route path='addanalytical' element={<AddAnalyticalOwner />} />
              <Route path='editanalytical/:id' element={<UpdateAnalyticalOwner />} />

              <Route path='news' element={<NewsOwner />} />
              <Route path='addcategorynews' element={<AddCategoryNewsOwner />} />
              <Route path='addnews' element={<AddNewsOwner />} />
              <Route path='editnews/:id' element={<UpdateNewsOwner />} />

              <Route path='position' element={<PositionOwner />} />
              <Route path='addposition' element={<AddPositionOwner />} />
              <Route path='editposition/:id' element={<UpdatePositionOwner />} />

              <Route path='users' element={<UsersOwner/>} />

              <Route path='updateusers' element={<UserIdentityPage />} />
              
            </Route>

            <Route path='/user' element={<LayoutUser />}>
              <Route index element={<DashboardUser />} />
              <Route path='updateusers' element={<UserIdentityPage />} />
            </Route>
          </Routes>

          {isLearnMore && <LearnMore />}

          {!isOwnerPath && <Footer />}
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
