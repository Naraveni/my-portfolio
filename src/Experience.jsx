import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer | Zaggle Prepaid Ocean Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Designed and developed responsive web applications using Ruby on Rails, React.js, Redux, TypeScript, and JavaScript, improving frontend load times by 30%.",
      "Built modular, reusable UI components and frontend libraries, accelerating team development.",
      "Integrated multiple RESTful APIs, enabling seamless microservices orchestration and supporting 10,000+ daily transactions.",
      "Implemented JWT-based authentication and role-based access control, following OWASP standards.",
      "Collaborated with QA teams to support integration and regression testing using RSpec and Capybara.",
      "Resolved critical production issues and improved turnaround time on user-reported bugs.",
    ],
    hoverColor: "hover:bg-[#4ADC7F]",
    activeColor: "bg-[#4ADC7F]",
  },
  {
    title: "Full Stack Developer Intern | Zaggle Prepaid Ocean Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Sep 2021 – Dec 2021",
    description: [
      "Integrated a Travel Expenses API for 10,000+ employee records, improving sync efficiency by 40%.",
      "Developed and deployed backend APIs for mobile platforms, increasing user engagement by 25%.",
      "Debugged and resolved 300+ bugs and UI inconsistencies, reducing system errors by 50%.",
      "Contributed to GraphQL prototypes and service modularization initiatives.",
      "Collaborated with cross-functional teams using Git, RSpec, and Agile workflows.",
    ],
    hoverColor: "hover:bg-[#BE83FA]",
    activeColor: "bg-[#BE83FA]",
  },
  {
    title: "Teaching Assistant | University of New Haven",
    location: "West Haven, CT",
    duration: "Aug 2024 – May 2025",
    description: [
      "Supported courses in Algorithms, Data Structures, Databases, and Web Development for 80+ students.",
      "Led lab sessions and provided one-on-one guidance in Python, SQL, JavaScript, and C/C++.",
      "Mentored 20+ capstone projects with focus on data structures and frontend development.",
      "Reviewed student code to ensure quality and adherence to academic standards.",
      "Contributed to assignment design, grading, and classroom activities, improving project success rate by 30%.",
    ],
    hoverColor: "hover:bg-[#F56565]",
    activeColor: "bg-[#F56565]",
  },
];


const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(
    /iPad|Tablet|Android/i.test(navigator.userAgent)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(/iPad|Tablet|Android/i.test(navigator.userAgent));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    if (isMobile || isTablet) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section
      id="experience"
      className="text-black relative px-4 pt-9 pb-24 md:pb-32 min-h-screen sm:mb-40"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl underline font-bold mb-6 text-center">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden group p-2 rounded-lg cursor-pointer transition-all duration-300 ${
              (activeIndex === index || isMobile || isTablet) ? exp.activeColor : exp.hoverColor
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2, type: "spring" }}
            onClick={() => handleClick(index)}
            onTouchStart={() => handleClick(index)}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              {exp.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-lg font-medium">
              {exp.location} | {exp.duration}
            </p>

            {/* Description Visibility Fix */}
            <div
              className={`mt-2 space-y-2 font-bold ${
                isMobile || isTablet
                  ? activeIndex === index
                    ? "block"
                    : "block"
                  : "hidden group-hover:block"
              }`}
            >
              {exp.description.map((desc, i) => (
                <motion.li
                  key={i}
                  className="text-xs sm:text-sm md:text-lg text-black group-hover:text-white font-bold"
                  style={{ fontFamily: "ParagraphFont" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                >
                  {desc}
                </motion.li>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
