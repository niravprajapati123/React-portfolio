import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#2f4b6b] mb-8 border-b-4 border-orange-500 inline-block pb-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          👋 Hi! I'm a passionate{' '}
          <span className="font-semibold text-orange-500">Web Developer</span>, specializing in building high-quality web applications using modern tools and frameworks.
          <br /><br />
          With hands-on experience in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, I love creating smooth, fast, and user-friendly digital experiences—from single-page portfolios to real-time apps and full-fledged e-commerce platforms.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <h3 className="text-xl font-semibold text-[#2f4b6b] mb-2">What I Love:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Turning UI designs into clean, maintainable code</li>
              <li>Optimizing performance and responsiveness</li>
              <li>Working on real-time interactive features</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#2f4b6b] mb-2">Tech Stack:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React.js, Tailwind CSS, JavaScript (ES6+)</li>
              <li>Node.js, Express.js, MongoDB</li>
              <li>Socket.IO, Git & GitHub, REST APIs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
