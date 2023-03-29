import React from "react";

//components

import Hero from "../components/Hero";
import CTA from "../components/CTA";
import About from "../components/About";
import Contact from "../components/Contact";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <Clients />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
