import baseAxios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axios = baseAxios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Для защищенных API
axios.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { axios };
