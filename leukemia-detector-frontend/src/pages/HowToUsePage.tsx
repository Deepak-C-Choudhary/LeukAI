
import React from 'react';
import { 
  Shield, 
  Image, 
  Database, 
  Stethoscope,
  Clock, 
  HelpCircle, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

// How To Use Page
export default function HowToUsePage() {
  const steps = [
    {
      icon: Stethoscope,
      title: 'Select Detection Model',
      description: 'Choose the most appropriate AI model for your medical imaging needs.'
    },
    {
      icon: Image,
      title: 'Upload Images',
      description: 'Upload up to 6 medical images for analysis. Ensure high-quality, clear images.'
    },
    {
      icon: Database,
      title: 'AI Analysis',
      description: 'Our advanced AI processes the images using machine learning algorithms.'
    },
    {
      icon: Clock,
      title: 'Rapid Results',
      description: 'Receive detailed leukemia detection results within seconds.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-300 mt-5 mb-6">
            How to Use LeukAI
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A simple, streamlined process for advanced leukemia detection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <step.icon className="text-blue-600 dark:text-blue-400 mr-4" size={48} />
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300">
                  Step {index + 1}: {step.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
