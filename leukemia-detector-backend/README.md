# Leukemia Detector Backend

This is the backend application for detecting B-cell Acute Lymphoblastic Leukemia (B-ALL) using TensorFlow Lite models. The application allows users to upload blood microscopy images, select a model, and receive a prediction based on the input.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Project Structure](#project-structure)

## Features
- Provides multiple models for predicting B-ALL subtypes.
- Upload and analyze up to 6 images in one request.
- Outputs the predicted class of the leukemia subtype for each image.
- Supports Cross-Origin Resource Sharing (CORS) to allow communication with the frontend.
  
## Tech Stack
- **Backend**: Flask, TensorFlow Lite, NumPy
- **File Management**: Werkzeug for file uploads
- **CORS**: Flask-CORS
- **Image Processing**: Pillow

## Requirements

Before running this app, make sure you have the following dependencies installed:

- Flask
- TensorFlow
- NumPy
- Werkzeug
- Pillow
- Flask-CORS

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/leukemia-detector-backend.git
    cd leukemia-detector-backend
    ```

2. **Create a Python virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # For Windows: venv\Scripts\activate
    ```

3. **Install the required dependencies:**

    Use the provided `requirements.txt` or install manually.

    **Option 1: Install from `requirements.txt`**

    ```bash
    pip install -r requirements.txt
    ```

    **Option 2: Install manually**

    ```bash
    pip install Flask tensorflow numpy werkzeug Pillow flask-cors
    ```

    > **Note**: TensorFlow installation can take some time and may require specific system libraries, especially if you are using a GPU. Ensure you have the necessary drivers and libraries installed.

4. **Create the required directories:**

    Make sure you have an `uploads` folder for saving the uploaded images:

    ```bash
    mkdir uploads
    ```

5. **Place Your TFLite Models:**

    Ensure that your TensorFlow Lite models are located in the `models` directory. The expected models are:
    - EfficientB0.tflite
    - EfficientNetB0.tflite
    - MobileNetV2.tflite
    - NasNetMobile.tflite

## Running the Application

1. **Start the Flask development server:**

    ```bash
    python app.py
    ```

    By default, the application runs on `http://127.0.0.1:5000`. You can specify a different port if needed.

    ```bash
    python app.py --port=5001
    ```

2. **Testing the API with Curl:**

    You can test the API locally using curl or tools like Postman. Here's an example curl command to upload an image for prediction:

    ```bash
    curl -X POST http://127.0.0.1:5000/api/predictions \
         -F "files=@path_to_your_image/image1.png" \
         -F "model=EfficientNetB0"
    ```

## API Endpoints

### 1. **Get Available Models**

   **URL:** `/api/models`  
   **Method:** `GET`  
   **Response:**
   ```json
   {
       "models": ["EfficientB0", "EfficientNetB0", "MobileNetV2", "NasNetMobile"]
   }
   ```

### 2. ***Make Predictions***

   **URL:** `/api/predictions`  
   **Method:** `POST`  
   **Form Data:** 
   **Response:**
   ```json
   {
       "models": ["EfficientB0", "EfficientNetB0", "MobileNetV2", "NasNetMobile"]
   }
   ```