import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 border-b-4 border-orange-500 inline-block pb-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          👋 Hi, I’m a{' '}
          <span className="font-semibold text-orange-500">
            Frontend Developer
          </span>{' '}
          with hands-on experience in <strong>React.js</strong>,{' '}
          <strong>Tailwind CSS</strong>, and modern JavaScript ecosystems.
          <br />
          <br />
          🚀 I enjoy transforming complex requirements into simple, beautiful
          interfaces. From sleek portfolios to dynamic dashboards and e-commerce
          platforms—I’m passionate about building things that are fast,
          responsive, and elegant.
          <br />
          <br />
          🎯 My goal is to create seamless digital experiences that not only
          perform well but also make users feel right at home.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
