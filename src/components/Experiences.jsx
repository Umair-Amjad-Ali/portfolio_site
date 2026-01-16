import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight, FaJs, FaReact, FaMobileAlt, FaDownload, FaRocket, FaBriefcase } from "react-icons/fa";
import { experiences } from "../constants";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="paddingX max-w-7xl mx-auto py-24 relative" id="experience">
      {/* Background Ambience */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 text-left"
      >
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Career Path
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Professional <span className="gradient-text-vibrant">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          My journey in software engineering, maneuvering through complex challenges to deliver scalable, high-impact solutions.
        </p>
      </motion.div>

      {/* Interactive Command Center Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">

        {/* Navigation Rail (Desktop) / Horizontal Scroll (Mobile) */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-4 pb-4 md:pb-0 scrollbar-hide">
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 min-w-[280px] md:min-w-0 text-left relative overflow-hidden ${activeTab === index
                    ? "bg-slate-800/80 border-indigo-500/50 shadow-lg shadow-indigo-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"
                  }`}
              >
                {/* Active Indicator Line */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r"
                  />
                )}

                {/* Company Logo */}
                <div className={`relative h-12 w-12 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${activeTab === index ? "bg-slate-900 border border-indigo-500/30" : "bg-slate-950 border border-slate-800"
                  }`}>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Tab Text */}
                <div className="flex-1 min-w-0">
                  <h4 className={`text-base font-bold transition-colors duration-300 ${activeTab === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                    }`}>
                    {experience.company_name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {experience.title}
                  </p>
                </div>

                {/* Arrow Icon (Visible on Active/Hover) */}
                <FaChevronRight className={`w-3 h-3 transition-all duration-300 ${activeTab === index ? "text-indigo-400 opacity-100 translate-x-0" : "text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                  }`} />
              </button>
            ))}
          </div>

          {/* Career Snapshot Card (New Addition) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 relative overflow-hidden group"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <FaRocket className="text-indigo-500" /> Career Snapshot
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">Experience</div>
                  <div className="text-white text-2xl font-bold">2+ <span className="text-sm text-slate-500 font-normal">Years</span></div>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">Projects</div>
                  <div className="text-white text-2xl font-bold">10+ <span className="text-sm text-slate-500 font-normal">Completed</span></div>
                </div>
              </div>

              <button className="w-full group/btn relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume <FaDownload size={14} />
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Detail Stage */}
        <div className="md:w-2/3 relative">
          <motion.div
            layout
            transition={{ duration: 0.3 }}
            className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden"
          >
            {/* Decorative Spotlight Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8"
              >
                {/* Header Content */}
                <div className="relative mb-8 border-b border-slate-800 pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {experiences[activeTab].title}
                      </h3>
                      <div className="text-indigo-400 font-semibold text-lg flex items-center gap-2">
                        {experiences[activeTab].company_name}
                        <span className="text-slate-700 mx-1">•</span>
                        <span className="text-sm font-normal text-slate-400 flex items-center gap-1.5">
                          <FaMapMarkerAlt size={12} />
                          {experiences[activeTab].location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-sm font-medium text-slate-300 whitespace-nowrap">
                      <FaCalendarAlt className="text-indigo-500" />
                      {experiences[activeTab].date}
                    </div>
                  </div>
                </div>

                {/* Experience Points */}
                <div className="mb-8 relative z-10">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-4">
                    {experiences[activeTab].points.map((point, i) => {
                      const hasColon = point.includes(':');
                      const parts = hasColon ? point.split(':') : [point];
                      const title = hasColon ? parts[0] + ':' : '';
                      const description = hasColon ? parts.slice(1).join(':') : point;

                      return (
                        <li key={i} className="flex gap-4 text-slate-300 text-[15px] leading-relaxed group">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300"></span>
                          <span>
                            {hasColon && (
                              <span className="font-semibold text-white mr-1.5 border-b border-indigo-500/30 pb-0.5">
                                {title}
                              </span>
                            )}
                            {description}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(experiences[activeTab].company_name === "SynticAI"
                      ? ["Flutter", "Firebase", "Next.js", "Node.js", "MongoDB"]
                      : ["React.js", "Next.js", "Tailwind CSS", "Figma"]
                    ).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-950 border border-slate-700/50 rounded-lg text-xs font-medium text-indigo-300 hover:border-indigo-500/50 hover:bg-slate-900 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
