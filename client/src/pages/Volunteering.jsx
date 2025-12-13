import React, { useState } from "react";
import { motion } from "motion/react";
import { assets, volunteeringLinks } from "../assets/assets";
import { Blackout } from '../components/helpers/Blackout';
import ModalWindow from "../components/helpers/ModalWindow";
import Hero from "../components/volunteering/Hero";
import Message from "../components/volunteering/Message";
import WhoVolunteers from "../components/volunteering/WhoVolunteers";
import HowHelp from "../components/volunteering/HowHelp";
import HowJoin from "../components/volunteering/HowJoin";
import Stories from "../components/volunteering/Stories";

const Volunteering = () => {
  const [open, setOpen] = useState(true);
  const data = volunteeringLinks

  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">

      <Hero />
      <Message />
      <WhoVolunteers />
      <HowHelp />
      <HowJoin />
      <Stories />

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={data}
      />
    </main>
  );
};

export default Volunteering;