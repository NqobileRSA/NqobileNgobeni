import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import { About, Archives, Contact, Home, Projects } from "./Pages/Pages";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
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
