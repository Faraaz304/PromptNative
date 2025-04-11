import React from 'react';
// Assuming these are SVG components correctly exported from './Icons'
import { TriangleUp, Graph, Ellipsis, Github, Branch } from './Icons';

// Helper to choose the icon based on type
const ProjectIcon = ({ type }) => {
    // Using a slightly larger default size for better visual weight
    const commonClass = "w-6 h-6 text-gray-800 dark:text-gray-200";

    switch (type) {
        case 'filled':
            // Use fill="currentColor" to inherit color from commonClass
            return <TriangleUp className={commonClass} fill="currentColor" stroke="currentColor" />;
        case 'dotted':
            // Ensure stroke inherits color, use a slightly thicker stroke maybe?
            return (
                <svg className={commonClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" strokeDasharray="2 2">
                    {/* Adjusted path for potentially better rendering */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l7.5 15H4.5L12 4.5z" />
                </svg>
            );
        case 'outline':
        default:
            // Ensure fill is none and stroke inherits color
            return <TriangleUp className={commonClass} fill="none" stroke="currentColor" />;
    }
};


const ProjectCard = ({ project }) => {
    // Default project data for safety, in case props are missing
    const safeProject = {
        iconType: 'outline',
        name: 'Unknown Project',
        url: '#',
        repo: 'unknown/repo',
        commitMessage: 'No commit message available.',
        lastUpdate: 'N/A',
        branch: 'main',
        ...project // Spread the actual project data, overwriting defaults
    };

    return (
        <div className="
            group // Add group for hover effects on children
            bg-white dark:bg-gray-800/50 // Slightly transparent dark bg
            border border-gray-200 dark:border-gray-700/50
            hover:shadow-md // Use standard shadows, or keep custom ones if defined
            duration-150 ease-in-out // transition for shadow and potential bg changes
            overflow-hidden // Ensures content respects rounded corners
        ">
            <div className="p-5"> {/* Slightly increased padding */}
                {/* Top Row: Icon, Name, URL, Actions */}
                <div className="flex justify-between items-start mb-4"> {/* Increased margin-bottom */}
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0"> {/* Prevent icon shrinking */}
                           <ProjectIcon type={safeProject.iconType} />
                        </div>
                        <div className="min-w-0 flex-1"> {/* Allow text to truncate */}
                            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                                {safeProject.name}
                            </h3>
                            
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-500 flex-shrink-0 ml-2"> {/* Prevent shrinking, add margin */}
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                            <span className="sr-only">View Activity</span>
                            <Graph className="w-5 h-5" />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150">
                             <span className="sr-only">More Options</span>
                            <Ellipsis className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Repo Link */}
                <div className="mb-4"> {/* Increased margin-bottom */}
                    
                        <span>{safeProject.repo}</span>
                </div>

                {/* Commit Info */}
                <div className="space-y-1.5"> {/* Add space between commit message and details */}
                     <p className="text-sm text-gray-700 dark:text-gray-300 truncate leading-snug" title={safeProject.commitMessage}>
                        {safeProject.commitMessage}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex-shrink-0">{safeProject.lastUpdate}</span>
                        <span>on</span>
                        <Branch className="w-3.5 h-3.5 inline-block align-middle text-gray-400 dark:text-gray-500" />
                        {/* Use font-mono for branch name if desired */}
                        <span className="truncate font-mono">{safeProject.branch}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;