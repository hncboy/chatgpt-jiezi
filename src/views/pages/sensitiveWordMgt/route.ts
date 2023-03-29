import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'SensitiveWordMgt',
  path: '/',
  component: Layout,
  redirect: '/sensitiveWordMgt',
  meta: {
    order: 4,
  },
  children: [
    {
      name: 'SensitiveWordMgt',
      path: 'sensitiveWordMgt',
      component: () => import('./index.vue'),
      meta: {
        title: '敏感词管理',
        icon: 'akar-icons:circle-alert',
      },
    },
  ],
} as RouteType
