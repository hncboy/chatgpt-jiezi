import type { getChatWord } from './types/apiTypes'
import { request } from '@/utils'

export default {
  getSensitiveWordData: (params: getChatWord) => request.get('/sensitive_word/page', { params }),
}
