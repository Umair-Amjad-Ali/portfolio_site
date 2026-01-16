/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoBook, IoTime, IoCalendar, IoPerson } from "react-icons/io5";
import { FaTag } from "react-icons/fa";

const BlogDetailModal = ({ blog, onClose, allBlogs, onBlogSelect }) => {
    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (blog) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [blog, onClose]);

    // Get related blogs
    const relatedBlogs = allBlogs
        ?.filter((b) => b.category === blog?.category && b.id !== blog?.id)
        .slice(0, 3);

    if (!blog) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/95 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
            />

            {/* Modal Container */}
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-[#0a0e27] border border-indigo-500/30 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_120px_rgba(99,102,241,0.15)]"
                    initial={{ scale: 0.95, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: 20, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Border Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#667eea] rounded-[26px] -z-10 blur-lg opacity-40" />

                    {/* Close Button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IoClose size={24} />
                    </motion.button>

                    {/* Scrollable Content */}
                    <div
                        className="overflow-y-auto max-h-[95vh] overscroll-contain scrollbar-thin scrollbar-track-slate-900/50 scrollbar-thumb-indigo-500/40"
                        style={{ scrollbarGutter: "stable" }}
                    >
                        {/* Hero Section */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/60 to-transparent" />

                            {/* Floating Category Badge */}
                            <motion.div
                                className="absolute top-4 left-4"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 rounded-[20px] text-[13px] font-semibold backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                    <FaTag className="text-indigo-400" size={12} />
                                    {blog.category}
                                </span>
                            </motion.div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <motion.div
                                    className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                                        <IoCalendar className="text-indigo-400" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                                        <IoTime className="text-purple-400" />
                                        {blog.readTime}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                                        <IoPerson className="text-blue-400" />
                                        {blog.author}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl md:text-5xl font-bold text-white leading-tight"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    {blog.title}
                                </motion.h1>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8 bg-[#0a0e27]">
                            {/* Blog Text Content */}
                            <motion.div
                                className="prose prose-invert prose-lg max-w-none mb-12"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <div
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                    className="text-gray-300 leading-relaxed space-y-6"
                                />
                            </motion.div>

                            {/* Tags Section */}
                            <motion.div
                                className="mb-12 pt-8 border-t border-white/10"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                            >
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                    <FaTag className="text-indigo-400" />
                                    Related Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3.5 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-300"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Related Articles */}
                            {relatedBlogs?.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                                        <IoBook className="text-purple-400" />
                                        Read Next
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {relatedBlogs.map((relatedBlog) => (
                                            <div
                                                key={relatedBlog.id}
                                                onClick={() => onBlogSelect(relatedBlog)}
                                                className="group cursor-pointer bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <div className="relative h-40 overflow-hidden">
                                                    <img
                                                        src={relatedBlog.image}
                                                        alt={relatedBlog.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                                                        {relatedBlog.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 flex justify-between">
                                                        <span>{relatedBlog.date}</span>
                                                        <span>{relatedBlog.readTime}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BlogDetailModal;
