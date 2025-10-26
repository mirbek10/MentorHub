// src/api/axiosInstance.js
import axios from 'axios';

// Базовый URL - можно вынести в конфиг или использовать относительные пути
const BASE_URL = 'https://ayla-diandrous-unobscenely.ngrok-free.dev/api'; // Замени на свой URL

// Создаем экземпляр axios
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для добавления токена к запросам
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерцептор для обработки ответов
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Возвращаем только data
  },
  (error) => {
    // Если токен просрочен или невалидный
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);