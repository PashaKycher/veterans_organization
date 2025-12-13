import React, { useState } from 'react'
import Hero from '../components/home/Hero'
import AboutUs from '../components/home/AboutUs'
import CoreValuesSection from '../components/home/CoreValuesSection'
import OpportunitiesAndApproach from '../components/home/OpportunitiesAndApproach'
import ModalWindow from '../components/helpers/ModalWindow'
import { homeLinks } from '../assets/assets'
import { AdditionalBlock } from '../components/helpers/AdditionalBlock'

const Home = () => {
  const [open, setOpen] = useState(true);
  const data = homeLinks

  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <Hero />
      <AboutUs />
      <CoreValuesSection />
      <OpportunitiesAndApproach />

      <AdditionalBlock
        title="Творимо простір, де ветерани стають лідерами змін"
        subtitle="Наша місія — перетворити досвід стійкості на фундамент успішного цивільного життя. Від підтримки дітей ветеранів до професійного вишколу дорослих — ми діємо разом, щоб кожен, хто захищав Україну, відчував себе цінним і реалізованим у мирному житті."
      />

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </main>
  )
}

export default Home