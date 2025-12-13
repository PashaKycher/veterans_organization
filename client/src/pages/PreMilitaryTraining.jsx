import React from "react";
import Message from "../components/preMilitaryTraining/Message";
import Modules from "../components/preMilitaryTraining/Modules";
import Why from "../components/preMilitaryTraining/Why";
import Timeline from "../components/preMilitaryTraining/Timeline";
import CTA from "../components/preMilitaryTraining/CTA";
import Hero from "../components/preMilitaryTraining/Hero";

const PreMilitaryTraining = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <Hero />
      <Message />
      <Modules />
      <Why />
      <Timeline />
      <CTA />
    </main>
  );
};

export default PreMilitaryTraining;