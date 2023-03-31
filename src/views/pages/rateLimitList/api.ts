import { request } from '@/utils'

export default {
  getRateLimitListData: () => request.get('/sys_user/list_rate_limit'),
}
