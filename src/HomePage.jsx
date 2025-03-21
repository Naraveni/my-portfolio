import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Experience from "./Experience";

export const HomePage = () => {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll pr-52">
      <div className="snap-start h-screen">
        <AboutMe />
      </div>
      <div className="snap-start h-screen">
        <Experience />
      </div>
      <div className="snap-start h-screen">
        <Projects />
      </div>
      <div className="snap-start h-screen">
        <Skills />
      </div>
      <div className="snap-start h-screen">
        <Resume />
      </div>
      <div className="snap-start h-screen">
        <Contact />
      </div>
    </div>
  );
};
