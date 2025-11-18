import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer | Zaggle Prepaid Ocean Services Pvt. Ltd",
    location: "Hyderabad, India",
    duration: "Feb 2022 – July 2023",
    description: [
      "Built secure backend services using Java Spring Boot, Ruby on Rails, Node.js, and PostgreSQL for fintech platforms.",
      "Designed REST APIs for payments, digital wallets, and HR integrations supporting high-volume transactions.",
      "Developed responsive dashboards and reusable UI components using React and TypeScript.",
      "Implemented JWT authentication, role-based access logic, and session management aligned with OWASP standards.",
      "Improved backend response time by optimizing SQL queries and reducing unnecessary API calls.",
      "Translated business requirements into technical specifications by working closely with product owners.",
      "Set up CI/CD workflows and supported deployments on AWS using EC2, S3, and IAM.",
      "Enhanced data accuracy and reliability through better validation rules and API contracts.",
      "Collaborated with QA and DevOps teams to streamline release cycles and reduce production issues.",
      "Integrated third-party payment systems and internal HR modules into existing architecture.",
      "Created technical documentation, API specifications, and release notes for engineering and operations teams.",
      "Partnered with UI/UX teams to ensure smooth, consistent user experiences across devices."
    ],
    hoverColor: "hover:bg-[#4ADC7F]",
    activeColor: "bg-[#4ADC7F]",
  },

  {
    title: "Web Developer | Teaching Assistant | University of New Haven",
    location: "West Haven, CT",
    duration: "Aug 2024 – May 2025",
    description: [
      "Supported development of course applications and tools for Algorithms, Databases, and Web Development programs.",
      "Guided 20+ capstone teams through planning, version control, UI implementation, deployment, and documentation.",
      "Built backend logic in Django and Java while supporting front-end components using JavaScript and React.",
      "Designed SQL schemas and optimized queries to improve performance and reduce latency in student submissions.",
      "Conducted workshops on Git workflows, debugging patterns, secure coding, and CI/CD basics.",
      "Created reusable project templates and starter kits that standardized student onboarding.",
      "Helped students debug complex issues in algorithms, data structures, and web application logic.",
      "Built small-scale internal tools for faculty using Python, SQL, and REST API integrations.",
      "Assisted students with cloud deployments, strengthening their understanding of real-world development environments.",
      "Wrote documentation covering engineering best practices, testing approaches, and SDLC guidelines.",
      "Collaborated with professors to refine project rubrics and technical expectations.",
      "Supported classroom labs by reviewing designs, API structures, and frontend components."
    ],
    hoverColor: "hover:bg-[#F56565]",
    activeColor: "bg-[#F56565]",
  },

  {
    title: "Full Stack Developer | Net Solutions",
    location: "Chandigarh, India",
    duration: "Jan 2020 – Jan 2022",
    description: [
      "Built frontend modules using JavaScript, HTML5, CSS3, and React to support client-facing applications.",
      "Developed backend logic using Node.js and integrated REST APIs into various interfaces.",
      "Improved database performance by optimizing SQL queries and reducing execution time.",
      "Designed reusable UI components that increased development speed for multiple teams.",
      "Participated in Agile sprints, including planning, estimation, and code reviews.",
      "Identified UI bugs and application issues, providing fast and effective resolutions.",
      "Collaborated with designers and backend developers to refine system workflows and improve usability.",
      "Implemented backend features supporting authentication, form validation, and core workflows.",
      "Helped deploy builds to staging environments and validated features for client demos.",
      "Mentored junior developers on debugging, Git best practices, and architecture patterns.",
      "Improved reliability through enhanced error-handling strategies across applications.",
      "Authored documentation for feature behavior, workflows, and implementation details."
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
