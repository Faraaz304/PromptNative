"use client"
import Head from 'next/head';
import { useState } from 'react'; // Import useState
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import AddNewProjectModal from '../../components/AddNewProjectModal'; // Import the modal
import { Search, ChevronDown, Grid, List, Add } from '../../components/Icons'; // Assuming Icons.js exists

// Sample Data (same as before)
const projectsData = [
  // ... your project data
  { id: 1, iconType: 'outline', name: 'placement-management-system-backe...', url: 'placement-management-system-backe...', repo: 'Faraaz304/Placement-Management-System', commitMessage: 'created uploading function', lastUpdate: 'Jan 25', branch: 'main' },
  { id: 2, iconType: 'filled', name: 'placement-management-system', url: 'placement-management-system-wine.v...', repo: 'Faraaz304/Placement-Management-System', commitMessage: 'change forntened', lastUpdate: 'Jan 25', branch: 'main' },
  // ... etc
];

export default function Home() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div>
      <Head>
        <title>Overview – Faraaz's Projects – Vercel</title>
        <meta name="description" content="Vercel UI Clone Overview" />
      </Head>

      <Header />

      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Controls Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          {/* Search Input */}
          <div className="relative flex-grow sm:flex-grow-0 sm:w-72 md:w-96">
            {/* ... search input code ... */}
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Repositories and Projects..."
              className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                 ⌘ K
                </kbd>
            </div>
          </div>

          {/* Sorting and View Controls */}
          <div className="flex items-center space-x-2">
            {/* Sort Dropdown */}
             <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
               <span>Sort by activity</span>
               <ChevronDown />
             </button>

             {/* View Toggle */}
             <div className="flex items-center border border-gray-300 rounded-md">
                <button className="p-2 bg-gray-100 text-gray-700 rounded-l-md border-r border-gray-300">
                    <Grid />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 rounded-r-md">
                    <List />
                </button>
             </div>

             {/* Add New Button - UPDATED onClick */}
             <button
                onClick={openModal} // Call openModal when clicked
                className="flex items-center space-x-1 px-4 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
             >
               <span>Add New...</span>
               <ChevronDown />
             </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Render the modal conditionally */}
      <AddNewProjectModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}