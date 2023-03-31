import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'RateLimitList',
  path: '/rateLimitList',
  component: Layout,
  redirect: '/rateLimitList/index',
  meta: {
    order: 2,
  },
  children: [
    {
      name: 'rateLimitListIndex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '限流记录',
        icon: 'ph:activity-bold',
      },
    },
  ],
} as RouteType
