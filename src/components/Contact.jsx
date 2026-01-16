/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const mailtoLink = `mailto:umairamjad.dev@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        setStatus("success");
        setTimeout(() => setStatus(""), 3000);

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    const socialLinks = [
        {
            icon: <FaGithub size={24} />,
            url: "https://github.com/Umair-Amjad-Ali",
            label: "GitHub",
        },
        {
            icon: <FaLinkedin size={24} />,
            url: "https://www.linkedin.com/in/umair-amjad-b3397a254/",
            label: "LinkedIn",
        },
        {
            icon: <BsFillThreadsFill size={24} />,
            url: "https://www.threads.net/@umair_amjad_ali",
            label: "Threads",
        },
        {
            icon: <FaTwitter size={24} />,
            url: "https://twitter.com/Umair_Amjad_Ali",
            label: "Twitter",
        },
    ];

    return (
        <section
            id="contact"
            className="relative py-20 paddingX max-w-7xl mx-auto overflow-hidden"
        >
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold mb-4"
                    >
                        <span className="gradient-text-vibrant">Let's Connect</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl"
                    >
                        Have a project in mind? Let's work together to create something
                        amazing
                    </motion.p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Form - Left Side (3 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card-dark p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Send me a message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="contact-input"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="contact-input"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="contact-input"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="contact-textarea"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary justify-center"
                                >
                                    <FaEnvelope className="w-5 h-5" />
                                    Send Message
                                </motion.button>

                                {/* Success Message */}
                                {status === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-green-400 text-sm"
                                    >
                                        ✓ Email client opened! Message ready to send.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info - Right Side (2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Email Card */}
                        <div className="glass-card-dark p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                                    <FaEnvelope className="text-indigo-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <p className="text-gray-400 text-sm">Send me a message</p>
                                </div>
                            </div>
                            <a
                                href="mailto:umairamjad.dev@gmail.com"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm break-all"
                            >
                                umairamjad.dev@gmail.com
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="glass-card-dark p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                    <svg
                                        className="text-purple-400"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-400 text-sm">Where I'm based</p>
                                </div>
                            </div>
                            <p className="text-purple-300 text-sm">
                                Bahawalpur, Punjab, Pakistan
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card-dark p-6">
                            <h4 className="text-white font-semibold mb-4">
                                Connect with me
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                                    >
                                        <span className="text-indigo-400">{social.icon}</span>
                                        <span className="text-gray-300 text-sm">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="glass-card-dark p-6 border-2 border-green-500/30">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">
                                        Available for Projects
                                    </h4>
                                    <p className="text-green-400 text-sm">
                                        Open to new opportunities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
