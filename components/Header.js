import React from 'react';
// Import the icons from your local Icons.js file
import { VercelLogo, TriangleDown, Bell, Feedback, ChevronDown } from './Icons';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <VercelLogo />
            <span className="text-gray-300">/</span>
            <div className="flex items-center space-x-2">
              {/* Placeholder avatar */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
              <span className="font-medium text-sm">faraaz's projects</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">Hobby</span>
              <button className="text-gray-400 hover:text-gray-600">
                <TriangleDown /> {/* Use local icon */}
              </button>
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <nav className="hidden md:flex space-x-6">
             <a href="#" className="text-sm font-medium text-gray-900 border-b-2 border-black pb-1">Overview</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Integrations</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Activity</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Domains</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Usage</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Monitoring</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Observability</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Storage</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Flags</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">AI</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Support</a>
             <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Settings</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Feedback className="mr-1.5 -ml-0.5 h-4 w-4"/> {/* Use local icon */}
              Feedback
            </button>
            <a href="#" className="hidden lg:inline-block text-sm font-medium text-gray-500 hover:text-gray-900">Changelog</a>
            <a href="#" className="hidden lg:inline-block text-sm font-medium text-gray-500 hover:text-gray-900">Help</a>
            <a href="#" className="hidden lg:inline-block text-sm font-medium text-gray-500 hover:text-gray-900">Docs</a>
            <button className="relative p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white"></span>
              <Bell /> {/* Use local icon */}
            </button>
             {/* User Avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;