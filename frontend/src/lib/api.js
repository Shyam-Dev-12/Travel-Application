import axios from "axios";

// Create an Axios instance with base URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api", // base URL for all API calls
});

export default API;