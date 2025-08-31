import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="w-full aspect-[16/9] bg-gray-200 flex items-center justify-center">
          <img
            src={project.image || "/fallback.jpg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
