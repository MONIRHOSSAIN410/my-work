import axios from "axios";

// Base URL of the Express backend. Configure via .env -> VITE_API_URL
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5005";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default apiClient;
