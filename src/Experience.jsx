import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer | Zaggle Prepaid Ocean Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Jan 2021 – Aug 2023",
    description: [
      "Worked closely with product and business teams to gather requirements and translate them into scalable software solutions.",
      "Designed and developed responsive web applications using Ruby on Rails, React.js, Redux, TypeScript, and JavaScript, improving frontend load times by 30%.",
      "Built and integrated RESTful APIs across microservices, supporting 10,000+ daily financial transactions.",
      "Implemented JWT-based authentication, session management, and role-based access control following OWASP security standards.",
      "Created modular, reusable UI components and frontend libraries to accelerate development across teams.",
      "Participated across the full SDLC including design, development, testing, bug fixing, and production deployment.",
      "Worked closely with QA teams on UAT, integration testing, and regression testing using RSpec and Capybara.",
      "Troubleshot and resolved critical production issues, improving application stability and turnaround time.",
      "Used Git, GitHub, and JIRA in an Agile/Scrum environment for version control and sprint execution.",
      "Collaborated with internal teams to support finance, HR, and purchasing workflows.",
      "Implemented CI/CD pipelines to streamline builds, testing, and deployments, improving release efficiency."
    ],
    hoverColor: "hover:bg-[#4ADC7F]",
    activeColor: "bg-[#4ADC7F]",
  },

  {
    title: "Web Developer | Teaching Assistant | University of New Haven",
    location: "West Haven, CT",
    duration: "Jun 2024 – May 2025",
    description: [
      "Provided technical and academic support for Algorithms, Data Structures, Databases, and Web Development courses.",
      "Conducted weekly lab sessions for 80+ students, assisting with programming, debugging, and project development.",
      "Mentored 20+ capstone teams through full project lifecycles including planning, version control, UI development, and deployment.",
      "Built backend logic using Python, Django, and Java while supporting frontend development with JavaScript and React.",
      "Designed SQL schemas and optimized queries to improve performance and reduce latency.",
      "Reviewed student code to ensure adherence to academic and industry coding standards.",
      "Facilitated workshops on Git workflows, debugging strategies, secure coding, and SDLC practices.",
      "Created reusable project templates and starter kits to standardize onboarding.",
      "Developed small internal tools for faculty using Python, SQL, and REST APIs.",
      "Assisted students with cloud deployments and real-world development workflows."
    ],
    hoverColor: "hover:bg-[#F56565]",
    activeColor: "bg-[#F56565]",
  },

  {
    title: "Web Development Intern | Sree Vidyanikethan Engineering College",
    location: "Tirupati, India",
    duration: "Jan 2020 – Mar 2022",
    description: [
      "Developed and maintained a web-based HR portal for staff attendance and leave management.",
      "Built frontend interfaces using JavaScript, HTML5, and CSS3 integrated with SQL-based backend logic.",
      "Optimized SQL queries, reducing HR data retrieval time by 25%.",
      "Worked with faculty and staff to gather requirements and translate them into functional workflows.",
      "Assisted in migrating paper-based HR processes into a centralized digital platform."
    ],
    hoverColor: "hover:bg-[#BE83FA]",
    activeColor: "bg-[#BE83FA]",
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
