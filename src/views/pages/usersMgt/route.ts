import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'UsersMgt',
  path: '/usersMgt',
  component: Layout,
  redirect: '/usersMgt/index',
  meta: {
    order: 3,
  },
  children: [
    {
      name: 'usersMgtIndex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '用户管理',
        icon: 'mi:users',
      },
    },
  ],
} as RouteType
