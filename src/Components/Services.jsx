import React from "react";
import { FaCode, FaServer, FaShoppingCart, FaComments, FaLock, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-purple-500 text-4xl mb-4" />,
    title: "Frontend Web Development",
    description:
      "Crafting responsive, dynamic UIs with React.js & Tailwind CSS. SPA and component-based architecture for scalable apps.",
  },
  {
    icon: <FaServer className="text-purple-500 text-4xl mb-4" />,
    title: "Full-Stack Web Applications",
    description:
      "Complete MERN stack solutions with secure authentication, real-time updates, and scalable backend architecture.",
  },
  {
    icon: <FaShoppingCart className="text-purple-500 text-4xl mb-4" />,
    title: "E-commerce Development",
    description:
      "Product pages, filtering, cart, payment integration, and seller/admin dashboards tailored to your business.",
  },
  {
    icon: <FaComments className="text-purple-500 text-4xl mb-4" />,
    title: "Real-Time Applications",
    description:
      "Real-time chat, multiplayer games, Socket.IO-based communication with mic/chat support for engaging experiences.",
  },
  {
    icon: <FaLock className="text-purple-500 text-4xl mb-4" />,
    title: "Authentication & Authorization",
    description:
      "Secure login/register systems with JWT/session tokens, role-based access, and data protection.",
  },
  {
    icon: <FaTools className="text-purple-500 text-4xl mb-4" />,
    title: "Debugging & Optimization",
    description:
      "Performance tuning, bug fixing, lazy loading, and code refactoring to improve speed and maintainability.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f7f9fc] py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2f4b6b] mb-4">Services I Offer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From stunning UI to powerful backends, I provide full-cycle web development tailored to your business needs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#2f4b6b] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
