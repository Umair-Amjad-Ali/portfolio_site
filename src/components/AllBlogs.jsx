/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogs } from "../constants";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import BlogDetailModal from "./BlogDetailModal";

const AllBlogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="min-h-screen bg-[#0a0e27] py-20">
            <div className="sm:px-16 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 hover:no-underline mb-6 transition-colors no-underline"
                    >
                        <FaArrowLeft />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        All{" "}
                        <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                            Blogs
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Explore in-depth articles about web development, mobile apps, and the latest tech trends.
                    </p>
                </motion.div>

                {/* Blogs Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/12 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/35 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] group"
                            variants={cardVariants}
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden rounded-t-xl">
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

                            {/* Card Content */}
                            <div className="p-5 flex flex-col h-[200px]">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-indigo-500/10">
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500/50"></span>
                                        {blog.date}
                                    </span>
                                    <span>{blog.readTime}</span>
                                </div>

                                {/* View Details Button */}
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="flex items-center justify-center gap-1.5 w-full px-3.5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-300 text-xs font-semibold cursor-pointer transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-white"
                                >
                                    <FaEye size={12} />
                                    Read Article
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Blog Detail Modal */}
            <BlogDetailModal
                blog={selectedBlog}
                onClose={() => setSelectedBlog(null)}
                allBlogs={blogs}
                onBlogSelect={setSelectedBlog}
            />
        </div>
    );
};

export default AllBlogs;
