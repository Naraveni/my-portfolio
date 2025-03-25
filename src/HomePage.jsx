import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Experience from "./Experience";

export const HomePage = () => {
  return (
    <div className="text-black h-screen w-screen overflow-y-scroll">
      <Routes>
        <Route path="/*" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default HomePage;
