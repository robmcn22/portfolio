// A grid layout mapping through a centralized JSON data file containing your project metadata, tech stack badges, and links.

import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}