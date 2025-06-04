import { chatikmessage } from "../../features/formChat/type/chat.type"
import { rootAxios } from "./rootAxios"

export const getQueueApi = async () => {
  const response = await rootAxios.get('/chats')
  return response.data
}

export const getChatApi = async (id: string) => {
  const response = await rootAxios.get(`/messages/${id}`)
  return response.data
}
export const postChatApi = async (data: chatikmessage) => {
  const response = await rootAxios.post(`/messages`, data)
  return response.data.content
}

