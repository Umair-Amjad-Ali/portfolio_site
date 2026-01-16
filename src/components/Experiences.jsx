import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-all duration-300">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">
          <div className="flex items-start gap-5">
            {/* Company Icon */}
            <div className="relative shrink-0">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-9 h-9 object-contain"
                />
              </div>
            </div>

            {/* Title & Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {experience.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <span className="text-indigo-300 font-semibold text-base">
                  {experience.company_name}
                </span>
                <span className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <FaMapMarkerAlt size={12} className="text-gray-500" />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          {/* Date Badge */}
          <div className="shrink-0 self-start md:self-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 whitespace-nowrap group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-300 transition-colors duration-300">
              <FaCalendarAlt size={12} />
              {experience.date}
            </span>
          </div>
        </div>

        {/* Content Points */}
        <ul className="space-y-4 mb-6">
          {experience.points.map((point, i) => {
            const hasColon = point.includes(':');
            const parts = hasColon ? point.split(':') : [point];
            const title = hasColon ? parts[0] + ':' : '';
            const description = hasColon ? parts.slice(1).join(':') : point;

            return (
              <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed text-[15px]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0 group-hover:bg-indigo-400 transition-colors"></span>
                <span>
                  {hasColon && (
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse mr-1">
                      {title}
                    </span>
                  )}
                  {description}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {experience.company_name === "SynticAI" ? (
            <>
              {["Flutter", "Firebase", "Next.js", "Node.js", "MongoDB"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-medium text-indigo-300 hover:bg-indigo-500/20 transition-colors">
                  {tech}
                </span>
              ))}
            </>
          ) : (
            <>
              {["React.js", "Next.js", "Tailwind CSS", "Figma"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-300 hover:bg-purple-500/20 transition-colors">
                  {tech}
                </span>
              ))}
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
      className="paddingX max-w-7xl mx-auto py-24 relative"
      id="experience"
    >
      {/* Background Ambience */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 text-left"
      >
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Career Path
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Professional <span className="gradient-text-vibrant">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          My journey in software engineering, building scalable applications and delivering impactful solutions.
        </p>
      </motion.div>

      {/* Card Grid/List Container */}
      <div className="flex flex-col gap-8 md:gap-12 relative z-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
