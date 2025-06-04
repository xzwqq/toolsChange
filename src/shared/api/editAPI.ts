import { PidorokFinish } from '../../features/editContainer/type/editType.js'
import { StateBuy } from '../../features/FormAdvert/type/form.advert.type.js'
import {rootAxios} from './rootAxios.js'

export const getEditContainer = async (id: string) =>{
    const response = await rootAxios.get(`/tools/${id}`)
    return response.data
}
export const getAverageRating = async (id: number | string) =>{
    const response = await rootAxios.get(`/reviews/${id}/rating`)
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

export const postBuyTools = async (data: StateBuy) => {
    await rootAxios.post(`/deals/purchase`, data)
}
export const postRent = async (data: StateBuy) => {
    await rootAxios.post(`/deals/rental`, data)
}
export const createChatApi = async (data: string) => {
    const respone = await rootAxios.post(`/chats/${data}`)
    return respone.data
}