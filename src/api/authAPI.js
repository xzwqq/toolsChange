import axios from 'axios'
export const submitLogin = async (formData) => {
    const response = await axios.post(`${import.meta.VITE_API_URL}/auth`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};


export const submitRegister = async (formData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};