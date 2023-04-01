import { resolveToken } from '../utils'

export default [
  {
    url: '/api/sys_user/login_',
    method: 'post',
    response: (options) => {
      const { account } = options.body
      if (['admin', 'editor'].includes(account)) {
        return {
          code: 200,
          status: 'Success',
          data: {
          },
          message: '登录成功',
        }
      }
      else {
        return {
          code: -1,
          message: '没有此用户',
        }
      }
    },
  },
  {
    url: '/api/auth/refreshToken',
    method: 'post',
    response: ({ headers }) => {
      return {
        code: 0,
        data: {
          token: resolveToken(headers?.authorization),
        },
      }
    },
  },
]
