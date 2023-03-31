/**
 * 响应结果
 */
export interface ApifoxModel {
  /**
   * 状态码
   */
  code?: number
  data?: IPageChatRoomVO
  /**
   * 返回消息
   */
  message?: string
  /**
   * 状态字符串
   */
  status?: Status
}

/**
* 承载数据
*/
export interface IPageChatRoomVO {
  current?: number
  pages?: number
  records?: ChatRoomVO[]
  size?: number
  total?: number
}

/**
* 聊天室展示参数
*/
export interface ChatRoomVO {
  /**
   * API 类型，不同类型的对话不能一起存储
   */
  apiType?: ApiType
  /**
   * 对话 id，唯一
   */
  conversationId?: string
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 第一条消息 id，唯一
   */
  firstMessageId?: string
  /**
   * 聊天室 id
   */
  id?: number
  /**
   * ip
   */
  ip?: string
  /**
   * 对话标题，从第一条消息截取
   */
  title?: string
  /**
   * 更新时间
   */
  updateTime?: Date
}

/**
* API 类型，不同类型的对话不能一起存储
*/
export enum ApiType {
  ChatGPTAPI = 'ChatGPTAPI',
  ChatGPTUnofficialProxyAPI = 'ChatGPTUnofficialProxyAPI',
}

/**
* 状态字符串
*/
export enum Status {
  Fail = 'Fail',
  Success = 'Success',
  Unauthorized = 'Unauthorized',
}
