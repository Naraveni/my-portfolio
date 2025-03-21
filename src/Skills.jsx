import React, { useEffect, useState } from "react";
import { WiredCard } from "wired-elements-react";
import { motion } from "framer-motion";

// Import all SVGs manually
import ruby_on_rails from "/src/assets/ruby_on_rails.svg";
import react_js from "/src/assets/react_js.svg";
import javascript from "/src/assets/javascript.svg";
import redux from "/src/assets/redux.svg";
import postgresql from "/src/assets/postgresql.svg";
import linux from "/src/assets/linux.svg";
import aws from "/src/assets/aws.svg";
import jira from "/src/assets/jira.svg";
import github from "/src/assets/github.svg";
import python from "/src/assets/python.svg";
import rspec from "/src/assets/rspec.svg";

// Create an object mapping skill names to their respective imports
const skillIcons = {
  ruby_on_rails,
  react_js,
  javascript,
  redux,
  postgresql,
  linux,
  aws,
  jira,
  github,
  python,
  rspec,
};

// Skill list
const skills = [
  "Ruby On Rails",
  "React Js",
  "JavaScript",
  "Redux",
  "Postgresql",
  "Linux",
  "AWS",
  "Jira",
  "GitHub",
  "Python",
  "Rspec",
];


const hoverColors = [
    "hover:bg-amber-600",  // Ruby On Rails
    "hover:bg-cyan-900",   // React Js
    "hover:bg-blue-600",   // JavaScript
    "hover:bg-green-700",  // Redux
    "hover:bg-purple-600", // Postgresql
    "hover:bg-gray-600",   // Linux
    "hover:bg-red-600",    // AWS
    "hover:bg-blue-500",   // Jira
    "hover:bg-blue-600",   // GitHub
    "hover:bg-yellow-600", // Python
    "hover:bg-cyan-900",   // Rspec
  ];
const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section id="skills" className="min-h-screen px-4 py-8">
      <h2 className="text-5xl font-bold mb-6 text-center">Skills</h2>

      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const skillKey = skill.toLowerCase().replace(/\s+/g, "_"); // Transform skill name to match import key
          const icon = skillIcons[skillKey]; // Lookup the icon dynamically
          const direction = index % 2 === 0 ? "100vw" : "-100vw";
          const hoverColor = hoverColors[index]; 

          return (
            <motion.div
            key={index}
            initial={{ x: direction, opacity: 0 }}
            animate={{ x: inView ? 0 : direction, opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: index * 0.1 }}
          >
              <WiredCard className={`p-8 flex justify-center items-center rounded-lg shadow-lg hover:text-white ${hoverColor}`}>
                <div className="flex flex-col items-center">
                  {icon && <img src={icon} alt={`${skill} icon`} className="w-16 h-16 mb-4" />}
                  <span className="text-xl font-semibold">{skill}</span>
                </div>
              </WiredCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
