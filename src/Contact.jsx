import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import SVGs
import LinkedInIcon from '/src/assets/linkedin.svg';
import GitHubIcon from '/src/assets/github.svg';
import EmailIcon from '/src/assets/email.svg';

const Contact = () => {
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

    // Observe the contact section
    const section = document.getElementById('contact');
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
      id="contact"
      className="min-h-screen flex flex-col items-center px-4 pt-12"
    >
      <h2 className="text-5xl font-bold mb-6 text-center">Contact</h2>

      {/* Contact details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 50, duration: 1 }}
        className="flex flex-col items-center space-y-6"
      >
        <div className="text-xl flex items-center">
          <img src={EmailIcon} alt="Email" className="w-6 h-6 mr-2 text-blue-500" />
          <span className="font-semibold">Email: </span>
          <a href="mailto:harshaemployment@gmail.com" className="text-blue-500" style={{ fontFamily: "ParagraphFont" }}>
            harshaemployment@gmail.com
          </a>
        </div>
        <div className="text-xl flex items-center">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 mr-2 text-blue-500" />
          <span className="font-semibold" >LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/harsha-bana-83bab319b/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "ParagraphFont" }}
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="text-xl flex items-center">
          <img src={GitHubIcon} alt="GitHub" className="w-6 h-6 mr-2 text-blue-500" />
          <span className="font-semibold">GitHub: </span>
          <a
            href="https://github.com/Naraveni"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "ParagraphFont" }}
          >
            GitHub Profile
          </a>
        </div>
        <div className="text-xl">
          <span className="font-semibold">Phone: </span>
          <span>475-234-9972</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
