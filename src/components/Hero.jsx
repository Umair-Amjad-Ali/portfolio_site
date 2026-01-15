import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const github = "https://github.com/Umair-Amjad-Ali";
const linkedin = "https://www.linkedin.com/in/umair-amjad-b3397a254/";
const thread = "https://www.threads.net/@umair_amjad_ali";

const Hero = () => {
    const socialLinks = [
        { icon: <FaGithub size={24} />, url: github, label: "GitHub" },
        { icon: <FaLinkedin size={24} />, url: linkedin, label: "LinkedIn" },
        { icon: <FaSquareThreads size={24} />, url: thread, label: "Threads" },
    ];

    return (
        <div className="relative min-h-screen grid-background" id="about">
            <Navbar />

            <div className="flex justify-center items-center min-h-screen px-6 pt-20">
                <div className="paddingX max-w-7xl mx-auto w-full">
                    {/* Main heading with entrance animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                    >
                        <h1 className="heading-text text-white mb-2">
                            Hi, I'm{" "}
                            <span className="gradient-text-vibrant font-bold text-5xl sm:text-6xl">
                                Umair Amjad
                            </span>
                        </h1>
                    </motion.div>

                    {/* Professional subtitle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-4"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                            Software Engineer
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400 mt-2">
                            Crafting Digital Experiences with <span className="gradient-text-sunset">React</span> & <span className="gradient-text-sunset">JavaScript</span>
                        </p>
                    </motion.div>

                    {/* Description with glass card effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 max-w-3xl mx-auto"
                    >
                        <div className="glass-card p-8 text-center">
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                A dedicated{" "}
                                <span className="gradient-text-sunset font-semibold">
                                    Software Engineer
                                </span>{" "}
                                with a passion for creating intuitive and user-friendly web
                                applications. I own a strong foundation in JavaScript, React,
                                and front-end development. I am working continuously to adapt to
                                the rapidly evolving field of software development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Social links - Modern unique design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center gap-4 mt-10"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;