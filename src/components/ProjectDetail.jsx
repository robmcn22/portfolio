import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projectsData";
import LinearProcessLayout from "./layouts/LinearProcessLayout";
import DashboardLayout from "./layouts/DashboardLayout";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return <div className="p-20 text-center text-2xl">Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Shared Header */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full grow">
        {/* Title & Badges */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Layout Router */}
        {project.layoutType === "linear" && (
          <LinearProcessLayout stages={project.stages} />
        )}

        {project.layoutType === "dashboard" && (
          <DashboardLayout dashboardData={project.dashboardData} />
        )}
      </div>
    </div>
  );
}
