// import process from 'dotenv/config'
// axiosConfig.js
import axios from "axios";

//  export const api = "http://127.0.0.1:3000";
// export const api = process.env.API_URL
export const api = import.meta.env.VITE_API_URL;

const publicApi = axios.create({
  baseURL: api,
});

export default publicApi;

export const authorizedApi = axios.create({
  baseURL: api,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

authorizedApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);