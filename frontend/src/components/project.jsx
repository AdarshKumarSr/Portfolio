import React from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder.jsx';
import { FaGithub } from 'react-icons/fa';

const Project = ({
  title,
  description,
  color = '#5227FF',
  papers = [],
  status = 'Live',
  timeline = '2024 – Present',
  github
}) => {
  // Split the title at the first dash
  const [highlight, ...rest] = title.split('–');
  const restTitle = rest.join('–').trim();

  return (
    <div
      className="mb-10 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start justify-between"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      {/* Left: Title, Description, GitHub */}
      <div className="w-full md:w-2/3 md:pr-6">
        <h2 className="text-2xl font-bold mb-2">
          <span style={{ color: color, fontWeight: 'bold' }} className="mr-1">
            {highlight.trim()} –
          </span>
          <span style={{ color: 'var(--text-color)' }}>{restTitle}</span>
        </h2>

        <p className="mb-2" style={{ color: 'var(--text-color)' }}>
          {description}
        </p>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project on GitHub"
            className="inline-flex items-center font-medium mb-4"
            style={{ color: '#0366d6' }}
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        )}
      </div>

      {/* Right: Status Badge + Folder */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-6 md:mt-0">
        <span
          className="mb-4 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: color, color: 'var(--text-color)' }}
        >
          {status} • {timeline}
        </span>
        <Folder color={color} items={papers} size={1} />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  papers: PropTypes.array,
  status: PropTypes.string,
  timeline: PropTypes.string,
  github: PropTypes.string
};

export default Project;
