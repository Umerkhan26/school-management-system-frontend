// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update with your backend URL

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Return the response data
  } catch (error) {
    throw error.response.data; // Throw error response for handling
  }
};

// Add other API functions as needed
