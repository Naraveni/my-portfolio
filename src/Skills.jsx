import React, { useEffect, useState } from 'react';
import { WiredCard } from 'wired-elements-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [inView, setInView] = useState(false);

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
    "Rspec"
  ];

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);  // Set to true when the section comes into view
        } else {
          setInView(false); // Set to false when the section is out of view
        }
      });
    }, options);

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="min-h-screen px-4 py-8">
      <h2 className="text-5xl font-bold mb-6 text-center">Skills</h2>

      {/* Grid layout for the cards */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          let direction = "left";  // Default direction
          
          // Adjust direction based on row and index
          if (Math.floor(index / 4) % 2 === 0) {
            direction = index % 4 === 0 || index % 4 === 1 ? "left" : "right";  // Odd rows from left, even from right
          } else {
            direction = index % 4 === 2 || index % 4 === 3 ? "left" : "right";  // Odd rows from right, even from left
          }

          // Set the hover color based on the skill
          const hoverColors = [
            "hover:bg-amber-600",  // Ruby On Rails
            "hover:bg-cyan-900",   // React Js
            "hover:bg-blue-600",   // JavaScript
            "hover:bg-green-700",  // Redux
            "hover:bg-purple-600", // Postgresql
            "hover:bg-gray-600",   // Linux
            "hover:bg-red-600",    // AWS
            "hover:bg-blue-500",   // Jira
            "hover:bg-blue-600",      // GitHub
            "hover:bg-yellow-600",
            "hover:bg-cyan-900", // Python
          ];

          return (
            <motion.div
              key={index}
              initial={{ x: direction === "left" ? "100vw" : "-100vw", opacity: 0 }}
              animate={{ x: inView ? 0 : (direction === "left" ? "100vw" : "-100vw"), opacity: inView ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 50, duration: 1, delay: index * 0.1 }}
            >
              <WiredCard className={`p-8 flex justify-center items-center rounded-lg shadow-lg  hover:text-white ${hoverColors[index]}`}>
                <div className="flex flex-col items-center">
                  <img 
                     src={`/src/assets/${skill.toLowerCase().replace(/\s+/g, "_")}.svg`}
                    alt={`${skill} icon`} 
                    className="w-15 h-15 mb-4"
                  />
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
