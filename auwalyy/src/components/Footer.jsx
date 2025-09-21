import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <h3 className="text-xl font-semibold text-white">
          © {new Date().getFullYear()} Auwalu Muhammad
        </h3>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:auwaluizziddin2212@gmail.com"
            className="text-emerald-400 hover:text-emerald-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Auwalyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/auwalu-muhammad-izziddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
