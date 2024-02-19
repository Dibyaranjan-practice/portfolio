import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import Home from "./components/Home/Home";
import AboutMe from "./components/Home/AboutMe";
import WhatIDo from "./components/Home/WhatIDo";
import Resume from "./components/Home/Resume";
import ContactMe from "./components/Home/ContactMe";
import FAQ from "./components/Home/FAQ";
import Portfolio from "./components/Home/Portfolio";
import ClientSpeak from "./components/Home/ClientSpeak";
import Hire from "./components/Home/Hire";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function App() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.pageYOffset < 200);
    });
  }, []);
  const moveToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <AboutMe />
        <WhatIDo />
        <Resume />
        <Portfolio />
        <Hire />

        <FAQ />
        <ClientSpeak />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
      {!isTop && (
        <div
          className="movetotop fixed bottom-2 right-4 bg-[#c6c7c8] text-white rounded-full p-2"
          onClick={moveToTop}
        >
          <ArrowUpwardIcon />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
