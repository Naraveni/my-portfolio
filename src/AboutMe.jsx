import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE_IMAGE } from "./utils/constants";

const AboutMe = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
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

    const section = document.getElementById("about");
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
      id="about"
      className="min-h-screen flex flex-row items-center justify-center px-4 sm:px-6 lg:px-12 pb-8 space-y-8 md:space-y-0"
    >
      <motion.div
        className="w-full sm:w-3/5"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: inView ? 0 : "-100vw", opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 2 }}
      >
        <h2 className=" text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center md:text-left underline">
          About Me
        </h2>
        <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left" style={{fontFamily: 'ParagraphFont'}}>
          Hello, I’m{" "}
          <span className="text-xl sm:text-2xl md:text-3xl">Harsha Bana</span>. I’m
          a passionate web developer dedicated to creating modern, engaging websites
          that not only look stunning but deliver seamless user experiences. My journey
          in web development is fueled by a continuous desire to learn and embrace the
          latest technologies, ensuring my work remains both innovative and cutting-edge.
          <br />
          <br />
          Beyond coding, I’m an avid sports enthusiast who loves playing cricket, soccer,
          and badminton. I also cherish time spent with animals, as my love for them keeps
          me inspired and grounded. I believe that every project is an opportunity to combine
          creativity with technical expertise, turning complex challenges into elegant digital solutions.
        </p>
      </motion.div>

      {/* Right side - Profile Image */}
      <motion.div
        className="w-full sm:w-2/5 flex justify-center mt-6 sm:mt-0"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: inView ? 0 : "100vw", opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <img
          src={PROFILE_IMAGE}
          alt="My Profile"
          className="w-3/5 h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
