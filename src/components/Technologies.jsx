import React from "react";
import { motion } from "framer-motion";

import { skills } from "../constants";

const Technologies = () => {
  return (
    <section
      className="py-24 paddingX w-full dark-background relative overflow-hidden"
      id="technologies"
    >
      {/* Mysterious Ambient Fog */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <h2 className="heading-text text-white mb-4">
            Tech <span className="gradient-text-vibrant">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Decoded: The tools and technologies powering my digital creations.
          </p>
        </motion.div>

        {/* Categorized Tech Nodes */}
        {/* Floating Tech Galaxy */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                // Mount transition
                duration: 0.4,
                delay: index * 0.02,
                type: "spring",
                stiffness: 100,
                // Float animation override
                y: {
                  duration: 2 + (index % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index % 3) * 0.5
                }
              }}
              animate={{
                y: [0, -10, 0],
              }}
              className="block-container w-24 h-24 group relative cursor-pointer"
            >
              <div className="btn-back rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="btn-front rounded-xl flex justify-center items-center bg-[#0f1121] border border-indigo-500/20 group-hover:border-indigo-400/60 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-indigo-500/30 text-indigo-100 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-xl tracking-wide">
                {skill.name}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] w-2 h-2 bg-slate-900 border-r border-b border-indigo-500/30 rotate-45"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
