import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
          <source src="/video/BackVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <motion.div
          className="relative z-20 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hi, I'm Nirav</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
            A passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> crafting responsive and user-centric web experiences.
          </p>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-60}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow-md cursor-pointer transition"
          >
            View Projects
          </ScrollLink>
        </motion.div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
