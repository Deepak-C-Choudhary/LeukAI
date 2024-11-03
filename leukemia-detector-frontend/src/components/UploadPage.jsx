
import { useState, useEffect } from "react";
import { getModels, makePredictions } from "../apiService";
import {
  Upload,
  Image as ImageIcon,
  X,
  AlertTriangle,
  CheckCircle2,
  Microscope,
} from "lucide-react";

const UploadPage = () => {
  // State management
  const [selectedModel, setSelectedModel] = useState("");
  const [models, setModels] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load models on component mount
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const availableModels = await getModels();
        setModels(availableModels);
      } catch (error) {
        console.error(error);
        setError("Failed to load detection models");
      }
    };
    fetchModels();
  }, []);

  // File selection and preview handling
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Limit to 6 files
    if (files.length > 6) {
      setError("Maximum 6 images allowed");
      return;
    }

    // Create file previews
    const filePreviews = files.map((file) => URL.createObjectURL(file));

    setSelectedFiles(files);
    setPreviews(filePreviews);
    setError(null);
  };

  // Remove a specific image from selection
  const removeImage = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    setSelectedFiles(newFiles);
    setPreviews(newPreviews);
  };

  // Submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!selectedModel) {
      setError("Please select a detection model");
      return;
    }

    if (selectedFiles.length === 0) {
      setError("Please upload at least one image");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("model", selectedModel);
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setIsLoading(true);
      const results = await makePredictions(formData);
      setPredictions(results);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Prediction failed. Please try again.");
      setPredictions(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Result interpretation
  const interpretResult = (confidence) => {
    if (confidence > 80) return "High Risk";
    if (confidence > 50) return "Moderate Risk";
    return "Low Risk";
  };

  const getResultColor = (confidence) => {
    if (confidence > 0.8)
      return "bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200";
    if (confidence > 0.5)
      return "bg-yellow-100 dark:bg-yellow-900 border-yellow-500 text-yellow-800 dark:text-yellow-200";
    return "bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 text-center mt-5 mb-12">
          Leukemia Detection
        </h1>

        {/* Error Handling */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg mb-6 flex items-center">
            <AlertTriangle className="mr-4" />
            <span>{error}</span>
          </div>
        )}

        {/* Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12"
        >
          {/* Model Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Select Detection Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="">Choose AI Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Upload Medical Images (Max 6)
            </label>
            <div className="border-2 border-dashed border-blue-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center text-gray-600 dark:text-gray-300"
              >
                <Upload
                  className="text-blue-500 dark:text-blue-400 mb-4"
                  size={48}
                />
                <span>Drag & drop images or click to select</span>
              </label>
            </div>

            {/* Image Previews */}
            {previews.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {previews.map((preview, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-md dark:bg-gray-700"
                  >
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg 
              hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors 
              disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Microscope className="mr-2 animate-pulse" />
                Analyzing...
              </>
            ) : (
              "Detect Leukemia"
            )}
          </button>
        </form>

        {/* Results Visualization */}
        {predictions && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6 text-center">
              Prediction Results
            </h2>

            {predictions.map((result, index) => (
              <div
                key={index}
                className={`mb-6 p-6 border-2 rounded-lg ${getResultColor(
                  result.confidence
                )}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <ImageIcon className="mr-4 text-blue-500 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                      Image {index + 1}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    {result.confidence > 10 ? (
                      <AlertTriangle className="text-red-500 mr-2" />
                    ) : (
                      <CheckCircle2 className="text-green-500 mr-2" />
                    )}
                    <span className="font-bold">
                      {result.confidence > 10
                        ? "Leukemia Detected"
                        : "No Leukemia"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Result:</p>
                    <p className="font-bold">{result.diagnosis}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Risk Assessment:
                    </p>
                    <p className="font-bold">
                      {interpretResult(result.confidence)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Confidence:
                    </p>
                    <p className="font-bold">{result.confidence.toFixed(2)}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
