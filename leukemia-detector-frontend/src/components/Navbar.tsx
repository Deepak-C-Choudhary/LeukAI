

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Database,
  HelpCircle,
  Shield,
  Activity,
  Circle,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../ui-improvements/theme"; // Assuming the theme context file is in the same directory

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    {
      icon: Home,
      title: "Home",
      path: "/",
      description: "Return to main dashboard",
    },
    {
      icon: Activity,
      title: "Detection",
      path: "/upload",
      description: "Start leukemia image analysis",
    },
    {
      icon: Shield,
      title: "How It Works",
      path: "/how-to-use",
      description: "Learn about our technology",
    },
    {
      icon: Circle,
      title: "About",
      path: "/details",
      description: "Our mission and impact",
    },
    {
      icon: HelpCircle,
      title: "Support",
      path: "/support",
      description: "Get help and contact us",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-5 left-20 right-20 rounded-full z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors"
        >
          <Circle className="text-blue-300 dark:text-blue-400" size={32} />
          <span className="text-2xl font-bold tracking-wider">LeukAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group flex items-center space-x-2 text-white hover:text-blue-300 transition-colors"
              title={item.description}
            >
              <item.icon
                className="text-blue-300 dark:text-blue-400 group-hover:scale-110 transition-transform"
                size={20}
              />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-6 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-950/90 dark:bg-gray-950/90 z-40 md:hidden">
          <div className="container mx-auto px-4 py-10 space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={toggleMenu}
                className="flex items-center space-x-4 text-white hover:bg-blue-900/50 dark:hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              >
                <item.icon
                  className="text-blue-300 dark:text-blue-400"
                  size={24}
                />
                <div>
                  <span className="text-lg font-semibold">{item.title}</span>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </Link>
            ))}
            {/* Login Button in Mobile Menu */}
            <Link
              to="/login"
              onClick={toggleMenu}
              className="flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
