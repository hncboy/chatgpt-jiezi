import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'NewsRec',
  path: '/',
  component: Layout,
  redirect: '/newsRec',
  meta: {
    order: 1,
  },
  children: [
    {
      name: 'NewsRec',
      path: 'newsRec',
      component: () => import('./index.vue'),
      meta: {
        title: '消息记录',
        icon: 'akar-icons:chat-dots',
      },
    },
  ],
} as RouteType
