import React from 'react';
// Import necessary icons from local file
import { TriangleUp, Graph, Ellipsis, Github, Branch } from './Icons';

// Helper to choose the icon based on type - NOW USING LOCAL SVGs
const ProjectIcon = ({ type }) => {
  const commonClass = "w-5 h-5"; // Adjusted size

  switch (type) {
    case 'filled':
      // Filled triangle using SVG fill property
      return <TriangleUp className={commonClass} fill="black" stroke="black" />;
    case 'dotted':
      // Simulate dotted triangle with SVG properties (stroke-dasharray)
      return (
        <svg className={commonClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" strokeDasharray="2 2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" transform="scale(1, -1) translate(0, -24)" /> {/* Flipping the Heroicons triangle */}
        </svg>
      );
    case 'outline':
    default:
      // Outline triangle (default SVG)
      return <TriangleUp className={commonClass} fill="none" stroke="currentColor" />;
  }
};


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-vercel-card hover:shadow-vercel-card-hover transition-shadow duration-150 ease-in-out">
      <div className="p-4">
        {/* Top Row: Icon, Name, URL, Actions */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-3">
             <ProjectIcon type={project.iconType} />
            <div>
              <h3 className="text-sm font-medium text-gray-900 truncate">{project.name}</h3>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 truncate block">{project.url}</a>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <button className="p-1 rounded hover:bg-gray-100">
              <Graph /> {/* Use local icon */}
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <Ellipsis /> {/* Use local icon */}
            </button>
          </div>
        </div>

        {/* Repo Link */}
        <div className="mb-3">
          <a href="#" className="inline-flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-xs font-medium text-gray-700">
            <Github /> {/* Use local icon */}
            <span>{project.repo}</span>
          </a>
        </div>

        {/* Commit Info */}
        <div>
          <p className="text-sm text-gray-800 truncate mb-1">{project.commitMessage}</p>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>{project.lastUpdate}</span>
            <span>on</span>
            <Branch className="inline-block align-middle text-gray-400" /> {/* Use local icon */}
            <span>{project.branch}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;