import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye, FaMobileAlt, FaLaptopCode, FaGlobe, FaDatabase } from "react-icons/fa";
import ProjectDetailModal from "./ProjectDetailModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="paddingX w-full py-14 bg-[#0a0e27]"
      id="work"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
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
          <h2 className="sm:text-4xl text-3xl font-semibold sm:leading-snug text-white mb-3 flex items-center gap-2">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-semibold drop-shadow-sm">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Showcasing my recent work in mobile apps, web platforms, and AI
            solutions.
          </p>
        </motion.div>

        {/* Projects Grid - Compact 4 Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-slate-900/70 backdrop-blur-xl border border-indigo-500/15 rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.1)] group cursor-pointer"
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image */}
              <div className="relative h-32 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xl text-[10px] font-semibold backdrop-blur-lg ${project.status === "current"
                      ? "bg-green-500/20 border border-green-500/40 text-green-400"
                      : "bg-indigo-500/20 border border-indigo-500/40 text-indigo-300"
                      }`}
                  >
                    {project.status === "current" ? (
                      <IoRocket className="inline" size={10} />
                    ) : (
                      "✓"
                    )}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-indigo-400/80 text-xs mb-2 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack?.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-1.5 py-0.5 bg-indigo-500/12 border border-indigo-500/20 rounded text-indigo-300 text-[9px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack?.length > 2 && (
                    <span className="inline-block px-1.5 py-0.5 bg-purple-500/12 border border-purple-500/20 rounded text-purple-300 text-[9px] font-medium">
                      +{project.techStack.length - 2}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center gap-1 text-indigo-400 text-xs font-medium group-hover:text-indigo-300 transition-colors">
                  <FaEye size={10} />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white text-base font-semibold no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(102,126,234,0.5)] hover:no-underline"
          >
            View All Projects
            <FaArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* <hr className="border-slate-700 mt-16" /> */}
      </div>
    </section>
  );
};

export default Projects;
