/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { socialMedia } from "../constants";

import { navLinks } from "../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill, BsTwitterX } from "react-icons/bs";
import { ToggleButton } from "ui-neumorphism";

const iconComponents = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  BsFillThreadsFill: <BsFillThreadsFill size={20} />,
  BsTwitterX: <BsTwitterX size={20} />,
};

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  const handleNavClick = (id, title) => {
    setActive(title);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <nav className="w-[95%] py-2 fixed z-30 floating-navbar rounded-full mx-auto max-w-7xl left-0 right-0 top-4">
      <div className=" w-full flex px-2 justify-between items-center max-w-7xl mx-auto">
        {/* Left: Profile Image + Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/profile-avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
          />
          <p className="text-white text-[18px] font-semibold cursor-pointer">
            Umair Amjad
          </p>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#6366f1]" : "text-gray-300"
                } hover:text-white text-[15px] font-medium cursor-pointer transition-colors`}
              onClick={() => handleNavClick(link.id, link.title)}
            >
              <a
                href={`#${link.id}`}
                onClick={(e) => e.preventDefault()}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Let's Connect Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact", "Contact");
            }}
            className="px-6 py-2.5 bg-transparent border-2 border-white/20 hover:border-indigo-500/50 rounded-full text-white text-[14px] font-medium transition-all duration-300 hover:bg-indigo-500/10"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 cursor-pointer transition-colors border border-white/10"
            onClick={() => setToggle(!toggle)}
          >
            <ToggleButton>
              <GrMenu size={20} className="text-white" />
            </ToggleButton>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {toggle && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setToggle(false)}
                />

                {/* Sidebar Drawer */}
                <motion.div
                  className="fixed top-0 right-0 w-[280px] h-screen bg-gradient-to-b from-[#0f172a] to-[#0a0e27] border-l border-indigo-500/20 z-50 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] rounded-l-3xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <span className="text-lg font-bold text-white">Menu</span>
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
                      onClick={() => setToggle(false)}
                    >
                      <IoMdClose size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <ul className="flex flex-col gap-4">
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.id}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <a
                            href={`#${link.id}`}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${active === link.title
                              ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setToggle(false);
                              handleNavClick(link.id, link.title);
                            }}
                          >
                            {link.title}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer / Socials */}
                  <div className="p-6 border-t border-white/10 bg-black/20">
                    <p className="text-xs text-center text-gray-500 mb-4">Let's connect</p>
                    <div className="flex justify-center gap-4">
                      {socialMedia.map((icon, index) => (
                        <motion.a
                          key={index}
                          href={icon.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800 p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
                          whileHover={{ scale: 1.1, translateY: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {iconComponents[icon.name]}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
