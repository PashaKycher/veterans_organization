import React from 'react'
import Hero from '../components/home/Hero'
import AboutUs from '../components/home/AboutUs'
import CoreValuesSection from '../components/home/CoreValuesSection'
import OpportunitiesAndApproach from '../components/home/OpportunitiesAndApproach'
import LearnMore from '../components/home/LearnMore'

const Home = () => {
  return (
    <div className='bg-[#F1F4F4]'>
        <Hero />
        <AboutUs /> 
        <CoreValuesSection />
        <OpportunitiesAndApproach />
        <LearnMore />
    </div>
  )
}

export default Home