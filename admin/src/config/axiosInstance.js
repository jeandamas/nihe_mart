// axiosConfig.js
import axios from "axios";

// export const api = "http://127.0.0.1:3000";
export const api = "https://nihemart-api.onrender.com/";

const publicApi = axios.create({
  baseURL: api,
});

export default publicApi;

export const authorizedApi = axios.create({
  baseURL: api,
  timeout: 30000,
});

authorizedApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
