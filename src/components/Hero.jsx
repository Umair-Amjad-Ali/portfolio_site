import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { useEffect, useState } from "react";

const github = "https://github.com/Umair-Amjad-Ali";
const linkedin = "https://www.linkedin.com/in/umair-amjad-b3397a254/";
const thread = "https://www.threads.net/@umair_amjad_ali";

const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Software Engineer";
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout;
        if (typedText.length < fullText.length) {
            timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [typedText]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    const socialLinks = [
        { icon: <FaGithub size={20} />, url: github, label: "GitHub" },
        { icon: <FaLinkedin size={20} />, url: linkedin, label: "LinkedIn" },
        { icon: <FaSquareThreads size={20} />, url: thread, label: "Threads" },
    ];

    const codeLines = [
        "const developer = {",
        "  name: 'Umair Amjad',",
        "  role: 'Software Engineer',",
        "  skills: ['Web App Development', 'Mobile App Development'],",
        "  passion: 'Building Amazing Products'",
        "};"
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0a0e27]" id="about">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-200 left-10 w-32 h-32 border-2 border-indigo-500/30 rounded-lg"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500/30"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-blue-500/30 rounded-full"
                />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen paddingX pt-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Text Content */}
                        <div className="space-y-8 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6">
                                    <span className="text-indigo-400 text-sm font-medium">👋 Welcome to my portfolio</span>
                                </div>

                                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    Hi, I'm a
                                    <br />
                                    <span className="gradient-text-vibrant inline-block pb-2">
                                        {typedText}
                                        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    Transforming ideas into elegant, scalable solutions using{" "}
                                    <span className="text-indigo-400 font-semibold">Modern Web & Mobile Technologies</span>.
                                    I build experiences that users love and businesses need.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <motion.a
                                        href="#work"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 hover:no-underline"
                                    >
                                        <span>View My Work</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.a>

                                    <motion.a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:no-underline"
                                    >
                                        <span>Get In Touch</span>
                                    </motion.a>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-8 justify-center lg:justify-start">
                                    <span className="text-gray-500 text-sm">Connect with me:</span>
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -3 }}
                                            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Code Terminal */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                {/* Terminal Window */}
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                                    {/* Terminal Header */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="ml-3 text-xs text-gray-400">developer.js</span>
                                    </div>

                                    {/* Terminal Content */}
                                    <div className="p-6 font-mono text-sm">
                                        {codeLines.map((line, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="mb-2"
                                            >
                                                <span className="text-gray-500 mr-4">{index + 1}</span>
                                                <span className={
                                                    line.includes('const') || line.includes('name') || line.includes('role') || line.includes('skills') || line.includes('passion')
                                                        ? 'text-purple-400'
                                                        : line.includes("'") || line.includes('"')
                                                            ? 'text-green-400'
                                                            : line.includes('[') || line.includes(']')
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300'
                                                }>
                                                    {line}
                                                </span>
                                            </motion.div>
                                        ))}

                                        {/* Blinking Cursor */}
                                        <motion.div
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="inline-block w-2 h-4 bg-indigo-500 ml-1"
                                        />
                                    </div>
                                </div>

                                {/* Floating Tech Icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold"
                                >
                                    JS
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold"
                                >
                                    Dart
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll Down</span>
                            <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1 h-2 bg-indigo-500 rounded-full mx-auto"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;