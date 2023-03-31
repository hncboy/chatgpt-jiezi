import type { getChatRoom } from './types/apiTypes'
import { request } from '@/utils'
export default {
  // 获取消息列表数据
  getChatRoomData: (params: getChatRoom) => request.post('/chat_room/page', params),
}
