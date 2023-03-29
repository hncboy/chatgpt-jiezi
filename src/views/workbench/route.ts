import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Workbench',
  path: '/',
  component: Layout,
  redirect: '/workbench',
  meta: {
    order: 0,
  },
  children: [
    {
      name: 'WorkbenchIndex',
      path: 'workbench',
      component: () => import('./index.vue'),
      meta: {
        title: '工作台',
        icon: 'mi:archive',
      },
    },
  ],
} as RouteType
