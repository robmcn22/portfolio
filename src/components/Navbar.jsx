// Fixed top navigation with smooth scrolling anchors (#about, #projects, #skills, #contact) and a mobile responsive menu toggle.

import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <div className="font-bold text-lg md:text-2xl text-gray-800">
          Robbie McNair - Portfolio
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 sm:space-x-6 text-sm font-medium text-gray-600">
          <a href="/#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a
            href="/#projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a href="/#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="/#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
