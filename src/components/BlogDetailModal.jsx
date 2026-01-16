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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 pointer-events-none">
                <motion.div
                    className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
                    >
                        <IoClose size={22} />
                    </button>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto max-h-[95vh] overscroll-contain">
                        {/* Hero Section */}
                        <div className="relative h-64 md:h-80 w-full shrink-0">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                            {/* Floating Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-semibold backdrop-blur-md">
                                    <FaTag className="text-indigo-400" size={10} />
                                    {blog.category}
                                </span>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-3">
                                    <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/5">
                                        <IoCalendar className="text-indigo-400" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/5">
                                        <IoTime className="text-purple-400" />
                                        {blog.readTime}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/5">
                                        <IoPerson className="text-blue-400" />
                                        {blog.author}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    {blog.title}
                                </h1>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8 bg-slate-900">
                            {/* Blog Text Content */}
                            <div className="prose prose-invert prose-lg max-w-none mb-10">
                                <div
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                    className="text-gray-300 leading-relaxed space-y-6"
                                />
                            </div>

                            {/* Tags Section */}
                            <div className="mb-10 pt-8 border-t border-white/10">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                    <FaTag className="text-indigo-400" />
                                    Related Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Related Articles */}
                            {relatedBlogs?.length > 0 && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                                        <IoBook className="text-purple-400" />
                                        Read Next
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {relatedBlogs.map((relatedBlog) => (
                                            <div
                                                key={relatedBlog.id}
                                                onClick={() => onBlogSelect(relatedBlog)}
                                                className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-indigo-500/20 hover:-translate-y-1"
                                            >
                                                <div className="relative h-40 overflow-hidden">
                                                    <img
                                                        src={relatedBlog.image}
                                                        alt={relatedBlog.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BlogDetailModal;
