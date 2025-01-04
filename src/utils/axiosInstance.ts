import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  const rest = localStorage.getItem("rest");
  config.headers = config.headers || {};
  config.params = config.params || {};
  if (access && rest) {
    config.params["qr_code_id"] = access;
    config.params["rest"] = rest;
    config.headers["x-api-key"] = import.meta.env.VITE_API_KEY;
  }
  return config;
});

export default axiosInstance;
