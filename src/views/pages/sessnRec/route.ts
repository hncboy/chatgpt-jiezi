import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'SessnRec',
  path: '/sessnRec',
  component: Layout,
  redirect: '/sessnRec/index',
  meta: {
    order: 2,
  },
  children: [
    {
      name: 'sessnReCindex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '会话记录',
        icon: 'akar-icons:book-close',
      },
    },
  ],
} as RouteType
