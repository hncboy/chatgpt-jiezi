import type { getChatMessage } from './types/apiTypes'
import { request } from '@/utils'
export default {
  // 获取消息列表数据
  getChatMessageData: (params: getChatMessage) => request.post('/chat_message/page', params),
  getPostById: (id: string) => request.get(`/chat_message/post/${id}`),
  addPost: (data: any) => request.post('/chat_message/post', data),
  updatePost: (data: any) => request.put(`/chat_message/post/${data.id}`, data),
  deletePost: (id: string) => request.delete(`/chat_message/post/${id}`),
}
