import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Categorized Skills Data
const icons = [ruby_on_rails, javascript, redux, postgresql, linux, aws, jira, github, python, rspec, react_js];
const skillCategories = {
  Frontend: [
    { name: "React.js", icon: react_js, description: "Used extensively to build fintech products throughout my career and continue leveraging it for personal projects." },
    { name: "JavaScript", icon: javascript, description: "Developed high-performance, interactive components for seamless user engagement." },
    { name: "Redux", icon: redux, description: "Implemented scalable state management solutions for fintech applications and continue using it in personal projects." },
  ],
  Backend: [
    { name: "Ruby on Rails", icon: ruby_on_rails, description: "Designed and optimized RESTful APIs, ensuring high reliability and performance." },
    { name: "PostgreSQL", icon: postgresql, description: "Structured robust and scalable database models, powering critical operations." },
    { name: "Python", icon: python, description: "Developed automation scripts and backend services, streamlining workflows." },
    { name: "Rspec", icon: rspec, description: "Wrote comprehensive test suites, ensuring the stability and reliability of backend services." },
  ],
  "Cloud/Software": [
    { name: "AWS", icon: aws, description: "Orchestrated cloud deployments with AWS Lambda, S3, and EC2, optimizing performance." },
    { name: "Linux", icon: linux, description: "Built a small ecosystem with DNS and DHCP servers during coursework, gaining hands-on experience in network infrastructure." },
    { name: "GitHub", icon: github, description: "Got skills to manage version control, ensuring smooth collaboration and keeping updates of work pristine." },
    { name: "Jira", icon: jira, description: "Facilitated agile development by planning and tracking sprints with precision." },
  ],
};

const Skills = () => {

  return (
    <section id="skills" className="min-h-screen px-4 pb-22">
      <h2 className="text-2xl sm:text-3xl md:text-5xl underline font-bold mb-6 text-center">Skills</h2>

      <div className="flex flex-wrap gap-8 justify-center p-8">
        {icons.map((skill, skillIndex) => (
          <motion.img
            key={skillIndex}
            src={skill}
            alt={`Skill ${skillIndex}`}
            className=" w-1/6 h-1/6 md:w-16 md:h-16  lg:w-16 lg:h-16 sm:object-scale-down  cursor-pointer transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.5, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 0.1, stiffness: 50, damping: 2, mass: 2 } }}
          />
        ))}
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Frontend</h3>
          <div className="space-y-4 mobile-card-wrapper">
            <AnimatePresence>
              {skillCategories.Frontend.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="mobile-card flex justify-center items-center gap-3 "
                  initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -400 : 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: skillIndex % 2 === 0 ? 100 : -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    mass: 2,
                  }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-1/12 h-1/12 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                  <div className="text-center sm:text-sm md:text-base lg:text-lg">
                    <strong>{skill.name}:</strong> <span style={{ fontFamily: 'ParagraphFont' }}>{skill.description}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Backend</h3>
          <div className="space-y-4 mobile-card-wrapper">
            <AnimatePresence>
              {skillCategories.Backend.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="mobile-card flex justify-center items-center gap-3"
                  initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -400 : 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: skillIndex % 2 === 0 ? 100 : -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    mass: 2,
                  }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-1/12 h-1/12 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                  <div className="text-center sm:text-sm md:text-base lg:text-lg">
                    <strong>{skill.name}:</strong> <span style={{ fontFamily: 'ParagraphFont' }}>{skill.description}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Cloud/Software</h3>
          <div className="space-y-4 mobile-card-wrapper">
            <AnimatePresence>
              {skillCategories["Cloud/Software"].map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="mobile-card flex justify-center items-center gap-3"
                  initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -400 : 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: skillIndex % 2 === 0 ? 100 : -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    mass: 2,
                  }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-1/12 h-1/12 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                  <div className="text-center sm:text-sm md:text-base lg:text-lg">
                    <strong>{skill.name}:</strong> <span style={{ fontFamily: 'ParagraphFont' }}>{skill.description}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
