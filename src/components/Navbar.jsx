/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { socialMedia } from "../constants";

import { logo } from "../assests";
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

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="w-full py-4 fixed z-30 floating-navbar rounded-b-2xl mx-auto max-w-7xl left-0 right-0 top-0">
      <div className=" paddingX w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-medium cursor-pointer">
            Umair Amjad
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? " text-[#6366f1]" : "text-gray-300"
                } hover:text-white text-[15px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-start">
          <div className=" cursor-pointer" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <ToggleButton>
                <IoMdClose size={25} />
              </ToggleButton>
            ) : (
              <ToggleButton>
                <GrMenu size={25} />
              </ToggleButton>
            )}
          </div>
          <div
            className={`${!toggle ? "hidden" : "flex justify-between flex-col "
              } floating-navbar absolute top-[75px] right-0 max-w-[200px] h-screen z-10`}
          >
            <ul className=" p-11 list-none flex items-center flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? " text-[#6366f1]"
                    : "text-gray-300"
                    } hover:text-white font-poppins font-medium cursor-pointer text-[16px] transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex mb-[7rem] justify-center gap-2 ">
              {socialMedia.map((icon) => (
                <Link
                  to={icon.to}
                  key={crypto.randomUUID()}
                  className=" bg-slate-100 p-[0.30rem] shadow-md rounded-sm"
                  onClick={() => handleIconClick(icon.URL)}
                >
                  {iconComponents[icon.name] || null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
