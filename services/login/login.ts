import { axiosInstance } from '@/lib/axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('/api/login', { username, password });
    console.log('Успешный вход:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка входа:',);
    throw new Error();
  }
};