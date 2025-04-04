import axios from "axios";

const token = localStorage.getItem('token')

export const rootAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        authorization: `Bearer ${token}`,
        "Content-Type" : 'application/json',
    }
})
