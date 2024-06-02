import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import { About, Archives, Contact, Home, Projects } from "./Pages/Pages";
import ParallexBG from "./components/ParallexBG/ParallexBG";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <ParallexBG />
        <Home />
        <About />
        <Projects />
        <Archives />
        <Contact />
      </main>
    </div>
  );
};

export default UImode;
