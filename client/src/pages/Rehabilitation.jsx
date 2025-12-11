import React from 'react'
import RehabHero from "../components/rehabilitation/RehabHero";
import RehabPrograms from "../components/rehabilitation/RehabPrograms";
import RehabCenters from "../components/rehabilitation/RehabCenters";
import RehabSteps from "../components/rehabilitation/RehabSteps";
import RehabStories from "../components/rehabilitation/RehabStories";
import RehabCTA from "../components/rehabilitation/RehabCTA";

const Rehabilitation = () => {
  return (
            <div className="bg-[#F1F4F4]">
            <RehabHero />
            <RehabPrograms />
            <RehabCenters />
            <RehabSteps />
            <RehabStories />
            <RehabCTA />
        </div>
  )
}

export default Rehabilitation