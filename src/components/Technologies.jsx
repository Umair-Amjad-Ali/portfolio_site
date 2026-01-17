import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaBolt } from "react-icons/fa";

import { skills } from "../constants";

const Technologies = () => {
  return (
    <section
      className="py-24 paddingX w-full dark-background relative overflow-hidden"
      id="technologies"
    >
      {/* Mysterious Ambient Fog */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20 relative"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <FaCode />
              <span>Modern Stack</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <FaLayerGroup />
              <span>Scalable Architecture</span>
            </div>
          </div>
          <div className="absolute left-0 -top-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse" />
          <h2 className="heading-text text-white mb-4 relative z-10">
            Tech <span className="gradient-text-vibrant drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Decoded: The tools and technologies powering my digital creations.
          </p>
        </motion.div>

        {/* Categorized Tech Nodes */}
        <div className="flex flex-wrap justify-start gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="block-container w-20 h-20 group relative cursor-pointer"
            >
              {/* Static Holo-Ring (Only visible on hover for performance) */}
              <div className="absolute inset-0 rounded-xl bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card Back */}
              <div className="btn-back rounded-xl bg-slate-900/90 border border-white/5 opacity-100 transition-colors group-hover:border-indigo-500/50" />

              {/* Card Front */}
              <div className="btn-front rounded-xl flex justify-center items-center bg-[#0a0e27] border border-white/5 group-hover:border-indigo-500/50 transition-all duration-300 shadow-none group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">

                {/* Subtle Scanline (CSS only, no JS animation) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 bg-[length:100%_200%] transition-opacity duration-300 pointer-events-none" />

                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-contain drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-950 border border-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                {skill.name}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-2 h-2 bg-slate-950 border-r border-b border-indigo-500/30 rotate-45"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
