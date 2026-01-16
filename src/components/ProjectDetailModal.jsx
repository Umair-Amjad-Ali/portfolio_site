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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 pointer-events-none">
                        <motion.div
                            className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl pointer-events-auto"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
                            >
                                <IoClose size={22} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto max-h-[95vh] overscroll-contain">
                                {/* Hero Section */}
                                <div className="relative h-64 md:h-80 w-full shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${project.status === "current"
                                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
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
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                            {project.name}
                                        </h2>
                                        <p className="text-lg text-indigo-300 font-medium mb-1">
                                            {project.subtitle}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {project.dateRange}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 md:p-8 space-y-8 bg-slate-900">
                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                            <BsGearFill className="text-indigo-400" />
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack?.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-indigo-300 text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Problem & Solution */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                                            <div className="flex items-center gap-2 mb-3 text-amber-400">
                                                <HiLightBulb size={20} />
                                                <h3 className="font-semibold text-white">The Problem</h3>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                                            <div className="flex items-center gap-2 mb-3 text-green-400">
                                                <IoRocket size={20} />
                                                <h3 className="font-semibold text-white">The Solution</h3>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Challenges */}
                                    {project.challenges && project.challenges.length > 0 && (
                                        <div>
                                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                                <IoWarning className="text-amber-400" />
                                                Challenges & Solutions
                                            </h3>
                                            <div className="space-y-4">
                                                {project.challenges.map((challenge, index) => (
                                                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                                        <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                                                            <BsLightningChargeFill className="text-yellow-400 text-sm" />
                                                            {challenge.title}
                                                        </h4>
                                                        <div className="space-y-3">
                                                            <div>
                                                                <span className="text-xs font-bold text-red-400 uppercase tracking-wide">Problem</span>
                                                                <p className="text-gray-400 text-sm mt-1">{challenge.description}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs font-bold text-green-400 uppercase tracking-wide">Solution</span>
                                                                <p className="text-gray-400 text-sm mt-1">{challenge.solution}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Key Features */}
                                    <div>
                                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                            <IoCheckmarkCircle className="text-emerald-400" />
                                            Key Features
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {project.features?.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                                    <IoCheckmarkCircle className="text-emerald-400 shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-colors"
                                            >
                                                <FaGithub size={18} />
                                                View Code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium transition-colors shadow-lg shadow-indigo-500/20"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
