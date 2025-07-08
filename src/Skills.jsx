import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STATIC_ASSESTS } from "./utils/constants";

// Categorized Skills Data


const skillCategories = {
  Frontend: [
  { name: "React.js", icon: `${STATIC_ASSESTS}react_js.svg`, description: "Used extensively to build fintech products throughout my career and continue leveraging it for personal projects." },
  { name: "Next.js", icon: `${STATIC_ASSESTS}next_js.svg`, description: "Built performant, server-rendered applications with API routes and SSR capabilities for improved UX and SEO." },
  { name: "JavaScript", icon: `${STATIC_ASSESTS}javascript.svg`, description: "Developed high-performance, interactive components for seamless user engagement." },
  { name: "TypeScript", icon: `${STATIC_ASSESTS}typescript.svg`, description: "Enhanced code quality and developer experience with static typing in React and backend projects." },
  { name: "Redux", icon: `${STATIC_ASSESTS}redux.svg`, description: "Implemented scalable state management solutions for fintech applications and continue using it in personal projects." },
],

Backend: [
  { name: "Ruby on Rails", icon: `${STATIC_ASSESTS}ruby_on_rails.svg`, description: "Designed and optimized RESTful APIs, ensuring high reliability and performance." },
  { name: "PostgreSQL", icon: `${STATIC_ASSESTS}postgresql.svg`, description: "Structured robust and scalable database models, powering critical operations." },
  { name: "Python", icon: `${STATIC_ASSESTS}python.svg`, description: "Developed automation scripts and backend services, streamlining workflows." },
  { name: "Rspec", icon: `${STATIC_ASSESTS}rspec.svg`, description: "Wrote comprehensive test suites, ensuring the stability and reliability of backend services." },
  { name: "Supabase", icon: `${STATIC_ASSESTS}supabase.svg`, description: "Integrated authentication, real-time subscriptions, and storage for full-stack apps with minimal overhead." },
],

"Cloud/Software": [
  { name: "AWS", icon: `${STATIC_ASSESTS}aws.svg`, description: "Orchestrated cloud deployments with AWS Lambda, S3, and EC2, optimizing performance." },
  { name: "Linux", icon: `${STATIC_ASSESTS}linux.svg`, description: "Built a small ecosystem with DNS and DHCP servers during coursework, gaining hands-on experience in network infrastructure." },
  { name: "GitHub", icon: `${STATIC_ASSESTS}github.svg`, description: "Got skills to manage version control, ensuring smooth collaboration and keeping updates of work pristine." },
  { name: "Jira", icon: `${STATIC_ASSESTS}jira.svg`, description: "Facilitated agile development by planning and tracking sprints with precision." },
],

};
const icons = Object.values(skillCategories).flat().map(skill => skill.icon)

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
