import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WiredCard, WiredButton } from "wired-elements-react"; // Import WiredButton
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "vsCode",
    title: "VS Code Extension - Code Highlighter",
    image: "/src/assets/Vs_code_project.png",
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
    image: "/src/assets/visa.jpg",
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
    image: "/src/assets/ruby_for_good.png",
    description:
      "Contributions to open-source projects like Pet Rescue Mine and Ruby For Good to help animals and people in need.",
    links: [
      { href: "https://github.com/rubyforgood", text: "GitHub: Ruby For Good" },
    ],
  }
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center px-4 pt-12">
      <h2 className="text-5xl font-bold mb-3">Projects</h2>
      <div className="relative w-full max-w-4xl">
        {/* Left arrow button */}
        <WiredButton
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          style={{ zIndex: 10 }}
        >
          <ChevronLeft size={36} />
        </WiredButton>

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].id}
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <WiredCard className="p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-3xl h-auto mx-32">
              {/* Image on top, text below */}
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-auto h-80 object-cover rounded-lg shadow-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-3xl font-semibold mb-4">{projects[index].title}</h3>
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

        {/* Right arrow button */}
        <WiredButton
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          style={{ zIndex: 10 }}
        >
          <ChevronRight size={36} />
        </WiredButton>
      </div>
    </section>
  );
};

export default Projects;
