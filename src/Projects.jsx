import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WiredCard, WiredButton } from "wired-elements-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { STATIC_ASSESTS, PROJECT_BUDDY_IMAGE } from "./utils/constants";

const projects = [
  {
  id: "projectBuddy",
  title: "Project Buddy - Collaboration Platform",
  image: `${PROJECT_BUDDY_IMAGE}`,
  description:
    "Developed a full-stack collaboration platform using Next.js and Supabase, designed to connect students and professionals for project-based learning. Implemented secure authentication and role-based access control with Supabase Auth. Designed real-time project boards and chat features leveraging Supabase’s serverless database and subscription model. Focused on scalability, responsive UI (Tailwind CSS), and intuitive user experience to enhance peer-to-peer collaboration.",
  links: [
    { href: "https://github.com/Naraveni/project-buddy", text: "GitHub" }
  ],
}
,
  {
    id: "vsCode",
    title: "VS Code Extension - Code Highlighter",
    image: `${STATIC_ASSESTS}vs_code_project.png`,
    description:
      "I created a VS Code extension that allows users to highlight code with different colors, just like text.",
    links: [
      { href: "https://github.com/Naraveni/VSCODE-HIGHLIGHT-CODE", text: "GitHub" },
      { href: "https://marketplace.visualstudio.com/items?itemName=Harshabana.highlight-code&ssr=false#review-details", text: "Market Place" },
    ],
  },
  {
    id: "visaSodhara",
    title: "VisaSodhara.com",
    image: `${STATIC_ASSESTS}visa.jpg`,
    description:
      "A platform for Indian international students to share visa experiences, connect with alumni, and stay updated.",
    links: [
      { href: "https://github.com/Naraveni/IntStudents-Backend", text: "GitHub" },
      { href: "#", text: "Live Demo" },
    ],
  },
  {
    id: "openSource",
    title: "Open Source Contributions",
    image: `${STATIC_ASSESTS}ruby_for_good.png`,
    description:
      "Contributions to open-source projects like Pet Rescue Mine and Ruby For Good to help animals and people in need.",
    links: [
      { href: "https://github.com/rubyforgood", text: "GitHub: Ruby For Good" },
    ],
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center px-4 pt-8 pb-12 mb-18 md:p-0 sm:p-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl underline font-bold mb-6">Projects</h2>
      
      <div className="relative w-full max-w-4xl">
        {/* Left arrow button */}
        <WiredButton
          onClick={prevProject}
          className="absolute left-2 top-1/2 -translate-y-1/2 md:z-10 lg:z-10"
          style={{ zIndex: 10 }}
        >
          <ChevronLeft size={36} />
        </WiredButton>

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].id}
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <WiredCard className="p-6 rounded-lg shadow-lg flex flex-col items-center w-2/3 h-auto mx-4 sm:mx-8">
              <div className="w-full h-[250px] flex items-center justify-center mb-6">
    <img
      src={projects[index].image}
      alt={projects[index].title}
      className="max-h-full max-w-full object-contain rounded-lg"
    />
  </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{projects[index].title}</h3>
                <p className="text-lg mb-4" style={{ fontFamily: "ParagraphFont" }}>
                  {projects[index].description}
                </p>
                <div className="flex justify-center space-x-4">
                  {projects[index].links.map((link, i) => (
                    <a key={i} href={link.href} className="text-blue-500">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </WiredCard>
          </motion.div>
        </AnimatePresence>
        <WiredButton
          onClick={nextProject}
          className="absolute right-2 top-1/2 -translate-y-1/2  md:z-10 lg:z-10"
          style={{ zIndex: 10 }}
        >
          <ChevronRight size={36} />
        </WiredButton>
      </div>
    </section>
  );
};

export default Projects;
