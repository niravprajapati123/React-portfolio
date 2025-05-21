import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Nirav Portfolio</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nirav Kumar. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-orange-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-300">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/niravprajapati123" target="_blank" rel="noreferrer" className="hover:text-orange-400">GitHub</a>
            <a href="https://www.linkedin.com/in/nirav-prajapati-4b6896286/" target="_blank" rel="noreferrer" className="hover:text-orange-400">LinkedIn</a>
            <a href="mailto:youremail@example.com" className="hover:text-orange-400">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
