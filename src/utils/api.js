// Import Axios to make HTTP Requests
import axios from "axios";

// Create api object that will be used to call APIs in Redux Actions
const api = axios.create({
  // Heroku
  // baseURL: 'https://dry-castle-10158.herokuapp.com/',

  // Development
  baseURL: "http://localhost:8000/",

  // Add header for content-type for POST requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Export api as default
export default api;
