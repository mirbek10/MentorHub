// src/hooks/useAuth.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../app/store/Auth/AuthApi';

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData) => authAPI.register(userData),
    onSuccess: (data) => {
      if (data.access_token) {
        // Сохраняем токен и данные
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('userRole', data.user?.role || 'student'); // По умолчанию student
        localStorage.setItem('userData', JSON.stringify(data.user));
        
        // Обновляем кэш
        queryClient.setQueryData(['user'], data.user);
        
        // ВСЕГДА редирект на dashboard для студентов
        // Роль ментора назначается админом позже через Django админку
        navigate('/mentorprofile');
      }
    },
    onError: (error) => {
      console.error('Registration error:', error);
      // Можно показать toast уведомление
    },
  });
};