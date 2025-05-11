import { PidorokFinish } from '../../features/editContainer/type/editType.js'
import {rootAxios} from './rootAxios.js'

export const getEditContainer = async (id: string) =>{
    const response = await rootAxios.get(`/tools/${id}`)
    return response.data
}

export const putEditContainer = async (data: FormData | PidorokFinish, id: string) =>{
    console.log(id)
    const response = await rootAxios.put(`tools/${id}`, data, {
		headers: {
			"Content-Type": 'multipart/form-data',
		}
	})
    return response.data
}