import axios from "axios";
import { history } from "../../app/providers/history";
import { HelperActions } from "../../utils/helper/helperSlice";
import store from '../../app/store/store'


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
  
  rootAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      const token = localStorage.getItem('token');
      if (error.response?.status === 401 && token) {
        localStorage.removeItem('token');
        store.dispatch(HelperActions.setErrorNetwork('Токен истек войдите снова пожалуйста'))
      }
      return Promise.reject(error);
    }
  );