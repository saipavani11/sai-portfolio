import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; 
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="text-lg text-gray-400 mb-8">Sorry, we couldn't find the project you're looking for.</p>
        <Link
          to="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-all"
        >
          <FiArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle Back Link */}
      <motion.div className="absolute top-6 left-6 md:top-10 md:left-10 z-20" variants={itemVariants}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm md:text-base transition-colors"
        >
          <FiArrowLeft /> Back
        </Link>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Project Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-[#e9c136]"
          variants={itemVariants}
        >
          {project.title}
        </motion.h1>

        {/* Image + Technologies/Links Side by Side */}
        <motion.div className="flex flex-col md:flex-row gap-12" variants={itemVariants}>
          {/* Left: Project Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="md:w-2/3 rounded-xl shadow-2xl transition-transform duration-500"
          />

          {/* Right: Technologies + Links */}
          <motion.div className="md:w-1/3 flex flex-col gap-6">
            <div className="bg-gray-900/70 p-6 rounded-xl border border-purple-700/40 backdrop-blur-md shadow-lg space-y-6">
              <h3 className="text-xl font-semibold text-purple-300">Technologies Used</h3>
              <ul className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-purple-800/30 text-purple-200 text-sm rounded-full backdrop-blur-sm shadow-sm hover:bg-purple-700/40 transition-all"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-purple-300">Links</h3>
              <div className="flex flex-col gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all shadow-md"
                  >
                    <FaGithub /> GitHub Repository
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-md"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-purple-400">About the Project</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
