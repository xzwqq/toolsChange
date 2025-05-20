import { notifDealtype } from "../../features/notificationForm/type/notif.type"
import { rootAxios } from "./rootAxios"

export const getnotif = async () => {
   const response = await rootAxios.get('/deals')
   return response.data.content
} 

export const choosenotif = async (data: notifDealtype) =>{
   await rootAxios.post(`/deals/${data.id}/${data.type}`)
}