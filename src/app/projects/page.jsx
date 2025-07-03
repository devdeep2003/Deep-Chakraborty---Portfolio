import React from 'react';
import { projectData } from '../static/projects';


const Projects = () => {
  return (
    <div className="mx-10 my-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;


const ProjectCard = ({ name, description, technologies, link, year }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-700">
      <h2 className="text-2xl font-bold text-blue-500 mb-2">{name}</h2>

      <p className="text-base leading-relaxed mb-4">{description}</p>

      {technologies && (
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-blue-400 mb-1">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2 text-sm">
            {technologies.map((tech, idx) => (
              <li
                key={idx}
                className="bg-blue-700 text-white px-2 py-1 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit Project →
          </a>
        )}
        {year && <span className="text-sm text-gray-400">{year}</span>}
      </div>
    </div>
  );
};




