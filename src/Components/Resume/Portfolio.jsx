import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";

function Portfolio() {
  return (
    <div >
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience/>
      <Achievements/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
