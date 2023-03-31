import type { getChatMessage } from './types/apiTypes'
import { request } from '@/utils'
export default {
  // 获取消息列表数据
  getChatMessageData: (params: getChatMessage) => request.post('/chat_message/page', params),
}
