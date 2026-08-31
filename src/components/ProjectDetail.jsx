import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';
import Navbar from './Navbar';
import Contact from './Contact';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" } 
    );

    project?.stages.forEach((stage) => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) return <div className="p-20 text-center text-2xl">Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Reuse the global Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 w-full flex-grow">
        
        {/* Interactive Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Process Stages</h3>
            <ul className="space-y-3 border-l-2 border-gray-200">
              {project.stages.map((stage) => (
                <li key={stage.id}>
                  <a
                    href={`#${stage.id}`}
                    className={`block pl-4 py-1 border-l-2 -ml-[2px] transition-colors ${
                      activeSection === stage.id
                        ? "border-blue-600 text-blue-600 font-semibold"
                        : "border-transparent text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {stage.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow max-w-3xl bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          
          {/* 2. Centralized Back Button */}
          <div className="mb-10">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors bg-gray-100 hover:bg-blue-50 px-4 py-2 rounded-md"
            >
              <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
            </Link>
          </div>

          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            
            {/* Project Links (GitHub / Live) moved next to the title */}
            <div className="flex space-x-3">
              <a href={project.github} title="View Source" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* <a href={project.live} title="Live Demo" className="text-blue-500 hover:text-blue-700 transition-colors">
                <ExternalLink size={24} />
              </a> */}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-24">
            {project.stages.map((stage) => (
              <section id={stage.id} key={stage.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {stage.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {stage.content}
                </p>
              </section>
            ))}
          </div>
        </main>
      </div>

      {/* 3. Reuse the global Footer */}
      <Contact />
    </div>
  );
}