import { rootAxios } from "./rootAxios"

export const getRating = async (id: string | number) =>{
    const response = await rootAxios.get(`/reviews/${id}`)
    return response.data
} 