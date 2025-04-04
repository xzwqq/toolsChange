import {rootAxios} from './rootAxios.js'
const token = localStorage.getItem('token')

export const getEditContainer = async (id: number) =>{
    const response = await rootAxios.get(`/tools/${id}`)
    return response.data
}

export const putEditContainer = async (data, id: number) =>{
    console.log(id)
    const response = await rootAxios.put(`tools/${id}`, data, {
		headers: {
			authorization: `Bearer ${token}`,
			"Content-Type": 'multipart/form-data',
		}
	})
    return response.data
}