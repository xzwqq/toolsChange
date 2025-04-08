import axios from "axios";
import { rootAxios } from "./rootAxios";

export const myContainer =async () => { 
    const response = await rootAxios.get(`/tools/my`)
    return response.data.content
};


export const deleteContainer =async (data: number) =>{
    console.log(data)
    const response = await rootAxios.delete(`/tools/${data}`)
    return response.data
}

export const AllContainer = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_URL}/tools`)
	return response.data.content
}