import { rootAxios } from './rootAxios';
import { register } from '../../features/formRegister/type/registerType';
import { form } from '../../features/formLogin/type/loginType';

export const submitLogin = async (formData: form) => {
    const response = await rootAxios.post(`/auth`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};


export const submitRegister = async (formData: register) => {
    const response = await rootAxios.post(`/register`, formData);
    localStorage.setItem('token', response.data.token);
    return response.data;
};