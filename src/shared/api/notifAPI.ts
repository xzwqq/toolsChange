import { notifDealtype, ratingType } from "../../features/notificationForm/type/notif.type"
import { rootAxios } from "./rootAxios"

export const getnotif = async (data: string) => {
   if(data === 'in'){
      const response = await rootAxios.get('/deals')
      return response.data.content
   }else if (data === 'out'){
      const response = await rootAxios.get('/deals/outcome')
      return response.data.content
   }
} 

export const choosenotif = async (data: notifDealtype) =>{
   await rootAxios.post(`/deals/${data.id}/${data.type}`)
}

export const sendRatingApi = async (data: ratingType) => {
   await rootAxios.post('reviews', data)
}