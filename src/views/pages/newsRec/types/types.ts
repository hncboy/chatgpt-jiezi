/**
 * 响应结果
 */
export interface ApifoxModel {
  /**
   * 状态码
   */
  code?: number
  data?: IPageChatMessageVO
  /**
   * 返回消息
   */
  message?: string
  /**
   * 状态字符串
   */
  status?: ApifoxModelStatus
}

/**
* 承载数据
*/
export interface IPageChatMessageVO {
  current?: number
  pages?: number
  records?: ChatMessageVO[]
  size?: number
  total?: number
}

/**
* 聊天记录展示参数
*/
export interface ChatMessageVO {
  /**
   * API 类型
   */
  apiType?: ApiType
  /**
   * 聊天室 id
   */
  chatRoomId?: number
  /**
   * 输出消息的 tokens
   */
  completionTokens?: number
  /**
   * 消息内容，包含上下文的对话这里只会显示出用户发送的
   */
  content?: string
  /**
   * 上下文数量，包含了问题和回答的数量；第一条消息是 1
   */
  contextCount?: number
  /**
   * 对话 id
   */
  conversationId?: string
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * ip
   */
  ip?: string
  /**
   * 消息 id
   */
  messageId?: string
  /**
   * 消息类型枚举，第一条消息一定是问题
   */
  messageType?: MessageType
  /**
   * 父级回答消息 id，当前消息是问题：则 parentMessageId=parentAnswerMessageId
   */
  parentAnswerMessageId?: string
  /**
   * 父级消息 id，第一条消息父级消息 id 为空；回答的父级消息 id 不能为空
   */
  parentMessageId?: string
  /**
   * 父级问题消息 id，当前消息是回答：则 parentMessageId=parentQuestionMessageId
   */
  parentQuestionMessageId?: string
  /**
   * 输入消息的 tokens
   */
  promptTokens?: number
  /**
   * 问题上下文数量，包含了连续的问题的数量；第一条消息是 1
   */
  questionContextCount?: number
  /**
   * 错误响应数据
   */
  responseErrorData?: string
  /**
   * 聊天信息状态
   */
  status?: RecordStatus
  /**
   * 累计 Tokens
   */
  totalTokens?: number
  /**
   * 更新时间
   */
  updateTime?: Date
}

/**
* API 类型
*/
export enum ApiType {
  ChatGPTAPI = 'ChatGPTAPI',
  ChatGPTUnofficialProxyAPI = 'ChatGPTUnofficialProxyAPI',
}

/**
* 消息类型枚举，第一条消息一定是问题
*/
export enum MessageType {
  Answer = 'ANSWER',
  Question = 'QUESTION',
}

/**
* 聊天信息状态
*/
export enum RecordStatus {
  CompleteSuccess = 'COMPLETE_SUCCESS',
  Error = 'ERROR',
  Init = 'INIT',
  PartSuccess = 'PART_SUCCESS',
}

/**
* 状态字符串
*/
export enum ApifoxModelStatus {
  Fail = 'Fail',
  Success = 'Success',
  Unauthorized = 'Unauthorized',
}
