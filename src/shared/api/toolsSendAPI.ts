import { rootAxios } from './rootAxios';

export const getToolsCategories = async () => {
	const response = await rootAxios.get(`/categories`);
	return response.data;
};

export const getToolsManufacturers = async () => {
	const response = await rootAxios.get(`/manufacturers`);
	return response.data;
};

export const sendTools = async (formdata: FormData) => {
	console.log(formdata)
	const response = await rootAxios.post(`/tools`, formdata, {
		headers: {
			"Content-Type": 'multipart/form-data',
		}
	});	
	return response.data
};

