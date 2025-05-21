import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "🛍️ E-commerce Fashion Store (Seller & User Side)",
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
      title: "🛒 Frontend Online Shopping Store",
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
      title: "💼 Portfolio Website",
      tech: "React.js, Tailwind CSS",
      description: [
        "Designed and built a responsive personal portfolio website.",
        "Showcases my skills, projects, and includes a contact form section.",
        "Used Tailwind CSS for fast and consistent UI styling."
      ]
    },
    {
      title: "📧 Contact Form",
      tech: "React, EmailJS, Node.js (optional backend)",
      description: [
        "Built a functional contact form that integrates with EmailJS.",
        "Allows users to submit messages that are sent directly to email.",
        "Styled with Tailwind CSS and optional backend support via Node.js."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-16 flex items-center justify-center">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10 text-center border-b-2 inline-block border-orange-400 pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          My Projects
        </motion.h2>

        <div className="space-y-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-orange-500 mt-1 mb-2">{project.tech}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
