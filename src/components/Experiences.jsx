import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode, FaMobile, FaDatabase, FaCloud, FaGitAlt } from "react-icons/fa";

import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="experience-card group mb-8"
    >
      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Header */}
        <div className="relative flex flex-col md:flex-row md:items-start gap-4 mb-6">
          {/* Company Icon with glow */}
          <div className="relative">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg relative z-10"
              style={{ background: experience.iconBg }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-10 h-10 object-contain"
              />
            </div>
            {/* Glow behind icon */}
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-50"
              style={{ background: experience.iconBg }}
            ></div>
          </div>

          {/* Title & Company Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-indigo-400 font-semibold text-lg">
                {experience.company_name}
              </span>
              {experience.location && (
                <span className="flex items-center gap-1.5 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                  <FaMapMarkerAlt className="text-indigo-400" />
                  {experience.location}
                </span>
              )}
            </div>
          </div>

          {/* Date Badge */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <FaCalendarAlt />
            {experience.date}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

        {/* Points Grid */}
        <div className="relative grid gap-2">
          {experience.points.map((point, pointIndex) => {
            const [title, ...descParts] = point.split(":");
            const description = descParts.join(":");

            return (
              <motion.div
                key={pointIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + pointIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 py-2 px-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
              >
                <div className="w-2 h-2 mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <div className="text-sm leading-relaxed">
                  {description ? (
                    <>
                      <span className="text-indigo-400 font-semibold">{title}:</span>
                      <span className="text-gray-300">{description}</span>
                    </>
                  ) : (
                    <span className="text-gray-300">{point}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.company_name === "SynticAI" ? (
            <>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">Flutter</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">Firebase</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Next.js</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Node.js</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">MongoDB</span>
            </>
          ) : (
            <>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React.js</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">Next.js</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">Figma</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <section
      className="paddingX max-w-7xl mx-auto mb-16 dark-background py-20"
      id="experience"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Work <span className="gradient-text-vibrant">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          My professional journey building innovative mobile and web applications,
          collaborating with talented teams across Pakistan.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
