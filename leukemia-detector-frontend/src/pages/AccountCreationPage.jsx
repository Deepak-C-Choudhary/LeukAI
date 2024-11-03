
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, UserCircle, Lock, Mail } from "lucide-react";
import { useTheme } from "../ui-improvements/theme"; // Importing the theme context

const AccountCreationPage = () => {
  const { isDarkMode } = useTheme(); // Accessing the theme context
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add your account creation logic here
    console.log("Account created with:", { name, email, password });
    // On successful account creation, redirect to login page
    navigate("/login");
  };

  return (
    <div
      className={`min-h-screen py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-green-50 to-teal-100"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          {/* Logo/Header Section */}
          <div className="text-center mb-8">
            <Shield
              className={`mx-auto mb-4 ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
              size={48}
            />
            <h1
              className={`text-4xl font-bold ${
                isDarkMode ? "text-white" : "text-green-900"
              }`}
            >
              Create Account
            </h1>
            <p
              className={`text-gray-300 mt-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get started with LeukAI Detection
            </p>
          </div>

          {/* Account Creation Form */}
          <div
            className={`rounded-xl shadow-lg p-8 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    className={`flex items-center text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    <UserCircle
                      className={`w-5 h-5 mr-2 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                      }`}
                    />
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2 border ${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    className={`flex items-center text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    <Mail
                      className={`w-5 h-5 mr-2 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                      }`}
                    />
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 border ${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    className={`flex items-center text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    <Lock
                      className={`w-5 h-5 mr-2 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                      }`}
                    />
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-2 border ${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full ${
                    isDarkMode ? "bg-green-600" : "bg-green-600 text-white"
                  } py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300`}
                >
                  Create Account
                </button>

                {/* Already Have an Account Link */}
                <div className="text-center mt-4">
                  <p
                    className={`text-gray-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className={`text-green-600 hover:text-green-800 font-medium ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      Sign in
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

export default AccountCreationPage;
