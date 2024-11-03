import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ui-improvements/theme"; // Adjust the path as necessary
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors mb-2"
        >
          <span className="text-2xl font-bold tracking-wider">LeukAI</span>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors mb-2"
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 mb-2">
          <Link
            to="/support"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Support
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/how-to-use"
            className="text-white hover:text-blue-300 transition-colors"
          >
            How It Works
          </Link>
        </div>

        {/* Contact Section */}
        <div className="flex items-center space-x-4 text-white">
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="tel:+1234567890" aria-label="Call">
            <FaPhone className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-white text-sm mt-3">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
