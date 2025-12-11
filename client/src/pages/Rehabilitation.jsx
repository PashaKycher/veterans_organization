import React, { useState } from 'react'
import RehabHero from "../components/rehabilitation/RehabHero";
import RehabPrograms from "../components/rehabilitation/RehabPrograms";
import RehabCenters from "../components/rehabilitation/RehabCenters";
import RehabSteps from "../components/rehabilitation/RehabSteps";
import RehabStories from "../components/rehabilitation/RehabStories";
import RehabCTA from "../components/rehabilitation/RehabCTA";
import { rehabilitationLinks } from '../assets/assets';
import ModalWindow from '../components/helpers/ModalWindow';

const Rehabilitation = () => {
  const [open, setOpen] = useState(true);
  const data = rehabilitationLinks

  return (
    <div className="bg-[#F1F4F4]">
      <RehabHero />
      <RehabPrograms />
      <RehabCenters />
      <RehabSteps />
      <RehabStories />
      <RehabCTA />

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </div>
  )
}

export default Rehabilitation