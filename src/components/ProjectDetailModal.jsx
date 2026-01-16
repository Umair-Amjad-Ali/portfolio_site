import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoCheckmarkCircle, IoRocket, IoWarning } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsGearFill, BsLightningChargeFill } from "react-icons/bs";
import { RiToolsFill } from "react-icons/ri";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-[#0a0e27] border border-indigo-500/30 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_120px_rgba(99,102,241,0.15)]"
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Border Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] rounded-[26px] -z-10 blur-lg opacity-40" />

                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <IoClose size={24} />
                            </motion.button>

                            {/* Scrollable Content */}
                            <div
                                className="overflow-y-auto max-h-[95vh] overscroll-contain scrollbar-thin scrollbar-track-slate-900/50 scrollbar-thumb-indigo-500/40"
                                style={{ scrollbarGutter: "stable" }}
                            >
                                {/* Hero Section */}
                                <div className="relative h-56 md:h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/60 to-transparent" />

                                    {/* Floating Status Badge */}
                                    <motion.div
                                        className="absolute top-4 left-4"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-[20px] text-[13px] font-semibold backdrop-blur-xl ${project.status === "current"
                                                ? "bg-green-500/20 border border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                                : "bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                                }`}
                                        >
                                            {project.status === "current" ? (
                                                <>
                                                    <IoRocket className="animate-pulse" /> In Progress
                                                </>
                                            ) : (
                                                <>
                                                    <IoCheckmarkCircle /> Completed
                                                </>
                                            )}
                                        </span>
                                    </motion.div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <motion.h2
                                            className="text-3xl md:text-4xl font-bold text-white mb-1"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {project.name}
                                        </motion.h2>
                                        <motion.p
                                            className="text-lg md:text-xl text-indigo-300 font-medium"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {project.subtitle}
                                        </motion.p>
                                        <motion.p
                                            className="text-gray-400 mt-1"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {project.dateRange}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 md:p-8 bg-[#0a0e27]">
                                    {/* Tech Stack */}
                                    <motion.div
                                        className="mb-8"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                    >
                                        <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white mb-4">
                                            <BsGearFill className="text-cyan-400" />
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack?.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block px-3.5 py-2 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/25 rounded-lg text-purple-200 text-sm font-medium transition-all duration-300 hover:from-indigo-500/25 hover:to-purple-500/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(99,102,241,0.2)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Problem & Solution */}
                                    <motion.div
                                        className="grid md:grid-cols-2 gap-5 mb-8"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15, duration: 0.3 }}
                                    >
                                        {/* Problem Card */}
                                        <div className="relative p-6 bg-slate-900/50 border border-amber-400/20 rounded-2xl overflow-hidden">
                                            <div className="w-11 h-11 flex items-center justify-center bg-amber-400/15 text-amber-400 rounded-xl mb-3.5">
                                                <HiLightBulb size={24} />
                                            </div>
                                            <h3 className="text-base font-semibold text-white mb-2.5">The Problem</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                                        </div>
                                        {/* Solution Card */}
                                        <div className="relative p-6 bg-slate-900/50 border border-green-500/20 rounded-2xl overflow-hidden">
                                            <div className="w-11 h-11 flex items-center justify-center bg-green-500/15 text-green-500 rounded-xl mb-3.5">
                                                <IoRocket size={24} />
                                            </div>
                                            <h3 className="text-base font-semibold text-white mb-2.5">The Solution</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                                        </div>
                                    </motion.div>

                                    {/* Challenges Faced */}
                                    {project.challenges && project.challenges.length > 0 && (
                                        <motion.div
                                            className="mb-8"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                        >
                                            <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white mb-4">
                                                <IoWarning className="text-amber-400" />
                                                Challenges & Solutions
                                            </h3>
                                            <div className="space-y-4">
                                                {project.challenges.map((challenge, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-slate-900/40 border border-amber-400/15 border-l-[3px] border-l-amber-500 rounded-xl p-5 transition-all duration-300 hover:bg-slate-900/60 hover:border-amber-400/30"
                                                    >
                                                        <div className="flex items-center gap-2.5 mb-4">
                                                            <BsLightningChargeFill className="text-amber-400" />
                                                            <h4 className="text-[15px] font-semibold text-white">{challenge.title}</h4>
                                                        </div>
                                                        <div className="flex flex-col gap-4">
                                                            <div className="text-sm text-gray-400 leading-relaxed">
                                                                <span className="block text-[11px] font-semibold text-amber-500 uppercase mb-2">
                                                                    Problem:
                                                                </span>
                                                                <p className="pl-0">{challenge.description}</p>
                                                            </div>
                                                            <div className="text-sm text-gray-400 leading-relaxed">
                                                                <span className="flex items-center gap-1 text-[11px] font-semibold text-green-500 uppercase mb-2">
                                                                    <RiToolsFill /> Solution:
                                                                </span>
                                                                <p className="pl-0">{challenge.solution}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Key Features */}
                                    <motion.div
                                        className="mb-8"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25, duration: 0.3 }}
                                    >
                                        <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white mb-4">
                                            <IoCheckmarkCircle className="text-emerald-400" />
                                            Key Features
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {project.features?.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-2.5 px-3.5 py-3 bg-slate-900/35 border border-green-500/10 rounded-xl transition-all duration-300 hover:bg-green-500/8 hover:border-green-500/20"
                                                >
                                                    <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center bg-green-500/20 text-green-500 rounded-full text-[10px] font-bold">
                                                        ✓
                                                    </span>
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <motion.div
                                        className="flex flex-wrap gap-4 pt-4 border-t border-white/10"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                    >
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900/60 border border-indigo-500/30 rounded-xl text-purple-200 text-sm font-medium no-underline transition-all duration-300 cursor-pointer hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                                            >
                                                <FaGithub size={18} />
                                                View Source Code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white text-sm font-medium no-underline transition-all duration-300 cursor-pointer hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)] hover:-translate-y-0.5"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                        {!project.github && !project.link && (
                                            <span className="text-gray-500 text-sm italic">
                                                Links coming soon...
                                            </span>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
