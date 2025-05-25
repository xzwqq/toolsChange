import { rootAxios } from "./rootAxios"

export const getRating = async () =>{
    const response = await rootAxios.get(`/reviews/my`)
    return response.data.content
} 