import { rootAxios } from "./rootAxios"


export const getContFilter = async (data: string) =>{
    const response = await rootAxios.get(`/tools/search?description=${data}`)
    return response.data.content
}