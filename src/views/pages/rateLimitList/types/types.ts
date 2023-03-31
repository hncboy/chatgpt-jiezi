/**
 * 限流处理器展示参数
 */
export interface ApifoxModel {
  /**
   * 时间内已经发送次数
   */
  alreadySendCount?: number
  /**
   * ip
   */
  ip?: string
  /**
   * 是否被限流
   */
  isLimited?: boolean
  /**
   * 限流规则
   */
  limitRule?: string
  /**
   * 下次可以发送消息的时间
   */
  nextSendTime?: string
}
