
import { Shield, Database } from "lucide-react";

// Details Page
export const DetailsPage = () => {
  const technologies = [
    {
      icon: Shield,
      title: "Advanced AI",
      description:
        "Cutting-edge machine learning models trained on extensive medical datasets.",
    },
    {
      icon: Database,
      title: "Comprehensive Analysis",
      description:
        "Multi-model approach providing nuanced and accurate diagnostic insights.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-indigo-900 dark:text-indigo-300 text-center mt-5 mb-12">
            About LeukAI Detection
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 mb-12">
            <h2 className="text-3xl font-semibold text-indigo-800 dark:text-indigo-400 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
              LeukAI aims to revolutionize medical diagnostics by providing
              rapid, accurate, and accessible leukemia detection through
              advanced artificial intelligence technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform transition-all hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <tech.icon
                    className="text-indigo-600 dark:text-indigo-400 mr-4"
                    size={40}
                  />
                  <h3 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
