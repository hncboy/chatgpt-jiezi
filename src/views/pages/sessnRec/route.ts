import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'SessnRec',
  path: '/',
  component: Layout,
  redirect: '/sessnRec',
  meta: {
    order: 2,
  },
  children: [
    {
      name: 'SessnRec',
      path: 'sessnRec',
      component: () => import('./index.vue'),
      meta: {
        title: '会话记录',
        icon: 'akar-icons:book-close',
      },
    },
  ],
} as RouteType
