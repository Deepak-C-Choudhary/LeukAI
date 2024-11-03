import axios from "axios";
const baseApiUrl = "http://localhost:5000/api";

export const getModels = async () => {
    const response = await axios.get(`${baseApiUrl}/models`);
    return response.data.models;
};

export const makePredictions = async (formData) => {
    const response = await axios.post(`${baseApiUrl}/predictions`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.results;
};
