import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaRocket,
  FaLaptopCode,
  FaHeart,
  FaCoffee,
  FaLightbulb,
  FaFire,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const highlights = [
    {
      icon: <FaCode size={24} />,
      title: "Full-Stack Mastery",
      description:
        "From Flutter mobile apps to Next.js web platforms - I build end-to-end solutions that scale",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaMobile size={24} />,
      title: "Cross-Platform Expert",
      description:
        "One codebase, multiple platforms. Building apps that deliver native performance everywhere",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaPalette size={24} />,
      title: "UI/UX Enthusiast",
      description:
        "Pixel-perfect designs that not only look stunning but solve real user problems",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Problem Solver",
      description:
        "Complex challenges are just puzzles waiting to be solved with creative solutions",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      gradient: "from-indigo-500 to-purple-500",
      icon: <FaBriefcase size={20} />,
    },
    {
      label: "Projects Delivered",
      value: "10+",
      gradient: "from-purple-500 to-pink-500",
      icon: <FaTrophy size={20} />,
    },
    {
      label: "Technologies",
      value: "15+",
      gradient: "from-pink-500 to-red-500",
      icon: <BiCodeAlt size={20} />,
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      gradient: "from-cyan-500 to-blue-500",
      icon: <FaCoffee size={20} />,
    },
  ];

  const funFacts = [
    {
      emoji: "💡",
      label: "First Line of Code",
      fact: "JavaScript 'Hello World' in 2021",
    },
    {
      emoji: "🚀",
      label: "Biggest Achievement",
      fact: "Built a full-stack inventory system with 50+ trucks",
    },
    {
      emoji: "⚡",
      label: "Coding Style",
      fact: "Clean, commented, and always refactorable",
    },
    {
      emoji: "🎯",
      label: "Current Focus",
      fact: "AI integration & Real-time systems",
    },
    {
      emoji: "🛠️",
      label: "Favorite Tech Stack",
      fact: "MERN Stack & Flutter for Cross-Platform",
    },
    {
      emoji: "🎨",
      label: "Design Philosophy",
      fact: "Minimalist, accessible, and user-centric",
    },
    {
      emoji: "📚",
      label: "Learning goal",
      fact: "Mastering Three.js & WebGL for 3D web",
    },
  ];

  const journey = [
    {
      year: "2021",
      title: "Started Coding Journey",
      description:
        "Fell in love with programming. Started with JavaScript and immediately got hooked on building things.",
      icon: <FaLightbulb />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023",
      title: "First Professional Role",
      description:
        "Joined Enigmatix as Web Application Developer. Built responsive web apps with React.js and Next.js.",
      icon: <FaGraduationCap />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Full-Stack Developer",
      description:
        "Currently at SynticAI, building mobile apps with Flutter and powerful backends with Node.js & MongoDB.",
      icon: <FaFire />,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "Now",
      title: "Building the Future",
      description:
        "Working on AI-powered solutions and scaling systems that serve thousands of users daily.",
      icon: <FaRocket />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="pt-14 pb-12 paddingX w-full dark-background relative overflow-hidden"
      id="about"
    >
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            👋 Get to Know Me
          </div>
          <h2 className="heading-text text-white mb-4">
            The Story Behind{" "}
            <span className="gradient-text-vibrant">The Code</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            From a curious beginner to a full-stack engineer building production
            apps - here's my journey of turning coffee ☕ into code and ideas
            into reality 🚀
          </p>
        </motion.div>

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main Bio Card */}
            <div className="glass-card-dark p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <FaLaptopCode className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>

                <p className="text-gray-300 leading-relaxed text-base">
                  Hi! I'm{" "}
                  <span className="text-white font-bold gradient-text-vibrant">
                    Umair Amjad
                  </span>{" "}
                  — a software engineer who believes code is more than syntax;
                  it's a{" "}
                  <span className="text-indigo-400 font-semibold">
                    creative medium to solve real problems
                  </span>
                  .
                </p>

                <p className="text-gray-300 leading-relaxed text-base">
                  My journey started in{" "}
                  <span className="text-purple-400 font-semibold">2021</span>{" "}
                  with a simple "Hello World" in JavaScript. That moment sparked
                  something. Fast forward to today, and I've built everything
                  from{" "}
                  <span className="text-indigo-400 font-semibold">
                    AI-powered nutrition trackers
                  </span>{" "}
                  to{" "}
                  <span className="text-indigo-400 font-semibold">
                    multi-tenant inventory systems
                  </span>{" "}
                  handling data in real-time.
                </p>

                <p className="text-gray-300 leading-relaxed text-base">
                  What drives me?{" "}
                  <span className="text-green-400 font-semibold">
                    The moment when a user says "This just works!"
                  </span>{" "}
                  — that's when I know I've done my job right. I'm obsessed with
                  writing clean, maintainable code that doesn't just work today,
                  but scales for tomorrow.
                </p>

                <div className="pt-6 border-t border-indigo-500/20">
                  <p className="text-gray-300 leading-relaxed text-base">
                    When I'm not coding, you'll find me exploring new tech
                    stacks, contributing to open-source, or{" "}
                    <span className="text-indigo-400 font-semibold">
                      mentoring junior developers
                    </span>
                    . I believe the best way to master something is to teach it.
                  </p>
                </div>

                {/* Core Values */}
                <div className="pt-6 border-t border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <FaHeart className="text-red-400" size={20} />
                    <h4 className="text-lg font-semibold text-white">
                      My Core Values
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "Innovation First", emoji: "💡" },
                      { label: "Quality Over Speed", emoji: "⚡" },
                      { label: "Never Stop Learning", emoji: "📚" },
                      { label: "Collaboration > Competition", emoji: "🤝" },
                    ].map((value, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg text-white text-sm font-medium cursor-default hover:border-indigo-400/50 transition-all"
                      >
                        {value.emoji} {value.label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card-dark p-6 relative overflow-hidden group cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`text-gray-400 mb-2 group-hover:text-white transition-colors`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card-dark p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Quick Facts
              </h3>
              <div className="space-y-4">
                {funFacts.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <div className="text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-1">
                          {item.label}
                        </div>
                        <div className="text-gray-300 text-sm leading-relaxed">
                          {item.fact}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-left mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">
              My <span className="gradient-text-vibrant">Journey</span>
            </h3>
            <p className="text-gray-400 text-base">
              From curious beginner to professional developer — every step
              shaped who I am today
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                onHoverStart={() => setActiveTimeline(index)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`glass-card-dark p-6 h-full transition-all duration-300 ${
                    activeTimeline === index
                      ? "border-indigo-500/50 shadow-lg shadow-indigo-500/20"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-[2px] mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white text-xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold text-sm mb-2`}
                  >
                    {item.year}
                  </div>

                  {/* Content */}
                  <h4 className="text-white font-bold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile) */}
                {index < journey.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Bring Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="glass-card-dark p-8 md:p-12">
            <div className="text-left mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                What I Bring to{" "}
                <span className="gradient-text-vibrant">Your Team</span>
              </h3>
              <p className="text-gray-400 text-base max-w-2xl mx-0">
                More than just code — I bring solutions, collaboration, and a
                passion for excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="flex gap-4 items-start p-6 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.color} p-[2px] flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                        {highlight.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
