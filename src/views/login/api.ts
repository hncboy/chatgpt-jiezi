import { request } from '@/utils'
import type { RequestConfig } from '~/types/axios'

export default {
  login: (data = {}) => request.post('/sys_user/login', data, { noNeedToken: true } as RequestConfig),
}
