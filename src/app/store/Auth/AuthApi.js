// src/api/auth.js

import { axiosInstance } from "../../AxiosInstanxe/AxiosInstance";

export const authAPI = {
  // POST /api/users/auth/register/
  register: (userData) => axiosInstance.post('/users/auth/register/', userData),
  
  // POST /api/users/auth/login/
  login: (credentials) => axiosInstance.post('/users/auth/login/', credentials),
  
  // POST /api/users/auth/logout/
  logout: () => axiosInstance.post('/users/auth/logout/'),
};

// Типизация для данных регистрации
export const registerUser = async (userData) => {
  const response = await authAPI.register(userData);
  
  // Сохраняем токен и данные пользователя
  if (response.access_token) {
    localStorage.setItem('accessToken', response.access_token);
    localStorage.setItem('userRole', response.user?.role || 'student');
    localStorage.setItem('userData', JSON.stringify(response.user));
  }
  
  return response;
};