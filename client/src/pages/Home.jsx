import React, { useState } from 'react'
import Hero from '../components/home/Hero'
import AboutUs from '../components/home/AboutUs'
import CoreValuesSection from '../components/home/CoreValuesSection'
import OpportunitiesAndApproach from '../components/home/OpportunitiesAndApproach'
import ModalWindow from '../components/helpers/ModalWindow'
import { homeLinks } from '../assets/assets'

const Home = () => {
  const [open, setOpen] = useState(true);
  const data = homeLinks

  return (
    <div className='bg-[#F1F4F4]'>
      <Hero />
      <AboutUs />
      <CoreValuesSection />
      <OpportunitiesAndApproach />
      
      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </div>
  )
}

export default Home