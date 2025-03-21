import React, { useEffect, useState } from 'react';
import myProfileImage from '/src/assets/my_profile_image.jpg';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // State to track if the section is in view
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      // Set inView to true when the section is in view
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, options);

    // Observe the section element
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    // Cleanup the observer on unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center px-4 pb-8">
      {/* Left side - About Me Text */}
      <motion.div 
        className="w-full md:w-3/5"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 50, duration: 2 }}
      >
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-2xl leading-relaxed hover:bg-blend-luminosity" style={{ fontFamily: 'ParagraphFont' }}>
          Hello, I’m <span className="text-3xl" style={{ fontFamily: 'ParagraphFont' }}>Harsha Bana</span>. I’m a passionate web developer dedicated to creating modern, engaging websites that not only look stunning but deliver seamless user experiences. My journey in web development is fueled by a continuous desire to learn and embrace the latest technologies, ensuring my work remains both innovative and cutting-edge.
          <br /><br />
          Beyond coding, I’m an avid sports enthusiast who loves playing cricket, soccer, and badminton. I also cherish time spent with animals, as my love for them keeps me inspired and grounded. I believe that every project is an opportunity to combine creativity with technical expertise, turning complex challenges into elegant digital solutions.
        </p>
      </motion.div>

      {/* Right side - Profile Image */}
      <motion.div 
        className="w-full md:w-2/5 mt-8 md:mt-0 md:pl-8 flex justify-center"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 50, duration: 1 }}
      >
        <img 
          src={myProfileImage} 
          alt="My Profile" 
          className="w-3/5 h-auto rounded-lg shadow-lg" 
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
