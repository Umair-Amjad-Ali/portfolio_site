import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaBroadcastTower,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { MdAlternateEmail, MdSubject } from "react-icons/md";



const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  isTextArea = false,
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      {/* Label */}
      <label
        className={`absolute left-0 -top-6 text-xs font-mono tracking-wider transition-all duration-300 ${isFocused ? "text-indigo-400" : "text-slate-400"
          } font-semibold uppercase`}
      >
        {label}
      </label>

      {/* Input Container */}
      <div
        className={`relative flex items-center bg-slate-900/50 border-b border-slate-700 transition-all duration-300 ${isFocused
          ? "border-indigo-500/80 bg-slate-900/80"
          : "hover:border-slate-600"
          }`}
      >
        {/* Floating Icon */}
        <div
          className={`absolute left-3 pointer-events-none z-10 ${isTextArea ? "top-5" : "top-1/2 -translate-y-1/2"
            }`}
        >
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${isFocused ? "text-indigo-400" : "text-slate-600"
              }`}
          />
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
              caretColor: "#818cf8",
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
              caretColor: "#818cf8",
            }}
          />
        )}

        {/* Subtle Glow on Focus */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"
            }`}
        ></div>
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
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Umair-Amjad-Ali",
      label: "GITHUB_LINK",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/umair-amjad-b3397a254/",
      label: "LINKEDIN_freq",
    },
    {
      icon: <BsFillThreadsFill size={20} />,
      url: "https://www.threads.net/@umair_amjad_ali",
      label: "THREADS_comm",
    },
    {
      icon: <FaTwitter size={20} />,
      url: "https://twitter.com/Umair_Amjad_Ali",
      label: "TWITTER_feed",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 paddingX w-full overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
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
              <span className="font-mono text-[10px] text-indigo-300 tracking-widest uppercase">
                Encryption: Enabled
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protocol:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                CONNECT
              </span>
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Initialize a secure connection for project collaboration and
              inquiries.
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

            {/* Orbiting Rings - Advanced Reactor Field */}

            {/* Ring 2: Outer Counter-Clockwise Dashed - Indigo Tint (Thicker) */}
            <div className="absolute inset-4 border-2 border-indigo-500/40 rounded-full animate-[spin_25s_linear_infinite_reverse] border-dashed"></div>

            {/* Ring 3: Inner Fast Clockwise Dotted - Violet Tint (Thicker) */}
            <div className="absolute inset-8 border-2 border-violet-500/40 rounded-full animate-[spin_20s_linear_infinite] border-dotted"></div>

            {/* Ring 4: Pulse Field */}
            <div className="absolute inset-12 border-2 border-indigo-500/20 rounded-full animate-pulse shadow-[0_0_20px_rgba(99,102,241,0.2)]"></div>

            {/* Scanner Decoration */}
            <div className="absolute inset-0 rounded-full border-t border-cyan-400/50 animate-[spin_4s_linear_infinite] opacity-30"></div>

            {/* Social Satellites */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-30">
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="font-mono text-[9px] text-indigo-400 bg-slate-950/80 px-2 py-0.5 border border-indigo-500/30 rounded backdrop-blur">
                  SAT_LINK_01
                </span>
                <div className="h-4 w-[1px] bg-indigo-500/50"></div>
              </div>
            </div>
          </div>
          {/* Holographic Terminal - Active Channels */}
          <div className="relative z-30 w-full max-w-sm mx-auto">
            <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/60 rounded-xl overflow-hidden relative">
              {/* Scanning Line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-[4px] w-full animate-[scan_4s_ease-in-out_infinite] pointer-events-none z-0"></div>

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">SECURE_UPLINK</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                </div>
              </div>

              {/* Channel List */}
              <div className="p-4 space-y-3 relative z-10">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 group-hover:text-indigo-400 transition-colors text-sm">{link.icon}</span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-indigo-200 tracking-wider uppercase">{link.label}</span>
                    </div>

                    {/* Status & Signal */}
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-mono text-emerald-500/70 opacity-0 group-hover:opacity-100 transition-opacity">ONLINE</span>
                      <div className="flex gap-0.5 items-end h-2.5">
                        <div className="w-0.5 bg-indigo-500/20 group-hover:bg-indigo-500 h-[40%] rounded-sm transition-all duration-300 delay-75"></div>
                        <div className="w-0.5 bg-indigo-500/20 group-hover:bg-indigo-500 h-[70%] rounded-sm transition-all duration-300 delay-100"></div>
                        <div className="w-0.5 bg-indigo-500/20 group-hover:bg-indigo-500 h-[100%] rounded-sm transition-all duration-300 delay-150"></div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Footer Data */}
              <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/80 flex justify-between items-center text-[9px] font-mono text-slate-600">
                <span>LATENCY: 24ms</span>
                <span className="text-indigo-500/40">ENCRYPTED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
