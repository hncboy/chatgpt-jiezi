import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'NewsRec',
  path: '/newsRec',
  component: Layout,
  redirect: '/newsRec/index',
  meta: {
    order: 1,
  },
  children: [
    {
      name: 'NewsRecIndex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '消息记录',
        icon: 'akar-icons:chat-dots',
      },
    },
  ],
} as RouteType
