/**
 * 限流处理器展示参数
 */
export interface RateLimitVO {

  /**
   * ip 限制时间内已发送次数
   */
  alreadySendCount?: number

  /**
   * ip
   */
  ip?: string

  /**
   * 是否被 ip 限流
   */
  isIpLimited?: boolean

  /**
   * 是否被全局限流
   */
  isGlobalLimited?: boolean

  /**
   * ip 限流规则
   */
  ipLimitRule?: string

  /**
   * 全局限流规则
   */
  globalLimitRule?: string

  /**
   * 下次可以发送消息的时间
   */
  nextSendTime?: string
}
