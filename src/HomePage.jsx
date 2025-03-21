import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Experience from "./Experience";

export const HomePage = () => {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth pr-52 ">
      <div className="snap-start">
        <AboutMe />
      </div>
      <div className="snap-start">
        <Experience />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Skills />
      </div>
      <div className="snap-start">
        <Resume />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
};
