import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'UsersMgt',
  path: '/',
  component: Layout,
  redirect: '/usersMgt',
  meta: {
    order: 3,
  },
  children: [
    {
      name: 'UsersMgt',
      path: 'usersMgt',
      component: () => import('./index.vue'),
      meta: {
        title: '用户管理',
        icon: 'mi:users',
      },
    },
  ],
} as RouteType
