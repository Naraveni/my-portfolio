import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer | Zaggle Prepaid Ocean Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Jan 2021 – Jul 2023",
    description: [
  "Involved in requirements gathering, design discussions, and client-side code review meetings to align with product needs.",
  "Designed and developed responsive web applications using Ruby on Rails, React.js, Redux, TypeScript, and JavaScript, improving frontend load times by 30%.",
  "Provided direct customer and stakeholder support by troubleshooting and resolving critical production issues, explaining solutions in layman’s terms, and ensuring business continuity.",
  "Created and maintained modular, reusable UI components and frontend libraries, accelerating development across teams.",
  "Integrated multiple RESTful APIs, enabling seamless business logic orchestration across microservices, processing over 10,000 daily transactions.",
  "Implemented JWT-based authentication, session handling, and role-based access control, following security standards (OWASP).",
  "Participated in the entire SDLC, from design and implementation to system testing, bug fixing, and production deployment.",
  "Worked closely with QA teams to support integration testing, UAT, and regression testing using tools like RSpec and Capybara.",
  "Used Git, GitHub, and JIRA for version control, collaboration, and sprint management in an Agile/Scrum environment.",
  "Troubleshooting and resolving critical production issues, enhancing application stability and improving turnaround time on user-reported bugs.",
  "Participated in sprint planning, retrospectives, and regular stand-up meetings, contributing to continuous delivery cycles.",
  "Collaborated with internal business teams to develop and maintain applications supporting finance, HR, and purchasing workflows.",
  "Delivered solutions aligned with business requirements, improving operational efficiency and user satisfaction.",
  "Applied SDLC methodologies to ensure timely delivery of quality software, including documentation, testing, and deployment.",
  "Presented project updates and technical insights to non-technical stakeholders, fostering transparency and trust.",
  "Demonstrated flexibility and forward-thinking by adapting to evolving business needs and integrating new technologies."
]
,
    hoverColor: "hover:bg-[#4ADC7F]",
    activeColor: "bg-[#4ADC7F]",
  },
  {
    title: "Web Developer | Teaching Assistant | University of New Haven",
    location: "West Haven, CT",
    duration: "Jun 2024 – May 2025",
    description: [
  "Provided academic and technical support for core Computer Science courses including Algorithms and Data Structures, Databases, and Web Development.",
  "Conducted weekly lab sessions and assisted in delivering instructional content to over 80+ students, offering in-depth guidance on programming concepts, debugging, and project work.",
  "Mentored students through the design and development of 20+ capstone projects in C and C++, emphasizing data structures, query optimization, and component-based frontend development.",
  "Collaborated with non-technical stakeholders and students, translating complex technical concepts into accessible explanations.",
  "Reviewed code and project submissions, ensuring adherence to academic and industry coding standards in languages such as Python, C/C++, SQL, and JavaScript.",
  "Supported faculty with assignment design, grading criteria, and classroom activities, contributing to a 30% improvement in student project success rates.",
  "Introduced students to best practices in version control (Git), debugging workflows, and documentation as part of real-world development simulations.",
  "Facilitated workshops on software development lifecycle (SDLC), version control, and secure coding practices.",
  "Encouraged creative problem-solving and entrepreneurial thinking among students, aligning with C.H.E.F.S. values."
],
    hoverColor: "hover:bg-[#F56565]",
    activeColor: "bg-[#F56565]",
  },
    {
    title: "Web Development Intern | Sree Vidyanikethan Engineering College ",
    location: "Tirupati, India",
    duration: "Sep 2021 – Dec 2021",
    description: [
  "Developed and maintained the college HR portal for staff, enabling digital attendance tracking (clock-in/clock-out) and leave management.",
  "Built frontend modules with JavaScript, HTML5, and CSS3 integrated with backend logic in SQL for staff record management.",
  "Improved data retrieval efficiency by optimizing SQL queries, reducing HR data lookup times by 25%.",
  "Collaborated with faculty and staff to gather requirements, translating them into functional workflows.",
  "Assisted in migrating paper-based HR systems into a centralized web platform."
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
