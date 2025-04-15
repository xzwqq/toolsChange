import axios from 'axios'
import { register } from '../../features/formRegister/type/registerType';
import { form } from '../../features/formLogin/type/loginType';
export const submitLogin = async (formData: form) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};


export const submitRegister = async (formData: register) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};