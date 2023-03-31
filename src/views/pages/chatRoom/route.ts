import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'ChatRoom',
  path: '/chatRoom',
  component: Layout,
  redirect: '/chatRoom/index',
  meta: {
    order: 3,
  },
  children: [
    {
      name: 'chatRoomIndex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '聊天室管理',
        icon: 'uil:browser',
      },
    },
  ],
} as RouteType
