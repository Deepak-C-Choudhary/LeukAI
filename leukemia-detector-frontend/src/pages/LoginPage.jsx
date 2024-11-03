

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, UserCircle, Lock } from "lucide-react";
import { useTheme } from "../ui-improvements/theme"; // Import the theme context

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    // On successful login:
    // navigate('/');
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20  dark:from-gray-900 dark:to-gray-800 py-20 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto relative">
          {/* Logo/Header Section */}
          <div className="text-center mb-8">
            <Shield className="mx-auto text-indigo-600 mb-4" size={48} />
            <h1 className="text-4xl font-bold text-indigo-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Sign in to access LeukAI Detection
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <UserCircle className="w-5 h-5 mr-2 text-indigo-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Lock className="w-5 h-5 mr-2 text-indigo-600" />
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Forgot your password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  Sign In
                </button>

                {/* Sign Up Link */}
                <div className="text-center mt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Don't have an account?{" "}
                    <Link
                      to="/create-account"
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                    >
                      Create one
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
