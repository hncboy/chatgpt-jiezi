import { request } from '@/utils'

export default {
  getPosts: (params = {}) => request.get('posts', { params }),
  getPostById: (id: string) => request.get(`/post/${id}`),
  addPost: (data: any) => request.post('/post', data),
  updatePost: (data: any) => request.put(`/post/${data.id}`, data),
  deletePost: (id: string) => request.delete(`/post/${id}`),
}
