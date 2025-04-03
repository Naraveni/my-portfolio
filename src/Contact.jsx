import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import SVGs
import LinkedInIcon from '/src/assets/linkedin.svg';
import GitHubIcon from '/src/assets/github.svg';
import EmailIcon from '/src/assets/email.svg';
import Phone from '/src/assets/phone.png'

const Contact = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
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
      className=" bg-gradient-to-r text-black flex flex-col items-centre md:px-6 lg:px-6 mb-60"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl underline font-bold mb-8 text-center text-black">
        Let's Get in Touch
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 50, duration: 2 }}
        className="flex flex-col items-center space-y-8 sm:space-y-6 md:w-full sm:w-full p-4"
      >
        <div className="text-lg sm:text-base flex items-center space-x-4 transition-all hover:scale-150">
          <img
            src={EmailIcon}
            alt="Email"
            className="w-8 h-8 sm:w-6 sm:h-6"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <span className="font-semibold">Email: </span>
          <a
            href="mailto:harshaemployment@gmail.com"
            className="text-yellow-300"
            style={{ fontFamily: "ParagraphFont" }}
          >
            harshaemployment@gmail.com
          </a>
        </div>

        <div className="text-lg sm:text-base flex items-center space-x-4 transition-all hover:scale-150">
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="w-8 h-8 sm:w-6 sm:h-6"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <span className="font-semibold">LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/harsha-bana-83bab319b/"
            className="text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "ParagraphFont" }}
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="text-lg sm:text-base flex items-center space-x-4 transition-all hover:scale-150">
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="w-8 h-8 sm:w-6 sm:h-6"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <span className="font-semibold">GitHub: </span>
          <a
            href="https://github.com/Naraveni"
            className="text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "ParagraphFont" }}
          >
            GitHub Profile
          </a>
        </div>

        <div className="text-lg sm:text-base flex items-center space-x-4 hover:scale-150">
        <img
            src={Phone}
            alt="Phone"
            className="w-8 h-8 sm:w-6 sm:h-6"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <span className="font-semibold">Phone: </span>
          <a
            href="tel:+14752349972"
            className="text-yellow-300"
            style={{ fontFamily: "ParagraphFont" }}
          >
            475-234-9972
          </a>
        </div>
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-xl sm:text-lg text-gray-700">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
      </div>
    </section>
  );
};

export default Contact;
