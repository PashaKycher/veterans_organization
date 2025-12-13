import React from "react";
import { assets, programsYouth } from "../assets/assets";
import Hero from "../components/youth/Hero";
import Message from "../components/youth/Message";
import Programs from "../components/youth/Programs";
import WhyMatters from "../components/youth/WhyMatters";
import Gallery from "../components/youth/Gallery";
import CTA from "../components/youth/CTA";






const Youth = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <Hero />
      <Message />
      <Programs />
      <WhyMatters />
      <Gallery />
      <CTA />
    </main>
  );
};

export default Youth;