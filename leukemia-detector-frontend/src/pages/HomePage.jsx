
import { Link } from "react-router-dom";
import { Microscope, BarChart2, ShieldCheck, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-300 dark:text-blue-400 mr-4" size={48} />
      <h3 className="text-xl font-semibold text-white dark:text-gray-200">
        {title}
      </h3>
    </div>
    <p className="text-gray-200 dark:text-gray-400">{description}</p>
  </div>
);

const LandingPage = () => {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Detection",
      description:
        "Cutting-edge AI technology for precise leukemia identification",
    },
    {
      icon: BarChart2,
      title: "Comprehensive Analysis",
      description: "Detailed diagnostic insights powered by machine learning",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Results",
      description:
        "High-accuracy predictive models developed by medical experts",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-400 dark:to-purple-400 mt-5 mb-6 leading-tight">
            AI-Powered Leukemia Detection
          </h1>
          <p className="text-xl text-gray-200 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Revolutionizing medical diagnostics with advanced artificial
            intelligence to provide faster, more accurate leukemia detection
          </p>

          <Link
            to="/upload"
            className="group inline-flex items-center bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg 
            hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Detection
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-gray-200 mb-6">
            Ready to Transform Medical Diagnostics?
          </h2>
          <p className="text-gray-300 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our AI-driven platform provides rapid, accurate leukemia detection,
            empowering healthcare professionals with cutting-edge technology.
          </p>
          <Link
            to="/details"
            className="border-2 border-white dark:border-gray-400 text-white dark:text-gray-200 font-semibold py-3 px-8 rounded-full 
            hover:bg-white dark:hover:bg-gray-600 hover:text-blue-900 dark:hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LandingPage;
