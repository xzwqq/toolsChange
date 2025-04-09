import axios from "axios";
import { history } from "../../app/providers/history";
import { HelperActions } from "../../utils/helper/helperSlice";


export const rootAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

rootAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Добавляем интерцептор ответов для обработки ошибок
  rootAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        history.push('/login')
        HelperActions.setErrorNetwork('Токен истек войдите снова пожалуйста')
      }
      return Promise.reject(error);
    }
  );