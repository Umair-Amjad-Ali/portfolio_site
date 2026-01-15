import React from "react";
import { motion } from "framer-motion";

import { skills } from "../constants";

const Technologies = () => {
  return (
    <section
      className="py-24 paddingX max-w-7xl mx-auto dark-background"
      id="technologies"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading-text text-white"
      >
        Hello I'm{" "}
        <span className="gradient-text-vibrant font-semibold drop-shadow-sm">
          Umair
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className=" mt-5 flex-col gap-3 text-gray-400"
      >
        <p>
          Software Engineer based in Pakistan, specializing in technical
          education through hands-on learning and building applications
        </p>
      </motion.div>

      {/* Simple Skills Grid */}
      <div className="py-10 flex flex-col">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="subhead-text text-white mb-8"
        >
          My Skills
        </motion.h3>
        <div className="flex flex-wrap gap-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              className="block-container w-20 h-20 group relative"
              key={skill.name}
            >
              <div className="btn-back rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600" />
              <div className="btn-front rounded-xl flex justify-center items-center group-hover:bg-opacity-90 group-hover:backdrop-blur-xl transition-all duration-300">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              {/* Tooltip - always at top */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-xl">
                {skill.name}
                {/* Arrow pointing down */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-indigo-600"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
