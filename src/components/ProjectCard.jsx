// A grid layout mapping through a centralized JSON data file containing your project metadata, tech stack badges, and links.

import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 h-16 overflow-hidden">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 text-sm font-medium">
        <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-900">
          {/*<Code size={16} className="mr-1" /> Code*/}
        </a>
        <a href={project.live} className="flex items-center text-blue-600 hover:text-blue-800">
          {/*<ExternalLink size={16} className="mr-1" /> Live Demo*/}
        </a>
      </div>
    </div>
  );
}