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
    ], // Background color
    hoverColor: "hover:bg-blue-600", // Hover background color
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

    hoverColor: "hover:bg-green-600",
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
    hoverColor: "hover:bg-yellow-600",
  },
  {
    title: "Intern-Developer | Zaggle Prepaid Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Jun 2021 - Sep 2021",
    description: [
      "Received hands-on training in Ruby on Rails and React JS and resolved more than 100+ bugs.",
      "Attended numerous client meetings, gaining insights into corporate work culture and enhancing communication and teamwork skills.",
    ],
    hoverColor: "hover:bg-red-600",
  },
];

const Experience = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const index = entry.target.getAttribute("data-index");
      if (entry.isIntersecting) {
        setActiveIndexes((prev) => [...prev, index]);
      } else {
        setActiveIndexes((prev) => prev.filter((idx) => idx !== index));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    const items = document.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen px-4 pt-9">
      <h2 className="text-5xl font-bold mb-6 ">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            data-index={index}
            className={`overflow-hidden hover:text-white group ${exp.bgColor} ${exp.hoverColor} p-4 rounded-lg`} // Applied dynamic background and hover classes
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeIndexes.includes(String(index)) ? 1 : 0,
              y: activeIndexes.includes(String(index)) ? 0 : 50,
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-lg font-medium">
              {exp.location} | {exp.duration}
            </p>
            {/* Hidden by default and shown on hover */}
            <div className="hidden group-hover:block mt-2 space-y-2">
              {exp.description.map((desc, i) => (
                <motion.li
                  key={i}
                  className="text-lg text-black group-hover:text-white" // Text turns white on hover
                  style={{ fontFamily: "ParagraphFont" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeIndexes.includes(String(index)) ? 1 : 0,
                    y: activeIndexes.includes(String(index)) ? 0 : 20,
                  }}
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
