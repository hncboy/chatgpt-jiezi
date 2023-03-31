/**
 * 响应结果
 */
export interface ApifoxModel {
  /**
   * 状态码
   */
  code?: number
  data?: IPageSensitiveWordVO
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
export interface IPageSensitiveWordVO {
  current?: number
  pages?: number
  records?: SensitiveWordVO[]
  size?: number
  total?: number
}

/**
* 敏感词展示参数
*/
export interface SensitiveWordVO {
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 主键
   */
  id?: number
  /**
   * 状态 1 启用 2 停用
   */
  status?: RecordStatus
  /**
   * 更新时间
   */
  updateTime?: Date
  /**
   * 敏感词内容
   */
  word?: string
}

/**
* 状态 1 启用 2 停用
*/
export enum RecordStatus {
  The1 = 1,
  The2 = 2,
}

/**
* 状态字符串
*/
export enum ApifoxModelStatus {
  Fail = 'Fail',
  Success = 'Success',
  Unauthorized = 'Unauthorized',
}
