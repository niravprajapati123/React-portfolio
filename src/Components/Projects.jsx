import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "\ud83c\udf6d E-commerce Fashion Store (Seller & User Side)",
      tech: "React.js, Tailwind CSS, Redux, Node.js, MongoDB",
      description: [
        "Developed a full-stack fashion e-commerce web application with separate interfaces for users and sellers.",
        "Implemented a responsive UI using Tailwind CSS for a modern and mobile-friendly shopping experience.",
        "Managed global state using Redux for handling cart, product listings, and user sessions.",
        "Built RESTful APIs with Node.js and Express for backend services.",
        "Integrated MongoDB to store user data, product details, and cart information.",
        "Created a Seller Dashboard for managing products, orders, and inventory.",
        "Tested APIs using Postman for smooth integration.",
        "Implemented product browsing, cart functionality, and order preview for users.",
        "Used React Router for seamless page navigation."
      ]
    },
    {
      title: "\ud83d\uded2 Frontend Online Shopping Store",
      tech: "React.js, Redux, Tailwind CSS, React Router",
      description: [
        "Developed a responsive and interactive frontend shopping application.",
        "Used Tailwind CSS for mobile-first, modern UI design.",
        "Implemented Add to Cart feature to dynamically add products.",
        "Used Redux for efficient cart state management and display.",
        "Integrated React Router to navigate between Home, Product, and Cart pages."
      ]
    },
    {
      title: "\ud83d\udcbc Portfolio Website",
      tech: "React.js, Tailwind CSS",
      description: [
        "Designed and built a responsive personal portfolio website.",
        "Showcases my skills, projects, and includes a contact form section.",
        "Used Tailwind CSS for fast and consistent UI styling."
      ]
    },
    {
      title: "\ud83d\udce7 Contact Form",
      tech: "React, EmailJS, Node.js (optional backend)",
      description: [
        "Built a functional contact form that integrates with EmailJS.",
        "Allows users to submit messages that are sent directly to email.",
        "Styled with Tailwind CSS and optional backend support via Node.js."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-12 text-center border-b-2 inline-block border-orange-400 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 cursor-pointer transition-all"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-sm text-orange-500">{project.tech}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-4 text-gray-500 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-orange-500 mb-4">{selectedProject.tech}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {selectedProject.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
