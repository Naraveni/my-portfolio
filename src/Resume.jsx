import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WiredButton } from 'wired-elements-react';
import resume from '/src/assets/my_resume.png'

const Resume = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, options);

    // Observe the resume section
    const section = document.getElementById('resume');
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
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center px-4 py-8"
    >
      <h2 className="text-5xl font-bold mb-6 text-center">Resume</h2>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 50, duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl"
      >
        {/* Resume Image */}
        <img
          src={resume}
          alt="My Resume"
          className="w-1/3 h-auto mb-4 md:mb-0"
        />
        {/* Download Button */}
        <a
          href="/src/assets/my_resume.pdf"
          download
          className="flex justify-center mt-4 md:mt-0"
        >
          <WiredButton className="text-black p-6 text-lg">Download Resume</WiredButton>
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
