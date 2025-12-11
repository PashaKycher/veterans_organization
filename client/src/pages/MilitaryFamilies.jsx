import React from "react";
import MFHero from '../components/militaryFamilies/MFHero'
import MFAbout from '../components/militaryFamilies/MFAbout'
import MFSupportDirections from '../components/militaryFamilies/MFSupportDirections'
import MFPrograms from '../components/militaryFamilies/MFPrograms'
import MFGuides from '../components/militaryFamilies/MFGuides'
import MFFAQ from '../components/militaryFamilies/MFFAQ'
import { militaryFamiliesLinks } from '../assets/assets'

const MilitaryFamilies = () => {

  

  return (
    <div className='bg-[#F1F4F4]'>
      <MFHero />
      <MFAbout />
      <MFSupportDirections />
      <MFPrograms />
      <MFGuides />
      <MFFAQ />

      {/* <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      /> */}
    </div>
  )
}

export default MilitaryFamilies