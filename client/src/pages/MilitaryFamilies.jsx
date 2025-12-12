import React, { useState } from "react";
import MFHero from '../components/militaryFamilies/MFHero'
import MFAbout from '../components/militaryFamilies/MFAbout'
import MFSupportDirections from '../components/militaryFamilies/MFSupportDirections'
import MFPrograms from '../components/militaryFamilies/MFPrograms'
import MFGuides from '../components/militaryFamilies/MFGuides'
import MFFAQ from '../components/militaryFamilies/MFFAQ'
import { militaryFamiliesLinks } from '../assets/assets'
import ModalWindow from "../components/helpers/ModalWindow";

const MilitaryFamilies = () => {
  const [open, setOpen] = useState(true);
  const data = militaryFamiliesLinks


  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <MFHero />
      <MFAbout />
      <MFSupportDirections />
      <MFPrograms />
      <MFGuides />
      <MFFAQ />

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </main>
  )
}

export default MilitaryFamilies