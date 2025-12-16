import React, { useState } from "react";

import Hero from "../components/home/Hero";
import Values from "../components/home/Values";
import About from "../components/home/About";
import Directions from "../components/home/Directions";

import { homeLinks } from "../assets/assets";
import { AdditionalBlock } from "../components/helpers/AdditionalBlock";
import {ModalWindow} from "../components/helpers/ModalWindow";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <main className="bg-bg min-h-screen text-text overflow-hidden">
      <Hero />

      <AdditionalBlock
        title="Клуб Захисників України — спільнота відповідальності й дії"
        subtitle="Ми формуємо новий український військовий і громадянський клас — людей, сформованих війною, здатних мислити, брати відповідальність і діяти заради майбутнього держави."
      />

      <About />
      <Values />
      <Directions />

      <ModalWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        items={homeLinks}
      />
    </main>

  );
};

export default Home;
