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
import exachbg from '../../assets/exachbg3.png'
import exachbg1 from '../../assets/exachbg1.png'
import brywb from '../../assets/brywb.jpg'

function Portfolio() {
  return (
    <div >

      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <div
  style={{ backgroundImage: `url(${exachbg})`   }}
  className="bg-cover bg-right w-full   "
>
  <Experience />
  <Achievements />
</div>

<div
  // style={{ backgroundImage: `url(${exachbg1})` }}
  className="bg-cover bg-top w-full brightness-75"
>
<Projects/>
</div>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
