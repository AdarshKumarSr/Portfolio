import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FolderGit2,
  BriefcaseBusiness,
  Github,
  FileText,
} from 'lucide-react';
import DarkMode from './darkMode'; // <-- Import DarkMode component

const App = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    if (currentPath === '/' || currentPath.includes('home')) {
      setActiveLink('Home');
    } else if (currentPath.includes('projects')) {
      setActiveLink('Projects');
    } else if (currentPath.includes('experience')) {
      setActiveLink('Experience');
    } else if (currentPath.includes('contact')) {
      setActiveLink('Contact');
    } else {
      setActiveLink('');
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between p-3 bg-gray-900 text-white rounded-full shadow-lg max-w-4xl mx-auto my-6">
      {/* Left-aligned Navigation Links */}
      <div className="flex justify-start space-x-6 text-sm font-medium ml-4">
        <Link
          to="/"
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-200 ${
            activeLink === 'Home' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Home size={18} />
          <span>Home</span>
        </Link>

        <Link
          to="/projects"
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-200 ${
            activeLink === 'Projects' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <FolderGit2 size={18} />
          <span>Projects</span>
        </Link>

        <Link
          to="/experience"
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-200 ${
            activeLink === 'Experience' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <BriefcaseBusiness size={18} />
          <span>Experience</span>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-3 mr-4">
        <a
          href="https://github.com/AdarshKumarSr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github size={20} className="cursor-pointer hover:text-gray-400 transition-colors duration-200" />
        </a>

        <a
          href="https://leetcode.com/u/adarshkumar24/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode Profile"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-70 transition-opacity duration-200"
          />
        </a>

        <a
          href="/Adarsh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FileText size={20} />
        </a>

        <Link
          to="/contact"
          className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors duration-200 ${
            activeLink === 'Contact'
              ? 'bg-gray-700 text-white'
              : 'bg-white text-gray-800 hover:bg-gray-200'
          }`}
        >
          Contact
        </Link>

        {/* Dark Mode Toggle Button */}
        <DarkMode /> {/* <-- Add the toggle here */}
      </div>
    </nav>
  );
};

export default App;
