import React from "react";
import { assets } from "../assets/assets";
import Hero from "../components/publicFigures/Hero";
import Message from "../components/publicFigures/Message";
import Profiles from "../components/publicFigures/Profiles";


const PublicFigures = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <Hero />
      <Message />
      <Profiles />
    </main>
  );
};

export default PublicFigures;