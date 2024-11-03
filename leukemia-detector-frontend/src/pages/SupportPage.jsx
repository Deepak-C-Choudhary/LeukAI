

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "../ui-improvements/theme"; // Import the theme context

// Support Page
export const SupportPage = () => {
  const { isDarkMode } = useTheme(); // Get the current theme mode

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "support@leukai.com",
      type: "email",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+91 8082680971",
      type: "phone",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Raisoni AI Medical Center, Tech City, Pune",
      type: "address",
    },
  ];

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support Form Submitted", formData);
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div
      className={`min-h-screen py-20 ${
        isDarkMode
          ? "bg-gray-900 text-blue-300"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mt-5 mb-12">
            Support & Contact
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-semibold mb-8">
                Contact Information
              </h2>
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`rounded-xl shadow-md p-6 mb-6 flex items-center ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <method.icon
                    className={`mr-4 ${
                      isDarkMode ? "text-white" : "text-blue-600"
                    }`}
                    size={40}
                  />
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkMode ? "text-white" : "text-blue-900"
                      }`}
                    >
                      {method.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Form */}
            <div>
              <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
              <form
                onSubmit={handleSubmit}
                className={`rounded-xl shadow-md p-8 space-y-6 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div>
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
                        : "border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-800 text-blue-300 focus:ring-blue-500"
                        : "border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
                        : "border-gray-300 text-gray-900 focus:ring-blue-500"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg transition-colors ${
                    isDarkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
