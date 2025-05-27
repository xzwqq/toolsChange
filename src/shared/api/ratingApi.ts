import { rootAxios } from "./rootAxios"

export const getRating = async () =>{
    const response = await rootAxios.get(`/reviews/my`)
    return response.data.content
} 
export const getIDRating = async (id: string) =>{
    const response = await rootAxios.get(`/reviews/${id}`)
    return response.data.content
} 