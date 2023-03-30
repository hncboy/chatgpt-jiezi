/**
 * 聊天记录分页查询
 */
export interface getChatMessage {
  /**
   * 聊天室 id
   */
  chatRoomId?: number
  /**
   * 问题或回复模糊搜索
   */
  content?: string
  /**
   * 每页多少条
   */
  pageNum: number
  /**
   * 第几页
   */
  pageSize: number
}
