import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaBroadcastTower, FaUser, FaRegCommentDots } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { MdAlternateEmail, MdSubject } from "react-icons/md";

const SocialLink = ({ icon, url, label, delay }) => (
    <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(99 102 241)" }} // Reduced scale from 1.1 to 1.05
        className="group relative flex items-center justify-center p-4 cursor-pointer"
    >
        {/* Button Background with unique shape */}
        <div className="absolute inset-0 bg-indigo-500/5 rounded-xl transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-indigo-500/30 clip-path-polygon-[0_0,100%_0,100%_80%,80%_100%,0_100%]"></div>
        <div className="absolute inset-0 bg-indigo-500/10 rounded-xl skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 text-indigo-400 transition-colors group-hover:text-white">
            {icon}
        </div>

        {/* Tooltip: Positioned Top, High Z-Index */}
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold bg-slate-900/95 border border-indigo-500/30 px-3 py-1.5 rounded-lg z-[100] pointer-events-none shadow-xl tracking-wider">
            {label}
            {/* Tooltip Arrow */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-indigo-500/30 rotate-45"></span>
        </span>
    </motion.a>
);

const FormInput = ({ label, type, name, value, onChange, placeholder, required = true, isTextArea = false, icon: Icon }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative group">
            {/* Label */}
            <label className={`absolute left-0 -top-6 text-xs font-mono tracking-wider transition-all duration-300 ${isFocused ? 'text-indigo-400' : 'text-slate-400'} font-semibold uppercase`}>
                {label}
            </label>

            {/* Input Container */}
            <div className={`relative flex items-center bg-slate-900/50 border-b border-slate-700 transition-all duration-300 ${isFocused ? 'border-indigo-500/80 bg-slate-900/80' : 'hover:border-slate-600'}`}>

                {/* Floating Icon */}
                <div className={`absolute left-3 pointer-events-none z-10 ${isTextArea ? 'top-5' : 'top-1/2 -translate-y-1/2'}`}>
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${isFocused ? 'text-indigo-400' : 'text-slate-600'}`} />
                </div>

                {isTextArea ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        required={required}
                        rows="4"
                        className="w-full bg-transparent text-slate-200 py-4 pl-10 pr-4 focus:outline-none placeholder:text-slate-600 resize-none font-sans text-sm tracking-wide autofill-bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0px 1000px #0f172a inset", // Hack to force dark background on autofill
                            WebkitTextFillColor: "#e2e8f0",
                            caretColor: "#818cf8"
                        }}
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        required={required}
                        className="w-full bg-transparent text-slate-200 py-4 pl-10 pr-4 focus:outline-none placeholder:text-slate-600 font-sans text-sm tracking-wide autofill-bg-transparent"
                        style={{
                            WebkitBoxShadow: "0 0 0px 1000px #0f172a inset", // Hack to force dark background on autofill
                            WebkitTextFillColor: "#e2e8f0",
                            caretColor: "#818cf8"
                        }}
                    />
                )}

                {/* Subtle Glow on Focus */}
                <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, sending, success

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate network delay for effect
        setTimeout(() => {
            const mailtoLink = `mailto:umairamjad.dev@gmail.com?subject=${encodeURIComponent(
                formData.subject
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            window.location.href = mailtoLink;
            setStatus("success");

            setTimeout(() => {
                setStatus("idle");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }, 3000);
        }, 1500);
    };

    const socialLinks = [
        { icon: <FaGithub size={20} />, url: "https://github.com/Umair-Amjad-Ali", label: "GITHUB_LINK" },
        { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/umair-amjad-b3397a254/", label: "LINKEDIN_freq" },
        { icon: <BsFillThreadsFill size={20} />, url: "https://www.threads.net/@umair_amjad_ali", label: "THREADS_comm" },
        { icon: <FaTwitter size={20} />, url: "https://twitter.com/Umair_Amjad_Ali", label: "TWITTER_feed" },
    ];

    return (
        <section id="contact" className="relative py-24 paddingX max-w-7xl mx-auto overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Column: Cyber-HUD Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/50"
                >
                    {/* Panel Decorations */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

                    {/* Header */}
                    <div className="mb-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
                            <span className="font-mono text-[10px] text-indigo-300 tracking-widest uppercase">Encryption: Enabled</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Protocol: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">CONNECT</span>
                        </h2>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Initialize a secure connection for project collaboration and inquiries.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="IDENTITY"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                icon={FaUser}
                            />
                            <FormInput
                                label="COMM_LINK"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@domain.com"
                                icon={MdAlternateEmail}
                            />
                        </div>

                        <FormInput
                            label="SUBJECT"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Project Proposal"
                            icon={MdSubject}
                        />

                        <FormInput
                            label="TRANSMISSION DATA"
                            isTextArea={true}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message parameters here..."
                            icon={FaRegCommentDots}
                        />

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group relative w-full overflow-hidden rounded-xl bg-indigo-600 px-8 py-4 transition-all hover:bg-indigo-500 disabled:bg-slate-700 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400/30"
                            >
                                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100"></div>
                                <span className="relative flex items-center justify-center gap-3 font-mono font-bold tracking-widest text-white text-sm">
                                    {status === "sending" ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white"></span>
                                            UPLOADING_PACKET...
                                        </>
                                    ) : status === "success" ? (
                                        <>
                                            <span className="text-green-300">✔</span>
                                            TRANSMISSION_COMPLETE
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            INITIATE_SEND
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Right Column: Visual Data Display */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative hidden lg:flex flex-col justify-center h-full pl-10"
                >
                    {/* Radar / Globe Visualization (CSS Only) */}
                    <div className="relative w-full aspect-square max-w-sm mx-auto mb-12">

                        {/* Unique Radar Core: Reactor Style */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            {/* Outer Hex Container */}
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                {/* Rotating Dashed Ring */}
                                <div className="absolute inset-0 border-2 border-dashed border-indigo-500/40 rounded-full animate-[spin_8s_linear_infinite]"></div>

                                {/* Inner Core */}
                                <div className="w-16 h-16 bg-slate-950 rounded-full border border-indigo-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                                    <FaBroadcastTower className="text-indigo-400 text-xl relative z-10 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Rings */}
                        <div className="absolute inset-0 border border-slate-800/50 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-slate-800/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
                        <div className="absolute inset-8 border border-indigo-500/10 rounded-full animate-pulse" />

                        {/* Social Satellites */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-30">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-8 w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
                                <span className="font-mono text-[10px] text-indigo-400 bg-slate-950 px-1 border border-indigo-500/20 rounded">SAT_LINK_01</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Data Grid */}
                    <div className="relative z-30">
                        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
                            {/* Scanning Line overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-[10px] w-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>

                            <h3 className="font-mono text-xs text-indigo-300/80 mb-6 uppercase tracking-widest border-b border-slate-700 pb-2 font-bold">Connect_Freq_Channels</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, i) => (
                                    <SocialLink key={i} {...link} delay={0.4 + (i * 0.1)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
