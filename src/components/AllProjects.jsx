import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, additionalProjects } from "../constants";
import { IoRocket } from "react-icons/io5";
import { FaArrowLeft, FaEye, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import ProjectDetailModal from "./ProjectDetailModal";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const allProjects = [...projects, ...additionalProjects];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] pt-32 pb-12 px-6 sm:px-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-indigo-400 hover:text-indigo-300 mb-8 transition-all group backdrop-blur-sm"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <FaLaptopCode />
              <span>Full-Stack Systems</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
              <FaMobileAlt />
              <span>Mobile-First</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A complete collection of my work — from AI-powered apps to
            full-stack web platforms. Each project showcases different skills
            and problem-solving approaches.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/12 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/35 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] group"
              variants={cardVariants}
            >
              {/* Card Image */}
              <div className="relative h-36 overflow-hidden rounded-t-xl">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-2 left-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xl text-[10px] font-semibold backdrop-blur-lg ${project.status === "current"
                        ? "bg-green-500/20 border border-green-500/40 text-green-400"
                        : "bg-indigo-500/20 border border-indigo-500/40 text-indigo-300"
                        }`}
                    >
                      {project.status === "current" ? (
                        <>
                          <IoRocket className="inline" /> Active
                        </>
                      ) : (
                        "Done"
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors truncate">
                  {project.name}
                </h3>
                {project.subtitle && (
                  <p className="text-indigo-400 text-xs font-medium mb-2 truncate">
                    {project.subtitle}
                  </p>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack?.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-1.5 py-0.5 bg-indigo-500/12 border border-indigo-500/20 rounded text-indigo-300 text-[9px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack?.length > 3 && (
                    <span className="inline-block px-1.5 py-0.5 bg-purple-500/12 border border-purple-500/20 rounded text-purple-300 text-[9px] font-medium">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center justify-center gap-1.5 w-full px-3.5 py-2 bg-indigo-500/15 border border-indigo-500/30 rounded-lg text-indigo-300 text-xs font-medium cursor-pointer transition-all duration-300 hover:bg-indigo-500/25 hover:border-indigo-500/50"
                >
                  <FaEye size={12} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default AllProjects;
