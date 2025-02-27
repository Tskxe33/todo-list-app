import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    // We can use this interceptor to add token on every request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
