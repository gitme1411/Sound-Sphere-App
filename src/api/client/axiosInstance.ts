import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors (token, logging, etc.)
axiosInstance.interceptors.request.use(
  async config => {
    // Add token if needed
    // const token = await AsyncStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
