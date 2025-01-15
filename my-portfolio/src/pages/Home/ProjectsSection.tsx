// src/pages/Home/ProjectsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: '/assets/images/project1.png', // Ensure you have this image
    projectUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.live', // Optional: link to live demo
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: '/assets/images/project2.png',
    projectUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.live',
  },
  // Add more projects as needed
];

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  liveUrl?: string;
}

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
