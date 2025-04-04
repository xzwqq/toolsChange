import axios from 'axios';
import { rootAxios } from './rootAxios';

const token = localStorage.getItem('token');

export const getToolsCategories = async () => {
	const response = await rootAxios.get(`/categories`);
	return response.data;
};

export const getToolsManufacturers = async () => {
	const response = await rootAxios.get(`/manufacturers`);
	return response.data;
};

export const sendTools = async (formdata) => {
	console.log(formdata)
	const response = await axios.post(`${import.meta.env.VITE_API_URL}/tools`, formdata, {
		headers: {
			authorization: `Bearer ${token}`,
			"Content-Type": 'multipart/form-data',
		}
	});	
	return response.data
};

