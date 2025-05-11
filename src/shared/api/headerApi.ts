import { rootAxios } from "./rootAxios"

export const getContFilter = async (data: string) =>{
    const response = await rootAxios.get(`/tools/search?${data}`)
    return response.data.content
}