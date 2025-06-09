import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#2f4b6b] fixed top-0 left-0 right-0 z-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold">Nirav Prajapati</div>
          <p className="text-lg font-medium text-orange-300">React Js Developer</p>
        </div>
        <ul className="hidden md:flex items-center space-x-8 uppercase font-semibold tracking-wide text-white">
          <li><ScrollLink to="home" smooth duration={500} offset={-60} className="cursor-pointer hover:text-orange-300">Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth duration={500} offset={-60} className="cursor-pointer hover:text-orange-300">About</ScrollLink></li>
          <li><ScrollLink to="services" smooth duration={500} offset={-60} className="cursor-pointer hover:text-orange-300">Services</ScrollLink></li>
          <li><ScrollLink to="projects" smooth duration={500} offset={-60} className="cursor-pointer hover:text-orange-300">Projects</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={500} offset={-60} className="bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 transition cursor-pointer">Contact</ScrollLink></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#2f4b6b] px-4 pb-4">
          <ul className="space-y-4 font-medium text-white">
            <li><ScrollLink to="home" smooth duration={500} offset={-60} onClick={closeMenu} className="block cursor-pointer">Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth duration={500} offset={-60} onClick={closeMenu} className="block cursor-pointer">About</ScrollLink></li>
            <li><ScrollLink to="projects" smooth duration={500} offset={-60} onClick={closeMenu} className="block cursor-pointer">Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={500} offset={-60} onClick={closeMenu} className="block cursor-pointer">Contact</ScrollLink></li>
            <li><ScrollLink to="services" smooth duration={500} offset={-60} onClick={closeMenu} className="block cursor-pointer">Services</ScrollLink></li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;