import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import VisitorCountInline from './visit';

const Footer = () => {
  return (
    <footer
      className="mt-12"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left: Name & tagline */}
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h4 className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
            Adarsh Srivastava
          </h4>
          <p className="text-xs" style={{ color: 'var(--link-text)' }}>
            Never Duck a Fade
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/AdarshKumarSr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--link-text)' }}
            className="hover:opacity-70 transition-opacity duration-200"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-srivastava-39a58b284/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0A66C2' }} // LinkedIn official color
            className="hover:opacity-70 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/adarsh3e8/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#E1306C' }} // Instagram official color
            className="hover:opacity-70 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <SiInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center py-2 text-xs" style={{ color: 'var(--link-text)' }}>
        © {new Date().getFullYear()} Adarsh Srivastava · Built with ❤️ & React
      </div>

      <VisitorCountInline />
    </footer>
  );
};

export default Footer;
