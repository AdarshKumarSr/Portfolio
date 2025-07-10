import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import VisitorCountInline from './visit';

const Footer = () => {
  return (
    <footer className="mt-24 bg-white text-gray-800 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Name & tagline */}
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h4 className="text-xl font-semibold">Adarsh Srivastava</h4>
          <p className="text-sm text-gray-500">Crafting code & building dreams ✨</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/AdarshKumarSr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-srivastava-39a58b284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/adarsh_2348/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Adarsh Srivastava. Built with ❤️ & React.
      </div>
      <VisitorCountInline/>
    </footer>
  );
};

export default Footer;
