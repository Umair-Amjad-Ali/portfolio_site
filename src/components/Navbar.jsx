/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  const handleNavClick = (id, title) => {
    setActive(title);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height offset
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      try {
        const scrollY = window.scrollY;

        // Only run on home page
        if (location.pathname !== "/") return;

        // Verify navLinks exists and is an array
        if (!Array.isArray(navLinks)) return;

        // Iterate through sections to find which one is in view
        for (const link of navLinks) {
          if (!link.id) continue;

          const section = document.getElementById(link.id);

          if (section) {
            // Get section dimensions
            const sectionTop = section.offsetTop - 150; // Offset for earlier triggering
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              setActive(link.title);
            }
          }
        }
      } catch (error) {
        console.error("Scroll spy error:", error);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="w-[95%] sm:w-[90%] md:w-[95%] py-2 sm:py-2.5 md:py-2 fixed z-30 floating-navbar rounded-full mx-auto max-w-7xl left-0 right-0 top-2 sm:top-3 md:top-4">
      <div className="w-full flex px-3 sm:px-4 md:px-2 justify-between items-center max-w-7xl mx-auto">
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
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-indigo-500/30"
          />
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold cursor-pointer whitespace-nowrap">
            Umair Amjad
          </p>
        </Link>

        {/* Center: Navigation Links (Desktop & Tablet) */}
        <ul className="list-none hidden lg:flex flex-row gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#6366f1]" : "text-gray-300"
                } hover:text-white text-[13px] lg:text-[14px] xl:text-[15px] font-medium cursor-pointer transition-colors whitespace-nowrap`}
              onClick={() => handleNavClick(link.id, link.title)}
            >
              <a
                href={`#${link.id}`}
                className="no-underline hover:no-underline"
                onClick={(e) => e.preventDefault()}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Let's Connect Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact", "Contact");
            }}
            className="px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 bg-transparent border-2 border-white/20 hover:border-indigo-500/50 rounded-full text-white text-[12px] lg:text-[13px] xl:text-[14px] font-medium transition-all duration-300 hover:bg-indigo-500/10 no-underline hover:no-underline whitespace-nowrap"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 cursor-pointer transition-colors border border-white/10"
            onClick={() => setToggle(!toggle)}
          >
            <ToggleButton>
              <GrMenu size={18} className="text-white sm:w-5 sm:h-5" />
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
                  className="fixed top-0 right-0 w-[260px] sm:w-[280px] md:w-[320px] h-screen bg-gradient-to-b from-[#0f172a] to-[#0a0e27] border-l border-indigo-500/20 z-50 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] rounded-l-2xl sm:rounded-l-3xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-white/10">
                    <span className="text-base sm:text-lg font-bold text-white">Menu</span>
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
                      onClick={() => setToggle(false)}
                    >
                      <IoMdClose size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex-1 overflow-y-auto py-4 sm:py-5 md:py-6 px-3 sm:px-4">
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
                            className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 no-underline hover:no-underline ${active === link.title
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
                  <div className="p-4 sm:p-5 md:p-6 border-t border-white/10 bg-black/20">
                    <p className="text-xs text-center text-gray-500 mb-3 sm:mb-4">Let's connect</p>
                    <div className="flex justify-center gap-3 sm:gap-4">
                      {socialMedia.map((icon, index) => (
                        <motion.a
                          key={index}
                          href={icon.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800 p-2 sm:p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300"
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
