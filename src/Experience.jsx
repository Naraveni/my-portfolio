import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Teaching Assistant | University of New Haven",
    location: "New Haven, CT",
    duration: "Aug 2024 - Present",
    description: [
      "Conducted lectures and contributed to course material development, assisting students in Python, SQL, C, C++, MySQL, Networking.",
      "Developed strong mentoring, communication, and creative thinking while interacting with students and professors.",
    ],
    hoverColor: "hover:bg-[#F56565]",
    activeColor: "bg-[#F56565]", // Active background color
  },
  {
    title: "Software Developer | Zaggle Prepaid Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Sep 2022 - July 2023",
    description: [
      "Developed and maintained a scalable fintech product supporting 2.89 million users and 50 million prepaid cards issued.",
      "Interacted with over 50+ clients monthly, gathering feedback and ensuring successful feature implementation.",
      "Integrated SAP for major clients with 25,000+ users, streamlining processes and improving efficiency.",
      "Developed a multifunctional API for onboarding employees and reviewed over 60+ PRs for production.",
    ],
    hoverColor: "hover:bg-[#4ADC7F]",
    activeColor: "bg-[#4ADC7F]", // Active background color
  },
  {
    title: "Intern-Developer | Zaggle Prepaid Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Feb 2022 - Aug 2022",
    description: [
      "Resolved over 300+ bugs, enhancing software stability and user experience.",
      "Integrated Travel Expenses API with a major client’s travel booking platform, syncing employee data.",
      "Developed APIs for iOS and Android apps.",
    ],
    hoverColor: "hover:bg-[#BE83FA]",
    activeColor: "bg-[#BE83FA]", // Active background color
  },
  {
    title: "Intern-Developer | Zaggle Prepaid Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Jun 2021 - Sep 2021",
    description: [
      "Received hands-on training in Ruby on Rails and React JS and resolved more than 100+ bugs.",
      "Attended numerous client meetings, gaining insights into corporate work culture and enhancing communication and teamwork skills.",
    ],
    hoverColor: "hover:bg-[#CB99FF]",
    activeColor: "bg-[#CB99FF]", // Active background color
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
              className={`mt-2 space-y-2 ${
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
