import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaServer, FaMicrochip, FaCogs } from "react-icons/fa";
import { deepDives } from "../constants";
import BlogDetailModal from "./BlogDetailModal";

const AllDeepDives = () => {
  const [selectedDive, setSelectedDive] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] pt-32 pb-12 px-6 sm:px-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-indigo-400 hover:text-indigo-300 mb-8 transition-all group backdrop-blur-sm hover:no-underline"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                <FaCogs />
                <span>System Architecture & Problem Solving</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Innovation{" "}
                <span className="gradient-text-vibrant">Archive</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                A complete collection of engineering challenges, system designs,
                and performance optimizations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deepDives.map((dive, index) => (
            <motion.div
              key={dive.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#0f1636] border border-slate-800 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Circuit Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none" />

              {/* Top Accent Gradient */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Header: Category & Complexity */}
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-xs font-medium text-slate-300 tracking-wide uppercase">
                    {dive.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded">
                    <FaMicrochip size={12} />
                    {dive.complexity} Complexity
                  </div>
                </div>

                {/* Title & Tech */}
                <div className="mb-auto">
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                    {dive.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <FaServer className="text-indigo-400" size={14} />
                    <span>
                      Powered by{" "}
                      <span className="text-gray-300 font-medium">
                        {dive.mainTech}
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 mb-6">
                    {dive.excerpt}
                  </p>
                </div>

                {/* Footer: Tags & Action */}
                <div className="pt-6 border-t border-slate-800/50 mt-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dive.tags.slice(0, 3).map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-900/20"
                    onClick={() => setSelectedDive(dive)}
                  >
                    View Architecture
                    {/* Using FaArrowLeft rotated purely for visual forward motion if typical Right arrow needed */}
                    <div className="transform rotate-180">
                      <FaArrowLeft size={12} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <BlogDetailModal
          blog={selectedDive}
          onClose={() => setSelectedDive(null)}
          allBlogs={deepDives}
          onBlogSelect={setSelectedDive}
        />
      </div>
    </div>
  );
};

export default AllDeepDives;
