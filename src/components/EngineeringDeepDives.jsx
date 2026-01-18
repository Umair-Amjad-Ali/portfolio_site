import React, { useState } from "react";
import { deepDives } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaServer, FaMicrochip, FaCogs } from "react-icons/fa";
import BlogDetailModal from "./BlogDetailModal";

const EngineeringDeepDives = () => {
  const [selectedDive, setSelectedDive] = useState(null);

  return (
    <section
      id="engineering"
      className="relative py-10 paddingX w-full bg-[#0a0e27]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold"
            >
              <FaCogs />
              <span>System Architecture</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold"
            >
              <FaServer />
              <span>Performance</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold"
            >
              <FaMicrochip />
              <span>Scalability</span>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-white"
          >
            Engineering{" "}
            <span className="gradient-text-vibrant">Deep Dives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            Behind every beautiful UI is a robust system. Here's how I solve
            complex engineering challenges, scale architecture, and optimize
            performance.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {deepDives.slice(0, 3).map((dive, index) => (
            <motion.div
              key={dive.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
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
                    <FaArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/deep-dives"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-white text-sm font-semibold transition-all duration-300 border border-slate-700 hover:border-slate-600 mb-6 hover:no-underline"
          >
            View All Deep Dives
            <FaArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
      {/* Modal Logic */}
      <BlogDetailModal
        blog={selectedDive}
        onClose={() => setSelectedDive(null)}
        allBlogs={deepDives}
        onBlogSelect={setSelectedDive}
      />
    </section>
  );
};

export default EngineeringDeepDives;
