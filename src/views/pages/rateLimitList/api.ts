import { request } from '@/utils'

export default {
  getRateLimitListData: () => request.get('/rate_limit/list'),
}
