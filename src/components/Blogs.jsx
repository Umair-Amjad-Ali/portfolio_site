/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { blogs } from "../constants";
import BlogDetailModal from "./BlogDetailModal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye } from "react-icons/fa";

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Duplicate blogs for infinite scroll effect (tripled for smoothness)
    const duplicatedBlogs = [...blogs, ...blogs, ...blogs];

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <section
            id="blog"
            className="relative py-20 paddingX max-w-7xl mx-auto bg-[#0a0e27]"
        >
            {/* Section Header */}
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold mb-4"
                >
                    <span className="gradient-text-vibrant">Latest Insights</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg max-w-2xl"
                >
                    Exploring modern web development, mobile apps, and cutting-edge
                    technologies
                </motion.p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative mb-12">
                <div className="blog-scroll-container">
                    <div className="blog-scroll-track">
                        {duplicatedBlogs.map((blog, index) => (
                            <motion.div
                                key={`${blog.id}-${index}`}
                                className="blog-card-wrapper cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => handleBlogClick(blog)}
                            >
                                <div className="bg-slate-900/70 backdrop-blur-xl border border-indigo-500/15 rounded-[14px] overflow-hidden transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.1)] group h-full flex flex-col">
                                    {/* Blog Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                                        <div className="absolute top-3 left-3">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 rounded-lg text-[11px] font-semibold backdrop-blur-lg">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        {/* Blog Meta */}
                                        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-indigo-500/10 pt-3 mb-3">
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                                {blog.date}
                                            </span>
                                            <span>{blog.readTime}</span>
                                        </div>

                                        {/* View Details Text (Like Projects) */}
                                        <div className="flex items-center gap-1 text-indigo-400 text-xs font-medium group-hover:text-indigo-300 transition-colors">
                                            <FaEye size={12} />
                                            <span>Read Article</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e27] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e27] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* View All Button */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white text-base font-semibold no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(102,126,234,0.5)] hover:no-underline"
                >
                    View All Blogs
                    <FaArrowRight size={14} />
                </Link>
            </motion.div>

            {/* Blog Detail Modal */}
            <BlogDetailModal
                blog={selectedBlog}
                onClose={() => setSelectedBlog(null)}
                allBlogs={blogs}
                onBlogSelect={setSelectedBlog}
            />
        </section>
    );
};

export default Blogs;
