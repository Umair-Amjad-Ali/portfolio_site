import React from "react";

const Footer = () => {
    return (
        <footer className="w-full relative py-6 bg-[#0a0e27]">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-1.5">
                <p className="text-gray-400 text-sm text-center font-light">
                    © {new Date().getFullYear()} Umair Amjad Ali. All rights reserved.
                </p>
                <p className="text-[10px] text-gray-500 text-center tracking-wide">
                    Designed & Built with <span className="text-red-500 text-xs align-middle animate-pulse">♥</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
